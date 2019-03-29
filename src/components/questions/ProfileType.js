import React from "react";

class ProfileType extends React.Component {
  render() {
    return (
      <div className="card order">
        <div
          className="card-content white-text"
          onChange={this.props.handleChange("profileType")}
        >
          <p>
            <label>
              <input
                className="with-gap"
                name="profileType"
                type="radio"
                value="cat_1"
              />
              <span>Category 1</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="profileType"
                type="radio"
                value="cat_2"
              />
              <span>Category 2</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="profileType"
                type="radio"
                value="cat_3"
              />
              <span>Category 3</span>
            </label>
          </p>
        </div>
        <div className="card-action" />
      </div>
    );
  }
}

export default ProfileType;
