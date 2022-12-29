import './Home.css'

export const Home = () => {

  console.log(JSON.parse(localStorage.getItem('token')))
  
  return (
    <div>
        Home Component
    </div>
  )
}
