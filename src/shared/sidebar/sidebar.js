import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { NavLink } from 'react-router-dom';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import './sidebar.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Profilecard from '../profilecard/profilecard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonIcon from '@material-ui/icons/Person';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  image: {
    maxWidth: '8rem',
    margin: '0 auto',
  },
  ListItem: {},
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const isclosed = props.drawer;

  //   const toggleDrawer = (anchor, open) => (event) => {
  //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //       return;
  //     }
  // setclosed(open)
  //   };
  const handlemouse = () => {};

  return (
    <div>
      <React.Fragment key='left'>
        <Drawer
          anchor={'left'}
          open={true}
          variant='persistent'
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: isclosed,
            [classes.drawerClose]: !isclosed,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: isclosed,
              [classes.drawerClose]: !isclosed,
            }),
          }}
          onMouseEnter={() => {
            props.openclose(true);
          }}
          onMouseLeave={() => {
            props.openclose(false);
          }}
        >
          <img
            src='/assets/images/logo.png'
            alt='logo '
            className={isclosed ? classes.image : ''}
          />
          <Profilecard isclosed={isclosed} />
          <List component='nav' aria-label='main mailbox folders'>
            <NavLink to='/tableau-de-bord' activeClassName='selected'>
              <ListItem button>
                <ListItemIcon>
                  <ShowChartIcon />
                </ListItemIcon>
                <ListItemText primary='Tableau de bord' />
              </ListItem>
            </NavLink>
            <NavLink to='/articles' activeClassName='selected'>
              <ListItem button>
                <ListItemIcon>
                  <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary='Articles' />
              </ListItem>
            </NavLink>
            <NavLink to='/client' activeClassName='selected'>
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary='client' />
              </ListItem>
            </NavLink>
            <NavLink to='/fournisseur' activeClassName='selected'>
              <ListItem button>
                <ListItemIcon>
                  <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText primary='Fournisseurs' />
              </ListItem>
            </NavLink>
          
            <NavLink to='/commandes' activeClassName='selected'>
              <ListItem button>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary='Commandes' />
              </ListItem>
            </NavLink>

            <NavLink to='/admin' activeClassName='selected'>
              <ListItem button>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary='Admins' />
              </ListItem>
            </NavLink>
          </List>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
