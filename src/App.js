import './App.css';
import Sidebar from './shared/sidebar/sidebar';
import Navbar from './shared/navbar/navbar';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Dashbord from './view/dashboard/dashbord';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Article from './view/articles/Article';
import Client from './view/client/client';
import Fournisseurs from './view/fournisseur/fournisseur';
import Login from './view/login/login';
import Approvisiemnt from './view/approvisiement/approvisiemnt';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    marginTop: '3rem',
    //  width: `calc(100% - 240px)`,
    marginLeft: 240,
    background: '#F8F8FA',
    minHeight: '85vh',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    padding: theme.spacing(3),
  },
  closed: {
    marginTop: '3rem',
    marginLeft: `${theme.spacing(7) + 1}px`,
    padding: theme.spacing(3),

    // width:`calc(100% - ${theme.spacing(7) + 1}px)`,
    //   [theme.breakpoints.up('sm')]: {
    //   width: `calc(100%- ${theme.spacing(9) + 1}px)`,
    // },
  },
}));
function App() {
  const [drawer, setdrawer] = useState(true);
  const [lock, setlock] = useState(true);
  const calases = useStyles();

  const openclose = (data) => {
    if (!lock) {
      setdrawer(data);
    }
    console.log(data);
  };
  const lockside = (data) => {
    setlock(data);
    setdrawer(data);
  };
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Sidebar drawer={drawer} openclose={openclose} />
            <Navbar lockside={lockside} />
            <main
              className={clsx(calases.toolbar, {
                [calases.closed]: !drawer,
              })}
            >
              <Switch>
                <Route path='/tableau-de-bord' component={Dashbord}></Route>
                <Route path='/articles' component={Article}></Route>
                <Route path='/client' component={Client}></Route>
                <Route path='/fournisseur' component={Fournisseurs}></Route>
                <Route path='/approvisiemnt' component={Approvisiemnt}></Route>
              </Switch>
            </main>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
