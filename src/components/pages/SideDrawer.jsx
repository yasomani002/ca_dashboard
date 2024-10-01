import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../common'
import { routeData } from '../../data/routeData'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { color } from '../assets/constant'

const useStyles = makeStyles({
    mainDrawer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    openDrawer: {
        width: '30%',
        maxWidth: '250px',
    },
    closeDrawer: {
        width: '30%',
        maxWidth: '100px',
    },
    header: {
        height: '50px',
        width: '100%',
        backgroundColor: 'blue',
        padding: '15px 20px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr'
    },
    arrow: {
        height: '0',
        width: '0',
        borderStyle: 'solid'
    },
    headerText: {
        fontFamily: 'monospace',
        fontSize: '1rem'
    },
    menuContainer: {
        padding: '15px 20px',
        backgroundColor: color.primary,
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
    },
    activeTab: {
        backgroundColor: color.secondary,
        fontWeight: 'bold',
    },
    logoutButton: {
        position: 'relative',
        bottom: '0',
        width: '100%'
    }
})

function SideDrawer() {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

    const [open, setOpen] = useState(true)
    const handleSidebarToggle = () => {
        setOpen(!open)
    }
    const handleLogout = () => {
        localStorage.removeItem('login')
        navigate('/login')
    }

    const routeRawData = routeData?.filter((item) => item.name !== 'Login')
    return (
        <div className={`${classes.mainDrawer} ${open ? classes.openDrawer : classes.closeDrawer}`}>

            <div className={classes.header}>
                <button className={`${classes.arrow}`} onClick={handleSidebarToggle}>
                    {open ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}


                </button>
                {
                    open ? <p className={classes.headerText}> Just Code </p> : ''
                }
            </div>

            {routeRawData?.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link
                        className={`${classes.menuContainer} ${isActive ? classes.activeTab : ''}`}
                        key={index} to={item.path} >
                        {item.icon}
                        {open &&
                            <p className={classes.headerText}>{item.name}</p>
                        }
                    </Link>
                )
            })}
            <div className={classes.logoutButton}>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    )
}

export default SideDrawer
