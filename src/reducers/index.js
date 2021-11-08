
//import variables from action file
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, M_MEMORY, MR_MEMORY, MC_MEMORY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

//Function that return the sum of two numbers based on the operation sign
const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
        default:
            console.log("umm...");
    }
}


//function that takes in the action type created in action file
const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case(CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            });
        case(M_MEMORY):
            return({
                ...state,
                memory: state.total
            });
        case(MR_MEMORY):
            return({
                ...state,
                memory: calculateResult(state.total, state.memory, "+")
            });
        case(MC_MEMORY):
            return({
                ...state,
                memory: 0
            });
            
        default:
            return state;
    }
}

export default reducer;