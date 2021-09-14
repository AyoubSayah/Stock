import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import * as apis from '../client/service.client';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Switch, Route, useHistory, NavLink } from 'react-router-dom';
import Articlevente from './articlevent';
import faccturation from './faccturation';



const useStyles = makeStyles((theme) => ({
  listItem: {
    justifyContent: 'center',
    marginBottom: '.3rem',
  },
  girdrigt: {
    borderRight: '1px solid     rgba(0, 0, 0, 0.12)',
  },
  grid: {
    height: '91vh',
  },
  item: {
    margin: '.5rem',
    textTransform: 'capitalize',
    width: '90%',
  },
  tab: {
    flexGrow: '2',
  },
}));

export default function Vente() {
  const history = useHistory();
  const [id, setid] = useState('');
  const calses = useStyles();
  const [liste, setliste] = useState([]);
  useEffect(() => {
    fetch();
    const url = window.location.href;
    if (url.indexOf('articles')) {
      setValue(1);
    }
    if (url.indexOf('facturation')) {
      setValue(0);
    } 
  }, []);
  const fetch = () => {
    apis.getallclient().then((res) => {
      setliste(res);
    }); 
  };
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == 0) {
      history.push( `/vente/${id}/articles`);
    } else if (newValue == 1) {
       history.push(`/vente/${id}/facturation`);
    } 
  };
  const handleclick = (_id) => {
    setid(_id);
    // history.push(`/approvisiemnt/${_id}/articles`);
    setValue(0);
  };
  return (
    <div>
      <Card>
        <Grid container spacing={0} className={calses.grid}>
          <Grid item xs={3} className={calses.girdrigt}>
            <List>
              <ListItem className={calses.listItem}>
                <strong>Client</strong>
              </ListItem>
              <Divider></Divider>

              {liste.map((item) => {
                return (
                  <div>
                    <NavLink
                       to={ `/vente/${item._id}/articles`}
                      activeClassName='select' 
                    >
                      <ListItem
                        className={calses.item}
                        button
                         onClick={() => {
                          handleclick(item._id);
                        }} 
                      >
                        {item.nom}
                      </ListItem>
                    </NavLink>
                  </div>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={9}>
            <Paper square>
              <Tabs
                value={value}
                indicatorColor='primary'
                textColor='primary'
                onChange={handleChange}
                aria-label='disabled tabs example'
              >
                <Tab label='Articles' className={calses.tab} />
                <Tab label='FACTURATION' className={calses.tab} />
              
              </Tabs>
            </Paper>
            <Switch>
              <Route
                 path='/vente/:id/articles'
                component={Articlevente}
                exact 
              ></Route>
              <Route
               path='/vente/:id/facturation'
                component={faccturation}
                exact  
              ></Route> 
            </Switch>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
