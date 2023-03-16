


export const Unpure = ({number}) => {

    console.log('Unpure')

    const result = number + Math.random() * 100
    return (
        <div>
            <p>result : {result}</p>
        </div>
    )
}