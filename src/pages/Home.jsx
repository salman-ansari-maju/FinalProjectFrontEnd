import React, { useState, useEffect } from "react";

import "../app.css";
import Navbar from "../components/Navbar";
import Customer from "../components/customer";

const Home = ({ user }) => {
  const [dat, setData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    // Make a GET request to the customerdata API endpoint
    fetch("http://localhost:8080/customerdata")
      .then((response) => response.json())
      .then((data) => {
        // Do something with the customer data
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  };
  const Local = localStorage.getItem("user");
  return (
    <div>
      <Navbar user={user} />{" "}
      <div>
        {user ? (
          <>
            <div className="home">
              <h1 style={{ color: "#504152" }}> Customer Data </h1>
              {dat.map((dat, index) => {
                return (
                  <Customer
                    No={index}
                    name={dat.name}
                    email={dat.email}
                    problem={dat.problem}
                  />
                );
              })}
            </div>
          </>
        ) : Local ? (
          <>
            {/* <h1>{JSON.parse(Local).username}</h1> */}
            <div className="home">
              <h1 style={{ color: "#504152" }}> Customer Data </h1>
              {dat.map((dat, index) => {
                return (
                  <Customer
                    No={index}
                    name={dat.name}
                    email={dat.email}
                    problem={dat.problem}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="homie">
            {/* <img src={OK} alt="pp" /> */}
            {/* <h1>{local}</h1> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
