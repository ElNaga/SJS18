const initialState = {
    greeting: "Hi!"
}

export const HelloReducer = (state = initialState, action) => {

    switch(action.type) {
        case "SAY_HELLO" :
            return {
                ...state, 
                greeting : action.payload
            }
        default :
            return state
    }


}