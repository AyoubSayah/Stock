
import React, { useState,useEffect } from 'react';

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
import * as apis from './service.client';
import Checkbox from '@material-ui/core/Checkbox';

const usestyles = makeStyles((theme) => ({
  h1: {
    color: '#626ED4',
    textAlign: 'center',
  },
  flex: {
    margin:'3rem',
    marginLeft:'4rem'
    
    }, 
  input: {
    margin: '1rem',
    width: '25rem',

    '& :invalid:focus:not(:placeholder-shown) + fieldset': {
      borderColor: '#f44336',
      borderWidth: 2,
    },
  },
  modal: {
    animation: '$myEffect 1000ms',
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
    width: '1000px',
  };
}
export default function Updateclient(props) {
  const clases = usestyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [isloaded, setisloaded] = useState(false)
  const [client, setclient] = useState({
    id: 0,
    nom: '',
    adresse: '',
    raison_social: '',
    nom_reponsable:'',
    email: '',
    telephone:0,
    site:'',
    douteux:false
  });
  useEffect(() => {
    fetch()
    console.log(props.id);
  }, [props.id]);
  const fetch = ()=>{
      apis.getclientById(props.id).then((res)=>{
          setclient(res)
        setisloaded(true)
      })
  }
  const handleChange = (e, type) => {
    setclient((prev) => ({ ...prev, [type]: e.target.value }));
    console.log(client);
  };
  const handleChangecheck = (e, type) => {
    setclient((prev) => ({ ...prev,
      [type]: e.currentTarget.checked }));
  
    console.log(client);
  };
  const handlesubmit = () => {
    apis.updateclient(client).then((res) => {
      console.log('aaa');
      props.handlealert();
      props.handleclose(); 
    });
  };
  return (
    <div>
      <Paper style={modalStyle} className={clases.modal}>
        <h1 className={clases.h1}>Modifer Client</h1>
       {isloaded &&( 
       
       <div className={clases.flex}>
       {  <TextField
           id='outlined-basic'
           label='Code Client'
           variant='outlined'
           className={clases.input}
           defaultValue={client.id}
           type='number'
           required
           onChange={(e) => {
             handleChange(e, 'id');
           }}
           size='small'
           InputProps={{
             startAdornment: (
               <InputAdornment position='start'>
                 <AccountCircle className={clases.icon} />
               </InputAdornment>
             ),
           }}
         /> }
            <TextField
           id='outlined-basic'
           label='Raison social'
           variant='outlined'
           className={clases.input}
           defaultValue={client.raison_social}
           required
           onChange={(e) => {
             handleChange(e, 'raison_social');
           }}
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
           label='Non Client'
           variant='outlined'
           className={clases.input}
           defaultValue={client.nom}
           required
           onChange={(e) => {
             handleChange(e, 'nom');
           }}
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
           label='Adresse'
           variant='outlined'
           className={clases.input}
           defaultValue={client.adresse}
           required
           onChange={(e) => {
             handleChange(e, 'adresse');
           }}
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
           label='Non Responsable'
           variant='outlined'
           className={clases.input}
           defaultValue={client.nom_reponsable}
           required
           onChange={(e) => {
             handleChange(e, 'nom_reponsable');
           }}
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
           label='Email'
           variant='outlined'
           className={clases.input}
           defaultValue={client.email}
           required
           onChange={(e) => {
             handleChange(e, 'email');
           }}
           size='small'
           InputProps={{
             startAdornment: (
               <InputAdornment position='start'>
                 <AccountCircle className={clases.icon} />
               </InputAdornment>
             ),
           }}
         />
          {/*  <TextField
           id='outlined-basic'
           label='Identificateur Fiscal'
           variant='outlined'
           className={clases.input}
           type='number'
           required
           onChange={(e) => {
             handleChange(e, 'iden_fiscal');
           }}
           size='small'
           InputProps={{
             startAdornment: (
               <InputAdornment position='start'>
                 <AccountCircle className={clases.icon} />
               </InputAdornment>
             ),
           }}
         /> */}
           <TextField
           id='outlined-basic'
           label='Téléphone'
           variant='outlined'
           className={clases.input}
           defaultValue={client.telephone}
           type='number'
           required
           onChange={(e) => {
             handleChange(e, 'telephone');
           }}
           size='small'
           InputProps={{
             startAdornment: (
               <InputAdornment position='start'>
                 <AccountCircle className={clases.icon} />
               </InputAdornment>
             ),
           }}
         />
          
     {/*     <TextField
           id='outlined-basic'
           label='Référence commerciale'
           variant='outlined'
           className={clases.input}
           type='number'
           onChange={(e) => {
             handleChange(e, 'ref_commerciale');
           }}
           size='small'
           InputProps={{
             startAdornment: (
               <InputAdornment position='start'>
                 <PhoneIcon className={clases.icon} />
               </InputAdornment>
             ),
           }}
           required
         /> */}
         <TextField
           id='outlined-basic'
           label='Site'
           variant='outlined'
           className={clases.input}
           defaultValue={client.site}
           onChange={(e) => {
             handleChange(e, 'site');
           }}
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
        
 {       <div style={{marginLeft:'1.5rem',padding:'1rem'}}>
           <span>
             Client Douteux
           </span>
         <Checkbox
      
       color="primary"
       inputProps={{ 'aria-label': 'secondary checkbox' }}
       onChange={(e) => {
         handleChangecheck(e, 'douteux');
       }}
     />
         </div> 
         
         }
        
       </div>


        )}
        <Button
            variant='contained'
            color='primary'
           
            style={{ background: '#626ED4',width:'15rem',height:'4rem', margin: 'auto', display: 'block' }}

            onClick={handlesubmit}
          >
            <span style={{fontSize:'1.5rem',textAlign:'center' }}>
              {' '}
              <AddCircleOutlineIcon /> Modifer
            </span>
          </Button>
      </Paper>
    </div>
  );
}
