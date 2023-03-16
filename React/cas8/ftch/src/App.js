import { Routes, Route } from "react-router-dom"

import { API_URL, POSTS_SIZE } from "./utils/constants"

//components
import { Nav } from "./components/Nav"
import { Posts } from "./components/Posts"
import { Comments } from "./components/Comments"
import { Gallery } from "./components/Gallery"
import { useEffect, useState } from "react"

const App = () => {

  const [posts, setPosts] = useState(null)

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/posts?_limit=${POSTS_SIZE}`)
      const data     = await response.json()
      await new Promise((r) => setTimeout(r, 5000))
      setPosts(data)
    }

    fetchData()
  }, []);

  const [comments, setComments] = useState(null)

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/comments?_limit=${POSTS_SIZE}`)
      const data     = await response.json()
      //await new Promise((r) => setTimeout(r, 5000))
      setPosts(data)
    }

    fetchData()
  }, [])
  
  console.log("APP" , posts)

  return (
    <div>
      <Nav />
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <Routes>
        <Route path="/posts"    element={<Posts posts={posts} />}/>
        <Route path="/comments" element={<Comments />}/>
        <Route path="/gallery"  element={<Gallery />}/>
      </Routes>
    </div>
  );
}

export default App