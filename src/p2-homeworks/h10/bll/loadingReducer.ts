type stateType = {
    loading: boolean
}
const initState:stateType = {loading:false}


export const loadingReducer = (state = initState, action: loadingACtype): any => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {
            state.loading = action.value
            return state
        }
        default:
            return state
    }
}


type loadingACtype = {
    type: 'IS-LOADING'
    value: boolean
}
export const loadingAC = (value:boolean): loadingACtype => {
    return {type:"IS-LOADING", value}
} // fix any