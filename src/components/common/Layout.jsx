import { makeStyles } from '@mui/styles'
import React from 'react'
import SideDrawer from '../pages/SideDrawer'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100vw',
        height: '100vh'
    },
    rightSideBar: {
        width: '100%',
        height: '100%',
        border: '1px solid #000000'
    }
})
function Layout({ children }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <SideDrawer />
            <div className={classes.rightSideBar}>
                {children}
            </div>
        </div>
    )
}

export default Layout
