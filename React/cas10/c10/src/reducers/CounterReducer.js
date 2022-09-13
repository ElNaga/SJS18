const initialState = {
    counter: 0
}

export const CounterReducer = (state = initialState, action) => {

    switch(action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter : state.counter + action.payload
            }
        case "DECREMENT":
            return {
                ...state,
                counter : state.counter - action.payload
            }
        default :
            return state
    }


}