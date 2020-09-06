import React from "react";

const Claim = (props) => {
  let {claim} = props;
  return (
    <tr>
      <td>{claim.claimNumber}</td>
      <td>{claim.empId}</td>
      <td>{claim.empName}</td>
      <td>{claim.claimType}</td>
      <td>{claim.claimPrograms}</td>
      <td>{claim.startDate}</td>
      <td>{claim.endDate}</td>
    </tr>
  );
};

export default Claim;
