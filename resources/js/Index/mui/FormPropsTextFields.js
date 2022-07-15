import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="User name"
          type="email"
          value={props.email}
          onChange={()=>handleChange()}
          
        />
      
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          value={props.pass}
          autoComplete="current-password"
        />
       
     
      </div>
   
    </Box>
  );
}
