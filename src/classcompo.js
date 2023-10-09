import React, { Component } from "react";
import "./style.css";
class Func extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      dept: "",
      rating: "",
      error: {},
      studData: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    if (!this.state.name) {
      this.state.error.name = "please enter name";
    }

    if (
      !this.state.dept ||
      this.state.dept.length < 3 ||
      this.state.dept.length > 10
    ) {
      this.state.error.dept = "dept must be 3 char";
    }

    if (
      !this.state.rating ||
      parseInt(this.state.rating) < 1 ||
      parseInt(this.state.rating) > 5
    ) {
      this.state.error.rating = "rating should be between 1 to 5";
    }
  };

  handleSubmit = () => {
    this.validate();
    const tempObj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating,
    };

    this.state.studData.push(tempObj);
    this.setState({
      studData: this.state.studData,
      name: "",
      dept: "",
      rating: "",
    });

    console.log(this.state.error.dept);
    console.log(this.state.error.name);
    console.log(this.state.error.rating);
    console.log(this.state.studData);
  };

  render() {
    return (
      <>
        <form>
          <div className="form-item">
            <label htmlFor="name">Name : </label>
            <input
              className="btn"
              type="text"
              placeholder="enter your name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <div>{this.state.error.name && <span>please enter name</span>}</div>
          </div>
          <div className="form-item">
            <label htmlFor="dept">Department : </label>
            <input
              className="btn"
              type="text"
              placeholder="enter your department"
              name="dept"
              value={this.state.dept}
              onChange={this.handleChange}
              required
            />
            <div>
              {this.state.error.dept && <span>deptartment must be 3 char</span>}
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="rating">Rating : </label>
            <input
              className="btn"
              type="number"
              placeholder="Enter your rating"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
              required
            />
            <div>
              {this.state.error.rating && <span>rating between 1 to 5</span>}
            </div>
          </div>
          <button
            className="btn btn1"
            type="button"
            onClick={this.handleSubmit}
            required
          >
            Submit
          </button>
        </form>

        {this.state.studData.length ? (
          <div className="data-box">
            {this.state.studData.map((item, index) => {
              return (
                <div key={index} className="data-box-item">
                  <h1>name:{item.name}</h1>
                  <h1>dept:{item.dept}</h1>
                  <h1> rating:{item.rating}</h1>
                </div>
              );
            })}
          </div>
        ) : undefined}
      </>
    );
  }
}

export default Func;
