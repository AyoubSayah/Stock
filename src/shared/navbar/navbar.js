import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import clsx from 'clsx';
import { CheckBoxOutlineBlank } from '@material-ui/icons';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: '#626ED4',
    marginLeft: '.5rem',
  },
  title: {
    flexGrow: 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: 'white',
    boxShadow: 'none',
    // borderBottom:'1px solid gray'
  },
  closed: {
    width: `calc(100% - ${theme.spacing(7) + 1}px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100%- ${theme.spacing(9) + 1}px)`,
    },
    background: 'white',
    boxShadow: 'none',
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [opendrawer, setOpen] = React.useState(true);
  const [flag, setflag] = React.useState(false);
  const open = Boolean(anchorEl);
  const [image, setimage] = React.useState('french');
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleflagMenu = (event) => {
    console.log(event);
    setflag(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setflag(null);
  };
  const handledrawer = () => {
    props.lockside(!opendrawer);

    setOpen(!opendrawer);
  };
  const handleimage = (img) => {
    setimage(img);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: opendrawer,
          [classes.closed]: !opendrawer,
        })}
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={handledrawer}
            style={{ marginRight: 'auto' }}
          >
            <MenuIcon />
          </IconButton>

          <div>
            <IconButton
              aria-label='account of current user'
              // aria-controls='menu-appbar'

              aria-haspopup='true'
              color='inherit'
              edge='start'
              onClick={handleflagMenu}
            >
              <img
                src={`assets/images/${image}.png`}
                alt='french'
                style={{ width: '1.9rem' }}
              />
            </IconButton>
            <IconButton
              aria-label='account of current user'
              // aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
              edge='start'
            >
              <NotificationsIcon className={classes.menuButton} />
            </IconButton>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
              edge='start'
            >
              <AccountCircle className={classes.menuButton} />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            <Menu
              id='menu-flag'
              anchorEl={flag}
              elevation={1}
              open={Boolean(flag)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleimage('french');
                }}
              >
                {' '}
                <img
                  src='assets/images/french.png'
                  alt='french'
                  style={{ width: '1.9rem' }}
                />
                Français
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleimage('tunisia');
                }}
              >
                {' '}
                <img
                  src='assets/images/tunisia.png'
                  alt='french'
                  style={{ width: '1.9rem', marginRight: 'auto' }}
                />
                العربية
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
