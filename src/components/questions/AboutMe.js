import React from "react";

class AboutMe extends React.Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    return (
      <div className="card order">
        <div className="card-content white-text">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate"
                onChange={this.props.handleChange("firstName")}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="last_name"
                type="text"
                className="validate"
                onChange={this.props.handleChange("lastName")}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="email"
                className="validate"
                type="email"
                onChange={this.props.handleChange("email")}
              />
              <label htmlFor="email">Email Address</label>
            </div>
          </div>
          <div className="row">
            <a
              className="waves-effect waves-light btn"
              onClick={this.props.prevStep}
            >
              <i className="material-icons left">chevron_left</i>Go Back
            </a>
            <a
              className="waves-effect waves-light btn"
              onClick={this.saveAndContinue}
            >
              <i className="material-icons right">chevron_right</i>Continue
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
