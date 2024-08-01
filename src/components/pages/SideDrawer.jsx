import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { HomeIcon } from '../assets/icon'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../common'
import { routeData } from '../../data/routeData'

const useStyles = makeStyles({
    mainDrawer: {
        width: '30%',
        maxWidth: '250px',
        height: '100vh',
        border: '1px solid #0000ff',
        display: 'flex',
        flexDirection: 'column'
    }
})

function SideDrawer() {
    const classes = useStyles()
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('login')
        navigate('/login')
    }

    const routeRawData = routeData?.filter((item) => item.name !== 'Login')
    return (
        <div className={classes.mainDrawer}>
            {routeRawData?.map((item, index) => {
                return (
                    <Link key={index} to={item.path} >{item.name}</Link>
                )
            })}
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default SideDrawer
