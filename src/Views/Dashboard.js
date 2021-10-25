import React, { useState } from 'react';
import ButtonButton from '../Components/ButtonButton';
import NavbarPublic from '../Components/NavbarPublic';
import NavbarPrivate from '../Components/NavbarPrivate';

/* import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'; */

{/* <div>
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
</div> */}

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
      <ButtonButton text="Add/Edit Categories" endpoint="/category"/>
      <ButtonButton text="Settings" endpoint="/settings" />
      <div class="table-responsive" >
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" >Income Transactions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Category A</th>
            <td colspan="4">category description</td>
          </tr>
          <tr>
            <td colspan="4">
              <table className="table mb-0 table-hover table-sm align-middle" >
                <thead>
                  <th scope="col" >name</th>
                  <th scope="col" >value</th>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" >Group AA</th>
                    <td colspan="4">100</td>
                  </tr>
                  <tr>
                    <th scope="row" >Group BB</th>
                    <td colspan="4">125</td>
                  </tr>
                  <tr>
                    <th scope="row" >Group CC</th>
                    <td colspan="4">25</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th scope="row" >TOTAL</th>
            <td>250</td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </table>
      </div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default DashBoard;

