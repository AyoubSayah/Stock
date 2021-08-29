import React from 'react';
import './profilecard.css';
import Avatar from '@material-ui/core/Avatar';

export default function profilecard(props) {
  const isclosed = props.isclosed;
  return (
    <div className={isclosed ? 'card' : ''}>
      <Avatar
        alt='Remy Sharp'
        src='assets/images/profile.jpg'
        style={{ margin: isclosed ? '' : ' 1rem auto' }}
      />

      {isclosed && (
        <div className='card-body'>
          <p className='profile'>
            <strong>Mohamed Hedi</strong>
            <br /> super admin
          </p>
        </div>
      )}
    </div>
  );
}
