import { Link } from "react-router-dom";
import icon from "../img/profile.png";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const logout = () => {
    if (user) {
      window.open("http://localhost:8080/auth/logout", "_self");
    } else if (Local) {
      localStorage.clear();
      navigate("/login");
    }
    // window.open("http://localhost:8080/auth/logout", "_self");
  };

  const Local = localStorage.getItem("user");

  return (
    <div className="navbar">
      <div className="logo">
        {/* <Link className="link" to="/">
          <button className="navBtns">Home</button>
        </Link> */}
      </div>
      <h1 style={{ width: "600px" }}>Customer Care Service</h1>
      {user ? (
        <ul className="list">
          <li>
            <img
              src={user.avatarUrl}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                margin: "10px",
              }}
              alt="pp"
            />
          </li>

          <li>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              {user.displayName}
            </h4>
            {user.email}
          </li>

          <li className="listItem">
            <button onClick={logout} className="navBtns">
              Logout
            </button>
          </li>
        </ul>
      ) : Local ? (
        <>
          <ul className="list">
            <li>
              <img
                src={icon}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "25px",
                  display: "flex",
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  margin: "10px",
                }}
                alt="pp"
              />
            </li>

            <li>
              <h4
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                {JSON.parse(Local).username}
              </h4>
              {JSON.parse(Local).email}
            </li>

            <li className="listItem">
              <button onClick={logout} className="navBtns">
                Logout
              </button>
            </li>
          </ul>
        </>
      ) : (
        <Link className="link" to="login">
          <button className="navBtns">Login</button>
        </Link>
      )}
    </div>
  );
};
export default Navbar;
