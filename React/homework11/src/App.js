import { useState } from "react";
import { DatePicker } from "./components/DatePicker";
import { DaysDisplay } from "./components/DaysDisplay";


function App() {

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };


  let newDate = new Date()
  let dayOfWeek = newDate.getDay();
  let date = newDate.getDate();
  let month = newDate.getMonth()+1;
  let year = newDate.getFullYear();
  // console.log('appjs today is',date.toLocaleString('en-US', options))
  // console.log(month)
  // console.log(year)
  // console.log('day of the week | appjs',dayOfWeek)
  const [dateNow, setDateNow] = useState({
    // dayOfWeek,
    // date : date,
    // month,
    // year
    dayOfWeek : 4,
    date : 1,
    month : 9,
    year : 2022
  })


  return (
    <div className="App">
      <DatePicker dateNow={dateNow}/>
      <DaysDisplay dateNow={dateNow}/>
    </div>
  );
}

export default App;
