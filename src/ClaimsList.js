import React, { useState, useEffect } from "react";
import axios from "axios";
import Claim from "./Claim";
import './claims.css';

const ClaimsList = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => response.data)
      .then((claims) => {
        console.log(claims);
        setClaims(claims);
      });
  }, []);

  let renderClaims = () => {
    return claims.map((claim, idx) => {
      if (claim.claimNumber != null && claim.empId != null) {
      return (
         <Claim key={idx} claim={claim}/>
        );
      }
    });
  };

  return (
    <div>
      <body>
      <table className="table  table-bordered">
        {/* <thead> */}
          <tr>
            <th>ClaimNumber</th>
            {/* <th>EmployeeId</th> */}
            {/* <th>EmployeeName</th> */}
            <th>ClaimType</th>
            <th>ClaimPrograms</th>
            {/* <th>StartDate</th>
            <th>EndDate</th> */}
          </tr>
        {/* </thead> */}

        <tbody>
         {renderClaims()}
        </tbody>
       
      </table>
      </body>
    </div>
  );
};

export default ClaimsList;
