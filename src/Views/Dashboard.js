import React, { useState } from 'react';
import ButtonLink from '../Components/ButtonLink';
import NavbarPublic from '../Components/NavbarPublic';
import NavbarPrivate from '../Components/NavbarPrivate';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DashBoard() {
  const [openFormCategory, setOpenFormCategory] = useState(false);
/*   const [openFormTransaction, setOpenFormTransaction] = useState(false);   */

  const handleClickOpen = () => {
    /* setOpenFormTransaction(true); */
    setOpenFormCategory(true);
  };

  const handleClose = () => {
/*     setOpenFormTransaction(false); */
    setOpenFormCategory(false);
  };

  return(
    <>
      <NavbarPublic/>
      <NavbarPrivate/>
      <h1>DASHBOARD!!!</h1>
      <ButtonLink text = "Add/Edit Categories" endpoint="/category"/>
      <ButtonLink text = "Settings" endpoint="/settings" />
      <Button variant="outlined" color="primary" onClick={() => handleClickOpen(!setOpenFormCategory)}>
        Open Category Form
      </Button>
      <Dialog open={openFormCategory} onClose={() => handleClose(!setOpenFormCategory)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(!setOpenFormCategory)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(!setOpenFormCategory)} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

};

export default DashBoard;