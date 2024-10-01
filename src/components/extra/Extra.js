import React, { useCallback, useMemo, useState } from 'react'
import { Input } from '../common';
function Extra() {

    const [debounceValue, setDebounceValue] = useState('')
    const [throtted, setThrotted] = useState('')
    const ourDebounce = (fun, delay) => {
        let timer;
        return (...arg) => {
            clearTimeout();
            timer = setTimeout(() => {
                fun(...arg)
            }, delay)
        }
    }
    const ourThrotted = (fun, delay) => {
        let timer;
        return (...arg) => {
            if (!timer) {
                fun(...arg);
                timer = setTimeout(() => {
                    timer = null
                }, delay)
            }
        }
    }
    const handleChangeDebounce = (e) => {
        console.log(e.target.value)
        setDebounceValue(e.target.value)

    }
    const handleChangeThrotted = (e) => {
        console.log(e.target.value)
        setThrotted(e.target.value)

    }
    const debounceChange = useCallback(ourDebounce(handleChangeDebounce, 500), [])
    const throteedChange = useCallback(ourThrotted(handleChangeThrotted, 1000), [])

    // const debounceChange = useMemo(() => ourDebounce(handleChangeDebounce, 500), [])
    // const throteedChange = useMemo(() => ourThrotted(handleChangeThrotted, 1000), [])
    return (
        <div>
            <div>Debounce : {debounceValue}</div>
            <Input onChange={debounceChange} />
            <div>Throtted : {throtted}</div>
            <Input onChange={throteedChange} />
        </div>
    )
}

export default Extra

// e.preventDefault();
// const formData = new FormData(e.target)
// const obj = Object.fromEntries(formData.entries())
// console.log(obj, 'obj')