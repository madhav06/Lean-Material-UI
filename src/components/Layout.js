import { Divider, makeStyles } from '@material-ui/core'
import React from 'react'
import { styled, useTheme } from '@material-ui/core/styles';
import  Drawer  from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import  Typography  from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';
import  List  from '@material-ui/core/List'
import  ListItem  from '@material-ui/core/ListItem'
import  ListItemIcon  from '@material-ui/core/ListItemIcon'
import  ListItemText  from '@material-ui/core/ListItemText'
import { CloudUploadOutlined, EmailOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import  Avatar  from '@material-ui/core/Avatar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: 'f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: 'f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        welcome: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

export default function Layout({ children }) {
    
    
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'All Paintings',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Upload Paintings',
            icon: <CloudUploadOutlined color='secondary' />,
            path: '/create'
        },
        {
            text: 'Contact Us',
            icon: <EmailOutlined color='secondary' />,
            path: '/contact'
        },
    ]

  return (
    <div className={classes.root}>
        {/* app bar */}
        <AppBar
            className={classes.appbar}
            elevation={1}
        >
            <Toolbar>
                <Typography className={classes.welcome}>
                    Welcome
                </Typography>
                <Typography>
                    User
                </Typography>
                <Avatar src='/pastor_avatar.svg' className={classes.avatar} />
            </Toolbar>
        </AppBar>

        {/* side drawer */}
        <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{  paper: classes.drawerPaper }}
        >
            <div>
                <Typography variant='h5' className={classes.title}>
                    Paintings Catalogue
                </Typography>
            </div>

            <List>
                {menuItems.map(item => (
                    <ListItem button key={item.text} onClick={() => history.push(item.path)}
                    className={location.pathname == item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

        </Drawer>

        <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
        </div>
      
    </div>
  )
}
