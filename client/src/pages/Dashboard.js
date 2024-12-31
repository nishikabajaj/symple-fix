import React from 'react';

function Dashboard(){
    return(
      <div className='Dashboard'>
        <label for='user-input'>Username: </label>
        <input id='user-input' />
  
  
        <label for='email-input'>Email: </label>
        <input id='email-input' />
  
        
        <label for='pass-input'>Password: </label>
        <input id='pass-input' />
  
      </div>
   );
  }

export default Dashboard;