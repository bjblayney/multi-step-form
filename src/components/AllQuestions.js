import React from "react";
import PropTypes from "prop-types";
import FinanceType from "./questions/FinanceType";

class AllQuestions extends React.Component {
  static propTypes = {};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FinanceType
          currentStep={this.props.currentStep}
          handleChange={this.handleChange}
          email={this.state.email}
        />
      </form>
    );
  }
}

export default AllQuestions;
