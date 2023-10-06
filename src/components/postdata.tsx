import { useState, useEffect } from 'react';
import PostData from './types';

const PostList = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
          } catch (error) {
          }
        };
    
        fetchData();
      }, []);

      //function to call color

      const h2Style = {
        color: 'red',
      }
      const h3Style = {
        color: 'Green',
      }



   return (
        <div>
          <h2 style={h2Style}>Post List</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3 style={h3Style}>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default PostList;