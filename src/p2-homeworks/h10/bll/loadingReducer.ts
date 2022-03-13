
const initState = {loading:false}


export const loadingReducer = (state = initState, action: loadingACType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            state.loading = action.value
            return {...state}
        }
        default:
            return state
    }
}


type loadingACType = {
    type: 'CHANGE-LOADING'
    value: boolean
}
export const loadingAC = (value:boolean): loadingACType => {
    return {type:'CHANGE-LOADING', value}
}// fix any