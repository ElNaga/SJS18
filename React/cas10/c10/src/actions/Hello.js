export const sayHello = () => {

    // ACtion is afunction that returns an object of type {type: TYPE_OF_ACTION, payload: NEW_STATE
    return {
        
        type : "SAY_HELLO",
        payload: "Hi and welcome to my lovely redux"
    }
}