import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { User } from './components/User'
import { Users } from './components/Users'
import { NewUser } from './components/NewUser'
import { NotFound } from './components/NotFound'

import { Routes, Route } from 'react-router-dom'
import { UserLayout } from './layouts/UserLayout'

function App() {

  const users = [
    {
      name: "Daniel"
    },
    {
      name: "Alek"
    },
    {
      name: "Dame"
    },
  ]
  return (
    <div >
      <h2>123</h2>

      <Nav />
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
        <Route path='/users' element={<UserLayout/>}>
        <Route index  element={<Users users={users}/>} />
        <Route path=':id' element={<User />} />
        <Route path='new' element={<NewUser />} />
        </Route>

        <Route path='*' element={<NotFound/>}/>

      </Routes>





    </div>
  );
}

export default App;
