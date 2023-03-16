import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { User } from './components/User'
import { Users } from './components/Users'
import { NewUser } from './components/NewUser'
import { NotFound } from './components/NotFound'
import { Posts } from './components/Posts'
import { API_URL, POSTS_SIZE } from './utils/constants'

import { Routes, Route } from 'react-router-dom'
import { UserLayout } from './layouts/UserLayout'
import {useEffect, useState} from 'react'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`${API_URL}/posts?_limit=${POSTS_SIZE}`)
      const data = response.json()
      setPosts(data)


      fetchData();
    }},[])


  return (
    <div >
      <h2>123</h2>



      <Nav />
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/posts' element={<Posts posts={posts}/>} />
        
        <Route path='/users' element={<UserLayout/>}>
        <Route index  element={<Users />} />
        <Route path=':id' element={<User />} />
        <Route path='new' element={<NewUser />} />
        </Route>

        <Route path='*' element={<NotFound/>}/>

      </Routes>





    </div>
  );
}

export default App;
