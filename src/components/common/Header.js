import React from 'react'
import { makeStyles } from '@mui/styles'
import { color } from '../assets/constant'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        height: '10vh',
        backgroundColor: color.primary,
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'monospace',
        fontSize: '1.2rem',
        color: color.text,
        padding: '0 1rem'
    },
})
function Header() {
    const classes = useStyles()
    return (
        <div className={classes.root}>Header</div>
    )
}

export default Header