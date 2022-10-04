



export const DaysDisplay = ({dateNow}) => {



    console.log('month in daysdisplayu',dateNow.month)
    const daysWithinMonth = (month) => {
        const conditionsArray = [
            (month ==1),
            (month ==3),
            (month ==5),
            (month ==7),
            (month ==8),
            (month ==12),
            (month ==10),
        ]
        let numberOfDays = 0;
        if (!conditionsArray.includes(false)) {
            console.log('month is', month)
            numberOfDays = 31;
        } else if ((month ==1) && (dateNow.year%4)) {
            numberOfDays = 29
        } else if ((month ==1) && !(dateNow.year%4)) {
            numberOfDays = 28
        } else {
            numberOfDays = 30
        }
        return numberOfDays
    }

    // console.log(dateNow.year)
    console.log('days in month',daysWithinMonth(dateNow.month))

    const checkIfPrevNextMonth = () => {
        let numDaysToCheck = 14 - dateNow.dayOfWeek;
        // console.log('type of numDaysToCheck',typeof numDaysToCheck)
        // console.log('type of dateNow.date',typeof dateNow.date,dateNow.date)
        let arrayDays = [];
        console.log(numDaysToCheck+dateNow.date)
        if ( (numDaysToCheck+dateNow.date) > daysWithinMonth() ) {
            // console.log('here')
            arrayDays = [...Array(daysWithinMonth(dateNow.month) - (dateNow.date - dateNow.dayOfWeek + 1) + 1).keys()].map(x => x + (dateNow.date + 1 - dateNow.dayOfWeek))
            arrayDays = [...arrayDays,...[...Array(14 - arrayDays.length ).keys()].map(x => x + 1)]
        } else if ( dateNow.date < dateNow.dayOfWeek ) { //dateNow.date < dateNow.dayOfWeek
            console.log('ehre')
            arrayDays = [...Array(daysWithinMonth(dateNow.month-1) - ( daysWithinMonth(dateNow.month-1) - (dateNow.dayOfWeek -1)  ) + 1).keys()].map(x => x + ( daysWithinMonth(dateNow.month-1) -  (dateNow.dayOfWeek -1))  )
            arrayDays = [...arrayDays,...[...Array(14 - arrayDays.length ).keys()].map(x => x + 1)]
        }else {
            arrayDays = [...Array(daysWithinMonth(dateNow.month) - dateNow.date + 1).keys()].map(x => x + dateNow.date)
        }
        console.log('arraydays',arrayDays)
        const objectDays = {
            firstSeven : arrayDays.slice(0,7),
            secondSeven : arrayDays.slice(7,14)
        }
        return objectDays;
    }
    console.log('check object',checkIfPrevNextMonth())

    const daysOfTheWeek = ['MON','TUE','WED','THU','FRY','SAT','SUN'];
    const numeratedDays = checkIfPrevNextMonth();

    return (
        <div>
            <ul className="day_names">
                {daysOfTheWeek.map( (day,i) => (
                    <li key={i}>
                        {day}
                    </li>
                ) )}
            </ul>
            <ul className="first_week">
                {numeratedDays.firstSeven.map( (day,i) => (
                    <li key={i}>
                        {day}
                    </li>
                ) )}
            </ul>
            <ul className="second_week">
                {numeratedDays.secondSeven.map( (day,i) => (
                    <li key={i}>
                        {day}
                    </li>
                ) )}
            </ul>
        </div>
    )}
