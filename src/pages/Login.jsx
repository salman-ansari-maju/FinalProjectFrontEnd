import google_img from "../img/google.png";
import { useState } from "react";
import "../app.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

// import Logo from "../img/logoo.png";
const Login = () => {
  const navigate = useNavigate();
  const [point, setpoint] = useState(true);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");

  const [lemail, setlemail] = useState("");
  const [lpassword, setlpass] = useState("");

  // toast function
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  const postData = () => {
    if (!emailRegex.test(email)) {
      notifyA("Ivalid email");
      return;
    }
    fetch("http://localhost:8080/auth/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email: email,
        accessToken: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB(data.message);
          // navigate("/login");
          setpoint(!point);
        }
        console.log(data);
      });
  };

  const loginData = () => {
    if (!emailRegex.test(lemail)) {
      notifyA("email");
      return;
    }
    fetch("http://localhost:8080/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: lemail,
        accessToken: lpassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB("Signed In Successfully");
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/");
          // setpoint(!point);
        }
        // console.log(data);
        // localStorage.setItem("email", data.email);
        // localStorage.setItem("name", data.name);
        // localStorage.setItem("user", JSON.stringify(data));
      });
  };

  return (
    <div className="loginpage">
      <div className="maindiv">
        {point ? (
          <div className="box">
            <h3 style={{ fontSize: "xx-large" }}>Login</h3>
            <br />
            <input
              type="text"
              id="lemail"
              name="lemail"
              value={lemail}
              placeholder="Email"
              onChange={(e) => {
                setlemail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              id="lpassword"
              name="lpassword"
              value={lpassword}
              placeholder="Password"
              onChange={(e) => {
                setlpass(e.target.value);
              }}
            ></input>
            <diV
              className="loginButton login"
              onClick={() => {
                loginData();
              }}
            >
              {" "}
              <h3> Login </h3>{" "}
            </diV>
            <p>
              {" "}
              Don't have an Account Sign Up{" "}
              <p
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => setpoint(!point)}
              >
                {" "}
                here{" "}
              </p>
            </p>
          </div>
        ) : (
          <div className="box">
            <h3 style={{ fontSize: "xx-large" }}>Sign Up</h3>
            <br />
            <input
              type="text"
              id="Username "
              name="Username"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            ></input>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setpass(e.target.value);
              }}
            ></input>
            <div
              className="loginButton login"
              onClick={() => {
                postData();
              }}
            >
              {" "}
              <h3> Sign Up </h3>{" "}
            </div>
            <p>
              {" "}
              Already have an Account Login{" "}
              <p
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => setpoint(!point)}
              >
                {" "}
                here{" "}
              </p>
            </p>
          </div>
        )}

        <br />
        <div className="loginButton google" onClick={google}>
          <img
            src={google_img}
            style={{ height: "40px", width: "40px" }}
            alt=""
            className="icon"
          />
          <h3> Sign In with google </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
