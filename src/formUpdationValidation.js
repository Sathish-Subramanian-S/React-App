export default function formValidation(userData){
  
    let claimNum  = userData.claimNumber;
    let claimPrgm = userData.claimPrograms;
    let startDate = userData.startDate;
    let endDate   = userData.endDate;
    // let claimPrgm = document.getElementById('ClaimPrograms').value;
    // let startDate = document.getElementById('StartDate').value;
    // let endDate = document.getElementById('EndDate').value;
    // document.getElementById("ClaimNumberValidateMsg").innerHTML = '';
    // document.getElementById("ClaimProgramsValidateMsg").innerHTML = '';
    // document.getElementById("startDateValidateMsg").innerHTML = '';
    // document.getElementById("endDateValidateMsg").innerHTML = '';
    let errors = {}
    let lettersAlphaNumeric = /^[0-9a-zA-Z-]+$/;
    let claimNumVal = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    let dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/

    if (!claimNum.match(lettersAlphaNumeric)) 
	{
        errors.claimNumberValidateMsg =  "No Special Characters allowed";
        // document.getElementById("ClaimNumberValidateMsg").innerHTML = "No Special Characters allowed";
	}
	if (!claimNum.match(claimNumVal)) {
        errors.claimNumberValidateMsg = "Please enter number in specified format";
        // document.getElementById("ClaimNumberValidateMsg").innerHTML = "Please enter number in specified format";
    }
    if (claimPrgm.length > 20) {
        errors.claimProgramsValidateMsg  = "Please enter maximum of 20 digits";
        // document.getElementById("ClaimProgramsValidateMsg").innerHTML = "Please enter maximum of 20 digits";
    }
	if (claimPrgm.length == 0) {
        errors.claimProgramsValidateMsg = "This field is required";
        // document.getElementById("ClaimProgramsValidateMsg").innerHTML = "This field is required";
    }
    if (!startDate.match(dateReg)) {
        errors.startDateValidateMsg = "Please enter the valid date";
        // document.getElementById("startDateValidateMsg").innerHTML = "Please enter the valid date";
    }
    if (!endDate.match(dateReg)) {
        errors.endDateValidateMsg = "Please enter the valid date";
        // document.getElementById("endDateValidateMsg").innerHTML = "Please enter the valid date";
    }
    return errors;
}


