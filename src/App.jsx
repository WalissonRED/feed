import { Header } from "./components/Header";

import "./global.css";
import  styles from './App.module.css'

import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luizotavio.png',
      name: 'Joao rebinboca',
      role: 'Nada'
  },
  content: [
    {type: "paragraph", content: "Fala galeraa 👋" },
    {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return," },
    { type: "paragraph",content: "evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
    { type: "link", content: "jane.design/doctorcare" },
  ],
  publisheadAt: new Date('2024-08-30 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Maik baguncinha',
      role: 'FBI'
  },
  content: [
    {type: "paragraph", content: "Fala galeraa 👋" },
    {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return," },
    { type: "paragraph",content: "evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
    { type: "link", content: "jane.design/doctorcare" },
  ],
  publisheadAt: new Date('2024-05-04 20:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
       {posts.map((post, index) => {
        return(
          <Post key={index}
          author={post.author}
          avatarUrl={post.avatarUrl}
          role={post.role}
          content={post.content}
          publisheadAt={post.publisheadAt}
          />
        ) 
       } )}
      </main>
      </div>
    </>
  );
}

export default App;
