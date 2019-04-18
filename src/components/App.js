import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import ProfileType from "./questions/ProfileType";
import AboutMe from "./questions/AboutMe";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class App extends React.Component {
  state = {
    step: 1, // Default is Step 1
    profileType: "female",
    firstName: "",
    lastName: "",
    email: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleQuickChange = input => event => {
    console.log(input);
    console.log(event.target.value);
    this.setState({ [input]: event.target.value });
    this.nextStep();
  };

  handleChange = input => event => {
    console.log("handleChange:");
    this.setState({ [input]: event.target.value });
  };

  handleSubmit = input => event => {
    event.preventDefault();

    console.log("component state", JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log("form is invalid: do not submit");
    } else {
      console.log("form is valid: submit");
    }
  };

  showFormErrors() {
    const inputs = document.querySelectorAll(".validate input");
    let isFormValid = true;
    console.log("all-inputs :", inputs);
    inputs.forEach(input => {
      input.classList.add("active");
      console.log("input-name :", input.name);
      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const validity = document.getElementById(refName).validity;
    // const label = document.getElementById(`${refName}Label`).textContent;
    // const error = document.getElementById(`${refName}Error`);

    if (!validity.valid) {
      if (validity.valueMissing) {
        // error.textContent = `${label} is a required field`;
        console.log("empty");
      } else if (validity.typeMismatch) {
        // error.textContent = `${label} should be a valid email address`;
        console.log("typeMismatch");
      }
      return false;
    }

    // error.textContent = "";
    return true;
  }

  componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate() {
    console.log("updated");
    console.log(this.state);
  }

  componentWillUnmount() {
    console.log("willUnmount");
  }

  renderNextQuestion() {
    const { step } = this.state;
    const {
      profileType,
      firstName,
      lastName,
      email,
      age,
      city,
      country
    } = this.state;
    const values = {
      profileType,
      firstName,
      lastName,
      email,
      age,
      city,
      country
    };

    switch (step) {
      case 1:
        return (
          <CSSTransition
            classNames="paper"
            key="1"
            timeout={{ enter: 2000, exit: 2000 }}
          >
            <ProfileType
              nextStep={this.nextStep}
              handleChange={this.handleQuickChange}
              values={values}
            />
          </CSSTransition>
        );
      case 2:
        return (
          <CSSTransition
            classNames="order"
            key="2"
            timeout={{ enter: 2000, exit: 2000 }}
          >
            <AboutMe
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleSubmit={this.handleSubmit}
              values={values}
            />
          </CSSTransition>
        );
      case 3:
        return (
          <CSSTransition
            classNames="order"
            key="3"
            timeout={{ enter: 2000, exit: 2000 }}
          >
            <ProfileType
              nextStep={this.nextStep}
              handleChange={this.handleQuickChange}
              values={values}
            />
          </CSSTransition>
        );
      case 4:
      default:
        return <div>BOOM!</div>;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Company name
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <TransitionGroup component="div">
            {this.renderNextQuestion()}
          </TransitionGroup>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
