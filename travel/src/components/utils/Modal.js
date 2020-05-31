import styled from "styled-components";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonStyle variant="outlined" color="primary" onClick={handleClickOpen}>
        Book Now
      </ButtonStyle>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Antelope Canyone Tour Booking
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Discover the World</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Phone number"
            type="phone"
            fullWidth
          />
          <TextField
            className="form-item"
            margin="dense"
            id="date"
            type="date"
            fullWidth
          />
          <TextField
            className="form-item"
            margin="dense"
            id="time"
            type="time"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const ButtonStyle = styled.button`
  width: 100%;
  background: red;
  color: white;
  height: 50px;
  font-size: 20px;
  border-radius: 15px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
