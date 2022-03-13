import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './style10.module.css'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType,boolean>(state => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(()=>dispatch(loadingAC(false)),2000)
        console.log('loading...')
    };

    return (
        <div>
            <h2>Homework 10</h2>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.container}>
                        <svg viewBox="0 0 50 50">
                            <circle className={s.ring} cx="25" cy="25" r="20"></circle>
                            <circle className={s.ball} cx="25" cy="5" r="3.5"></circle>
                        </svg>

                    </div>
                ) : (
                    <div className={s.container}>
                        <SuperButton onClick={setLoading} className={s.myButton}>set loading...</SuperButton>
                    </div>
                )
            }
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
