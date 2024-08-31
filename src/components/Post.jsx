import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from "./Post.module.css";

import PropTypes from 'prop-types';
import { Comment } from './Comment';

export function Post({ author, content, publisheadAt }) {

  const publishedDateFormatted = format(publisheadAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publisheadAt, {
    locale: ptBR,
    addSuffix: true
  });

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
          {content.map((item, index) => {
            if (item.type === 'paragraph') {
              return <p key={index}>{item.content}</p>;
            } else if (item.type === 'link') {
              return <a key={index} href={item.content}>{item.content}</a>;
            }
            return null;
          })}
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            placeholder="Deixe um comentário"
          />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
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
