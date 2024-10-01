import React from 'react'
import { color } from '../assets/constant'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        padding: '0.5rem 2rem',
        backgroundColor: color.button,
        borderRadius: '5px',
        fontFamily: 'monospace',
        fontSize: '1rem',
        color: color.text
    },
})

function Button({
    children,
    type = 'button',
    bgColor = color.button,
    className = "",
    ...props
}) {
    const classes = useStyles()
    return (
        <button className={`${classes.root} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button