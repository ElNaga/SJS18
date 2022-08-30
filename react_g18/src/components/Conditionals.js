import PropTypes from 'prop-types'

const Conditionals = ({toShow, fruits}) => {

    // if ( !toShow){
    //     return null
    // }

    // return <>
    // <div>111</div>
    // <div></div></>   FRAGMENT ELEMENT

    return (<div>
        { !toShow && <p>111</p> }
        { toShow ? <p>111</p> : <p>222</p>}

        <ul>
            {fruits.length && fruits.map((fruit,index) => {
                return ( <li key={index}>{fruit}</li> )
            })}
        </ul>

        <ul>
            {fruits.map((fruit,index) => <li key={index}>{fruit}</li> )}
        </ul>
    </div>)
}

export default Conditionals


Conditionals.propTypes = {
    toShow: PropTypes.bool,
    fruits: PropTypes.arrayOf(PropTypes.string).isRequired
}