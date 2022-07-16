import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useEffect} from "react";
import GetCookie from '../cookies/GetCookie';
import SetCookie from '../cookies/SetCookie';
import RemoveCookie from '../cookies/RemoveCookie';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: "#fbc014",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [stop, setStop] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(true);
    SetCookie('agecheck', false );
  }
  const handleClose = () => {
    RemoveCookie('agecheck')
    setOpen(false);
      
      SetCookie('agecheck', true );
  } 

const cookie = GetCookie('agecheck')



  if(cookie) {
    console.log('checked');
  } else {

      handleOpen();
  }

       
    //    setStop(true)
        

  

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you 18?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Click anywhere if so, if not, leave the site <a href="https://www.google.com">Here</a>.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
