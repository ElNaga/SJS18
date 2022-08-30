import { Component } from "react";

export class StudentClass extends Component {

    render() {

        const { name, lastname, age, email } = this.props.student;
        return <div>
            <h3>Class Component</h3>
            <p>Name: {name}</p>
            <p>Lastname: {lastname}</p>
            <p>Age: {age}</p>
            <p>E-mail: {email}</p>
        </div>
    }
}