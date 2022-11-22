import { Header } from './components/Header';
import { Post } from './components/Post';
import {Sidebar} from './components/Sidebar'

import styles from './App.module.css';

import './global.css';

// author: {avar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const post =[
  {
    id: 1,
    author:{
        avatarUrl: 'https://github.com/Raphaelmsp.png',
        name: 'Raphael Pedro',
        role: 'Desenvolvedor'
    },
    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-11-13 08:00:00'),
  },
{
  id: 2,
  author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rockeseat'
  },
  content:[
    { type: 'paragraph', content: 'Fala galeraa 👋', },
    { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content: '👉 jane.design/doctorcare' }
  ],
  publishedAt: new Date('2022-11-10 08:00:00'),
},
];

export function App() {
  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {post.map(post =>{
        return (
          <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
    
      })}
      </main>
    </div>
  </div>
  )
}

