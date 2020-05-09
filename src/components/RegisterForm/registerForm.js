import React, { Component } from "react";
import { register, login } from "../../API/user";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  registerHandler = async e => {
    e.preventDefault();
    const {
      userName: { value: userName },
      email: { value: email },
      password: { value: password }
    } = e.target.elements;
    console.log(userName, email, password);
    const res = await register({ userName, email, password })
      .then(res => {
        this.props.history.push("/userLogin");
      })
      .catch(err => {
        alert("Registeration Failed");
      });
  };
  render() {
    if (
      localStorage.getItem("token") === null &&
      localStorage.getItem("useris") === null
    ) {
      return (
        <>
          <div className="formMe">
            <div className="add-product container">
              <form
                onSubmit={this.registerHandler}
                style={{
                  margin: "auto",
                  width: "250px",
                  height: "350px",
                  border: "1px solid #095490"
                }}
                className="registerForm"
              >
                <h2
                  style={{
                    textAlign: "center",
                    color: "#095490"
                  }}
                >
                  Register
                </h2>
                <br />
                <br />
                <input
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="userName"
                  type="text"
                ></input>
                <br />
                <br />
                <input
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  type="text"
                ></input>
                <br />
                <br />
                <input
                  className="form-control"
                  placeholder="Enter Your Password"
                  name="password"
                  type="password"
                ></input>
                <button
                  className="btn btn--primary"
                  type="submit"
                  style={{
                    margin: "auto",
                    marginTop: "40px",
                    backgroundColor: "#095490"
                  }}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          you are registered
        </div>
      );
    }
  }
}
export default RegisterForm;
