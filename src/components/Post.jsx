import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from "./Post.module.css";

import PropTypes from 'prop-types';
import { Comment } from './Comment';
import { useState } from 'react';


export function Post({ author, content, publisheadAt }) {

  const [comments, setComments] = useState([
    'Up'
  ]);

  const [newCommentText, setNewCommentText ] = useState('')


  const publishedDateFormatted = format(publisheadAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publisheadAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(){
    event.preventDefault()
    
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleCreateNewCommentChange(){
    setNewCommentText(event.target.value);
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src={author.avatarUrl}
              alt={`Avatar de ${author.name}`}
            />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time title={publishedDateFormatted} dateTime={publisheadAt.toISOString()}>
          {publishedDateRelativeToNow}
          </time>
        </header>
        <div className={styles.content}>
          {content.map(item => {
            if (item.type === 'paragraph') {
              return <p key={item.content}>{item.content}</p>;
            } else if (item.type === 'link') {
              return <a key={item.content} href={item.content}>{item.content}</a>;
            }
            return null;
          })}
        </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
           name="comment"
           value={newCommentText}
           placeholder="Deixe um comentário"
           onChange={handleCreateNewCommentChange}
          />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
         {comments.map(comment =>{
          return <Comment key={comment} content={comment}/>
         })}
        </div>
      </article>
    </>
  );
}

Post.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  publisheadAt: PropTypes.instanceOf(Date).isRequired
};
