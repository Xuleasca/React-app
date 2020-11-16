import React from 'react';

function Contact(props) {
    return (
      <div className="Contact">
        <img src={props.avatar} className="avatar" alt="avatar" />
        <div>
          <h4>{props.name}</h4>
  
          {props.online === 'true' ? (
            <p>
              <span className="online">● </span>Online
            </p>
          ) : (
            <p>
              <span className="offline">● </span>Offline
            </p>
          )}
        </div>
      </div>
    );
  }
  



export default Contact