import React,{useState,useEffect} from 'react';
import formValidation from './formUpdationValidation';
import axios from "axios";


const useFormValidation = (validate) => {

const[userData,setUser]=useState({
        userName: '',
        password: ''
})

// const{} = formValidation(userData)

const[updatedUserData,setUpdatedUser]=useState({
    claimNumber: '',
    claimType: '',
    claimPrograms: '',
    startDate: '',
    endDate: '',
    empName: '',
    empId: ''
})
  
    const[isSubmited,setIsSubmitted]=useState(false);
    const[errors,setErrors]=useState({});
    const[formErrors,setFormErrors]=useState({});
    const handleChange = (e) => {
        const {id,value}=e.target;
        setUser({
            ...userData,
            [id]:value
        })
    }

    const handleFormChange = (e) => {
        const {id,value}=e.target;
        setUpdatedUser({
            ...updatedUserData,
            [id]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // validations
        setErrors(validate(userData));
        // setIsSubmitted(true);
       }

       const handleFormSubmit = (e) => {
        e.preventDefault();
        // validations
        setErrors(validate(updatedUserData));
        axios.post("http://localhost:8080/api/claims", updatedUserData);
       }

    useEffect(() => {
        console.log(">>> useEffect");
        if(Object.keys(errors).length===0 && isSubmited){
            // business logic to persist object into db
            // submitForm();
        }  
    },[errors])

  return{handleChange,handleFormSubmit,handleSubmit,errors,userData,handleFormChange}
};

export default useFormValidation;