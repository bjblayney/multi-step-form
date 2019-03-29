import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ProfileType from "./questions/ProfileType";
import AboutMe from "./questions/AboutMe";

class App extends React.Component {
  state = {
    step: 1, // Default is Step 1
    profileType: "",
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
    this.setState({ [input]: event.target.value });
    this.nextStep();
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

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
            classNames="order"
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
              handleChange={this.handleChange}
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

    return (
      <div className="row">
        <div className="col s12 m4 l3">
          <h3>Data</h3>
          <ul>
            <li>profileType: {profileType}</li>
            <li>firstName: {firstName}</li>
            <li>lastName: {lastName}</li>
            <li>email: {email}</li>
          </ul>
        </div>

        <div className="col s12 m8 l9">
          <div className="row">
            <h1>Current Step: {step}</h1>
          </div>
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col s12 m6">
                  <TransitionGroup component="div">
                    {this.renderNextQuestion()}
                  </TransitionGroup>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
