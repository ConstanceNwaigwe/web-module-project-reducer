export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const M_MEMORY = "M_MEMORY";
export const MR_MEMORY = "MR_MEMORY";
export const MC_MEMORY = "MC_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}


export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const mMemory = () => {
    return({type:M_MEMORY});
}

export const mrMemory = () => {
    return({type:MR_MEMORY});
}

export const mcMemory = () => {
    return({type:MC_MEMORY});
}