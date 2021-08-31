import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
  },
  side1: {
    width: '400px',
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
  img: {
    width: '12rem',
    height: '12rem',
  },
  side2: {
    width: 'calc(100% - 400px)',
    objectFit: 'cover',
    height: '100vh',
  },
  icon: {
    color: '#697886',
  },
  input: {
    margin: '1rem',
    width: '290px',
  },
  h3: {
    color: '#9e9e9e',
    fontSize: '1rem',
    marginTop: '-1rem',
    fontWeight: '300',
  },
}));
export default function Login() {
  const clases = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clases.flex}>
      <div className={clases.side1}>
        <img className={clases.img} src='/assets/images/logo.png' alt='logo ' />
        <h2>Bienvenu!</h2>
        <p className={clases.h3}>Connecter pour continuer</p>
        <TextField
          id='outlined-basic'
          label='Username'
          variant='outlined'
          className={clases.input}
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircleIcon className={clases.icon} />
              </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          className={clases.input}
          size='small'
          type={values.showPassword ? 'text' : 'password'}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <VpnKeyIcon className={clases.icon} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <Button
          variant='contained'
          color='primary'
          style={{ padding: '.7rem 3rem', marginTop: '1rem' }}
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <ExitToAppIcon /> Login
          </span>
        </Button>
      </div>
      <img className={clases.side2} src='assets/images/image2.jpg' alt=''></img>
    </div>
  );
}
