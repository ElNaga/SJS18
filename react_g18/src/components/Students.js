// const Student = ({student : {name, lastname, email, age}}) => (
//     <div>
//         <p>Name: {name}</p>
//         <p>Lastname: {lastname}</p>
//         <p>Age: {age}</p>
//         <p>E-mail: {email}</p>
//     </div>
// )

const Student = ({ student }) => {

    const { name, lastname, age, email } = student;

    return (
        <div>
            <h3>Functional Component</h3>
            <p>Name: {name}</p>
            <p>Lastname: {lastname}</p>
            <p>Age: {age}</p>
            <p>E-mail: {email}</p>
        </div>
    )
}


export default Student