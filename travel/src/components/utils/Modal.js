import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IonButton } from "@ionic/react";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IonButton
        strong="true"
        shape="round"
        expand="full"
        color="danger"
        onClick={handleClickOpen}
      >
        Book Now
      </IonButton>
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
            label="Date"
            type="date"
            fullWidth
          />
          <TextField
            className="form-item"
            margin="dense"
            id="time"
            label="Time"
            type="time"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <IonButton size="small" onClick={handleClose} color="warning">
            Cancel
          </IonButton>
          <IonButton size="small" onClick={handleClose} color="success">
            Submit
          </IonButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
