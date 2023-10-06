import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PostList from './components/postdata.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostList />
  </React.StrictMode>,
)
