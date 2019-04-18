import React from "react";
import validator from "validator";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});
class AboutMe extends React.Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.handleChange();
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className="paper">
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              className="validate"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              className="validate"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              ref="email"
              fullWidth
              autoComplete="email"
              className="validate"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.props.prevStep}
          >
            Go Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.props.handleSubmit()}
          >
            Continue
          </Button>
        </Grid>
      </Paper>
      // <div className="card order">
      //   <div className="card-content white-text">
      //     <div className="row">
      //       <div className="input-field col s6">
      //         <input
      //           id="first_name"
      //           type="text"
      //           className="validate"
      //           onChange={this.props.handleChange("firstName")}
      //         />
      //         <label htmlFor="first_name">First Name</label>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="input-field col s6">
      //         <input
      //           id="last_name"
      //           type="text"
      //           className="validate"
      //           onChange={this.props.handleChange("lastName")}
      //         />
      //         <label htmlFor="last_name">Last Name</label>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="input-field col s6">
      //         <input
      //           id="email"
      //           className="validate"
      //           type="email"
      //           onChange={this.props.handleChange("email")}
      //         />
      //         <label htmlFor="email">Email Address</label>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <a
      //         className="waves-effect waves-light btn"
      //         onClick={this.props.prevStep}
      //       >
      //         <i className="material-icons left">chevron_left</i>Go Back
      //       </a>
      //       <a
      //         className="waves-effect waves-light btn"
      //         onClick={this.saveAndContinue}
      //       >
      //         <i className="material-icons right">chevron_right</i>Continue
      //       </a>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default withStyles(styles)(AboutMe);
