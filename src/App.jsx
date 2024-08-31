import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './privateRouter';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import Auth from './Login';

import "./global.css";
import styles from './App.module.css';

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
      { type: "paragraph", content: "evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
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
      { type: "paragraph", content: "evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publisheadAt: new Date('2024-05-04 20:00:00'),
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route
          path="/"
          element={
            <PrivateRoute element={
              <>
                <Header />
                <div className={styles.wrapper}>
                  <Sidebar />
                  <main>
                    {posts.map((post) => (
                      <Post
                        key={post.id}
                        author={post.author}
                        avatarUrl={post.avatarUrl}
                        role={post.role}
                        content={post.content}
                        publisheadAt={post.publisheadAt}
                      />
                    ))}
                  </main>
                </div>
              </>
            } />
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
