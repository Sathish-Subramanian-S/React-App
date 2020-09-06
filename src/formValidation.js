export default function validatePwd(userData) {
    let errors = {}
    let name = userData.userName;
    let password = userData.password;
    
	// document.getElementById("userNameValidateMsg").innerHTML = '';
	// document.getElementById("pwdValidateMsg").innerHTML = '';
	 
    let alphaNumericValidtion = /^[0-9a-zA-Z]+$/;
    let flag = true;
    if(name == null) {
        // document.getElementById("userNameValidateMsg").innerHTML = "Username cannot be empty";
        errors.userNameValidateMsg = "Username cannot be empty";
		flag = false;
    }
   if(!name.match(alphaNumericValidtion)) {
        // document.getElementById("userNameValidateMsg").innerHTML = "Username is not allowed with special characters";
        errors.userNameValidateMsg = "Username is not allowed with special characters";
		flag = false;
    }
	if(password.length < 4) {
        errors.pwdValidateMsg = "Password should be atleast 4 characters";
		// document.getElementById("pwdValidateMsg").innerHTML = "Password should be atleast 4 characters";
		flag = false;
    }
	 if(flag){
         window.location.href="/summary";
     }
    return errors;
}
// const formValidation = (userData) =>{

// const validatePwd=(userData) =>{
//     let errors ={}
//     let name = userData.userName;
//     let password = userData.password;
    
// 	// document.getElementById("userNameValidateMsg").innerHTML = '';
// 	// document.getElementById("pwdValidateMsg").innerHTML = '';
	 
//     let alphaNumericValidtion = /^[0-9a-zA-Z]+$/;
//     let flag = true;
//     if(name == null) {
//         // document.getElementById("userNameValidateMsg").innerHTML = "Username cannot be empty";
//         errors.userNameValidateMsg = "Username cannot be empty";
// 		flag = false;
//     }
//    if(!name.match(alphaNumericValidtion)) {
//         // document.getElementById("userNameValidateMsg").innerHTML = "Username is not allowed with special characters";
//         errors.userNameValidateMsg = "Username is not allowed with special characters";
// 		flag = false;
//     }
// 	if(password.length < 4) {
//         errors.pwdValidateMsg = "Password should be atleast 4 characters";
// 		// document.getElementById("pwdValidateMsg").innerHTML = "Password should be atleast 4 characters";
// 		flag = false;
//     }
// 	 if(flag){
//          window.location.href="/summary";
//      }
//     return errors;
// }

// const formValidation = (userData) =>{
//     // let claimNum = document.getElementById('ClaimNumber').value;
//     // let claimPrgm = document.getElementById('ClaimPrograms').value;
//     // let startDate = document.getElementById('StartDate').value;
//     // let endDate = document.getElementById('EndDate').value;
//     // document.getElementById("ClaimNumberValidateMsg").innerHTML = '';
//     // document.getElementById("ClaimProgramsValidateMsg").innerHTML = '';
//     // document.getElementById("startDateValidateMsg").innerHTML = '';
//     // document.getElementById("endDateValidateMsg").innerHTML = '';
//     let lettersAlphaNumeric = /^[0-9a-zA-Z-]+$/;
//     let claimNumVal = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
//     let dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/
//     if (!claimNum.match(lettersAlphaNumeric)) 
// 	{
// 		 document.getElementById("ClaimNumberValidateMsg").innerHTML = "No Special Characters allowed";
// 	}
// 	if (!claimNum.match(claimNumVal)) {
//         document.getElementById("ClaimNumberValidateMsg").innerHTML = "Please enter number in specified format";
//     }
//     if (claimPrgm.length > 20) {
//         document.getElementById("ClaimProgramsValidateMsg").innerHTML = "Please enter maximum of 20 digits";
//     }
// 	if (claimPrgm.length == 0) {
//         document.getElementById("ClaimProgramsValidateMsg").innerHTML = "This field is required";
//     }
//     if (!startDate.match(dateReg)) {
//         document.getElementById("startDateValidateMsg").innerHTML = "Please enter the valid date";
//     }
//     if (!endDate.match(dateReg)) {
//         document.getElementById("endDateValidateMsg").innerHTML = "Please enter the valid date";
//     }
// }

// }

// export default formValidation;