import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class ProfileType extends React.Component {
  state = {
    value: "female"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Category/Type
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="(Disabled option)"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>

      // <div className="card order">
      //   <div
      //     className="card-content white-text"
      //     onChange={this.props.handleChange("profileType")}
      //   >
      //     <p>
      //       <label>
      //         <input
      //           className="with-gap"
      //           name="profileType"
      //           type="radio"
      //           value="cat_1"
      //         />
      //         <span>Category 1</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input
      //           className="with-gap"
      //           name="profileType"
      //           type="radio"
      //           value="cat_2"
      //         />
      //         <span>Category 2</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input
      //           className="with-gap"
      //           name="profileType"
      //           type="radio"
      //           value="cat_3"
      //         />
      //         <span>Category 3</span>
      //       </label>
      //     </p>
      //   </div>
      //   <div className="card-action" />
      // </div>
    );
  }
}

export default withStyles(styles)(ProfileType);
