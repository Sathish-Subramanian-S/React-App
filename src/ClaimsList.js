import React, { useState, useEffect } from "react";
import axios from "axios";
import Claim from "./Claim";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./NavBar";

const ClaimsList = () => {

  const [claims, setClaims] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => response.data)
      .then((claims) => {
        setClaims(claims);
      });
  }, []);

  let renderClaims = () => {
    return claims.map((claim, idx) => {
      if (claim.claimNumber != null && claim.claimNumber !== '') {
        return (
          <Claim key={idx} claim={claim} />
        );
      }
      return '';
    });
  };

  return (
    <div>
      <NavBar />
      <div className="div-height"></div>
      <div className="container container-xl">

        <div>
          <div>
            <form>
              <table className="table table-striped table-light table-hover table-sm">
                <thead className="thead-dark">
                  <tr>
                    <th>EmployeeId</th>
                    <th>Employee Name</th>
                    <th>Claim Number</th>
                    <th>Claim Type</th>
                    <th>Claim Program</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {renderClaims()}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimsList;
