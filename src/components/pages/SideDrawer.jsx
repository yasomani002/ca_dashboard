import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../common'
import { routeData } from '../../data/routeData'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import { color } from '../assets/constant'

const useStyles = makeStyles({
    mainDrawer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: color.primary,
    },
    openDrawer: {
        width: '30%',
        maxWidth: '250px',
    },
    closeDrawer: {
        width: '5%',
        minWidth: '70px',
    },
    header: {
        height: '10vh',
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
        columnGap: '1rem'
    },
    headerText: {
        fontFamily: 'monospace',
        fontSize: '1rem',
        color: color.text
    },
    menuContainer: {
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
        columnGap: '1rem'
    },
    activeTab: {
        backgroundColor: color.secondary,
        fontWeight: 'bold',
    },
    logoutButton: {
        marginTop: 'auto',
        padding: '20px'
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
                {open ? <p className={classes.headerText}>Just Code</p> : ''}
            </div>

            {/* Menu Items */}
            {routeRawData[0]?.children.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link
                        className={`${classes.menuContainer} ${isActive ? classes.activeTab : ''}`}
                        key={index}
                        to={item.path}
                    >
                        {item.icon}
                        {open && <p className={classes.headerText}>{item.name}</p>}
                    </Link>
                );
            })}

            {/* Logout Button */}
            <div className={classes.logoutButton}>
                {open ?
                    <Button
                        onClick={handleLogout}
                    >Logout
                    </Button>
                    :
                    <LogoutIcon />
                }
            </div>
        </div>

    )
}

export default SideDrawer
