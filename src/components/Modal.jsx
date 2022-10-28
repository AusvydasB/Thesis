import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className='mygtukas' onClick={handleOpen}>Read about me</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img src="https://images.schoolspecialty.com/images/402813_ecommfullsize.jpg" alt="Trulli" width="40%"/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Clay is a mineral 'stew' that is the result of the erosion of the earth's crust over vast spans of time. What was originally the mineral feldspar in igneous rocks, primarily granite, breaks down over time and becomes the microscopically fine-particled clay that we form with our bare hands. How this transformation takes place is a matter of geology and time. The effects of erosion over enormous spans of time cause igneous rocks to disintegrate, and the feldspar content is altered to kaolinite, which is the identifying substance in clay.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
