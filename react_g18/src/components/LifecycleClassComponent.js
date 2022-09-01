import { Component } from "react";


export class LifecycleClassComponent extends Component {

    constructor(props){
        super(props)
        console.log('LifecycleClassComponent -> Constructor')

        //thisis the initial state of the component
        this.state = {
            counter : 0
        }
    }

    // method called after render() only adter initial render...
    componentDidMount(){
        console.log('LifecycleClassComponent -> componentDidMount')
    }

    // method called when component will be removed from  DOM
    componentWillUnmount() {
        console.log('LifecycleClassComponent -> componentWillUnmount')
    }

    increment = () => {
        //console.log('Increment Function');
        //this.setState({counter : this.state.counter+1})
        this.setState(() => (
            {counter : this.state.counter+1}
        ))
        console.log(this.state.counter)
    }

    // method called every time component needs to re-render
    render(){
        console.log('LifecycleClassComponent render')
        return(
            <>
            <h2> Class Component </h2>
            <p>Counter value : {this.state.counter}</p>
            <button
                onClick = { this.increment }
            >Increment</button>
            </>
        )
    }
}