import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField  } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BsModal(props) {
    let { close, open ,val,confBtn, onChange ,name } = props

  const handleClose = () => {
    close(false)
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField value={val} className='w-100' onChange={onChange} placeholder={name}/>
          
    <Box className="d-flex justify-content-center my-5">
        <Button onClick={confBtn} variant="contained">Confrim</Button>
    </Box>
        </Box>
      </Modal>
    </div>
  );
}