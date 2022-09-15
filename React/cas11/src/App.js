import {Route, Routes} from 'react-router-dom'
import {Weather, Nav, Cities} from './components'


function App() {



  return (
    <div className="App">
      
      <Nav />
      <Routes>
        <Route path="/local-weather" element={<Weather/>}/>
        <Route path="/search-cities" element={<Cities/>}/>
      </Routes>

    </div>
  );
}

export default App;
