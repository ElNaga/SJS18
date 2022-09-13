export const increment = (value) => {

    // ACtion is afunction that returns an object of type {type: TYPE_OF_ACTION, payload: NEW_STATE
    return {
        
        type : "INCREMENT",
        payload: value
    }
}
export const decrement = (value) => {

    // ACtion is afunction that returns an object of type {type: TYPE_OF_ACTION, payload: NEW_STATE
    return {
        
        type : "DECREMENT",
        payload: value
    }
}