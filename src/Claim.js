/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Claim = (props) => {

   // eslint-disable-next-line react/prop-types
   let { claim } = props;

   return (
      <tr>
         <td>{claim.empId}</td>
         <td>{claim.empName}</td>
         <td>{claim.claimNumber}</td>
         <td>{claim.claimType}</td>
         <td>{claim.claimPrograms}</td>
         <td>{claim.startDate}</td>
         <td>{claim.endDate}</td>
         <td>
            <Link className="nav-link" to={`/updateClaimSummary/${claim.empId}`} >
               <button type="button" className="btn btn-outline-secondary btn-sm" > Edit </button>
            </Link>
         </td>
      </tr>
   );
};
export default Claim;
