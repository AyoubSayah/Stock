import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { TableRow } from '@material-ui/core';

const usestyles = makeStyles((theme)=>
({
    h1:{
        color:'#626ED4',
        textAlign:'center',
    },
    flex: {
      margin:'3rem',
      marginLeft:'4rem'
      
      }, 
    input :{
        margin:'1rem',
        width:'25rem',
       
        
        
    '& :invalid:focus:not(:placeholder-shown) + fieldset': {
        borderColor: '#f44336',
        borderWidth: 2,
    },
    },
    modal:{
        animation :'$myEffect 1000ms',
    },
    '@keyframes myEffect': {
        '0%': {
          opacity: 0,
          transform: ' translateX(-50%) translateY(100%)',
        },
        '100%': {
          opacity: 1,
          transform: 'translateX(-50%) translateY(-55%)',
        },
      },
    
      icon: {
        color: '#697886',
      },

}));
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      position: 'absolute',
      background: 'white',
      brderRadius: '1rem',
      padding: '2rem 4rem',
      width:'1000px'

    };
}
export default function Addclient() {

    const clases = usestyles();
    const [modalStyle]=React.useState(getModalStyle);
    return(
        <div>
        <Paper style={modalStyle} className={clases.modal}>
          <h1 className={clases.h1}>Ajouter Client</h1>
          <div className={clases.flex}>
            <TextField
              id='outlined-basic'
              label='Non Client'
              variant='outlined'
              className={clases.input}
              required
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle className={clases.icon} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id='outlined-basic'
              label='Télephone'
              variant='outlined'
              className={clases.input}
              type='number'
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PhoneIcon className={clases.icon} />
                  </InputAdornment>
                ),
              }}
              required
            />
            <TextField
              id='outlined-basic'
              label='Adresse'
              variant='outlined'
              className={clases.input}
            
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <HomeIcon className={clases.icon} />
                  </InputAdornment>
                ),
              }}
              required
            />
          </div>
          <Button
            variant='contained'
            color='primary'
            style={{ background: '#626ED4',width:'15rem',height:'4rem', margin: 'auto', display: 'block' }}
          >
            <span style={{fontSize:'1.5rem',textAlign:'center' }}>
              {' '}
              <AddCircleOutlineIcon /> Ajouter
            </span>
          </Button>
        </Paper>
      </div>
    );
};
     
