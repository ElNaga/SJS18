import { useState } from "react"

// create a date picker
// header section 
//  - display current date --- OK
// date section
//  - display current week + next week
//  - highliht the current date
//  - display the days of the week starting monday , or sunday based on user preference
//  - disable previous dates
// Middle section ( Morning / Afternoon / Evening )
// - based on time of day select the current part of day
// - previous day section should be disabled
//      example : if its evening, the morning and afternoon should be disabled
// Time section
// - Morning 8 : 11:45, afternoon 12 - 3:45, evening 4 - 7:45
// - previous time ( before now ) should be disabled
//      example : if its afternoon and its 2:15 pm , all the previous time slots should be disabled
// Apply
// - display the selected date in alert 

export const DatePicker = ({dateNow}) => {


    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };



    // const setPreviousDate = () => {
    //     let newDay = date[0] - 1;
    //     let newMonth = date[1]
    //     if (newDay == 0) {
    //         newMonth-=1;

    //     }
    // }
    const daysToDisplay = () => {
        let numberOfDays = 0;
        if (dateNow.month == 0 | 2 | 4| 6 | 7 | 9| 11) {
            numberOfDays = 31;
        } else if ((dateNow.month ==1) && (dateNow.year%4)) {
            numberOfDays = 29
        } else if ((dateNow.month ==1) && !(dateNow.year%4)) {
            numberOfDays = 28
        } else {
            numberOfDays = 30
        }
        return numberOfDays
    }
      //console.log(daysToDisplay())
      //console.log(dateNow.date)

    return (
        <>
            <div className="wrapper">
                <div>
                    <h2>Pick date and time </h2>
                </div>
                <div>
                    <div className="less-then-sign">
                        &#60;
                    </div>
                    <div>
                        {monthNames[dateNow.month-1]} {dateNow.date}, {dateNow.year}
                    </div>
                    <div className="more-then-sign">
                        &#62;
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}