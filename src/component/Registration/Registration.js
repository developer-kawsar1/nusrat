import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase.init'; 
const auth=getAuth(app)

const Registration = () => {   

    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const navigate=useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const handleRegister = async (event) => {
        event.preventDefault();
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        createUserWithEmailAndPassword(email, pass);
        // await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/');
    } 
    const handelCreateEmail=(e) => {
      setEmail(e.target.value)
    } 
    const handelCreatePass=(e) => {
      setPass(e.target.value)
    }
    return (
        <div className='container'>
        <div className="row my-5 ">
            <div className="col-md-6 col-12 mx-auto"> 
              <div className="card"> 
              <h2 className="text-center mt-2">Registration  </h2>
                  <div className="card-body"> 
                  <form action="" onSubmit={handleRegister}>

                 
                      <input type="email " className=" my-3  form-control"  placeholder='Email ' onBlur={handelCreateEmail}/>
                      <input type="password " className=" my-3  form-control"  placeholder='Password  ' onBlur={handelCreatePass}/> 
                      <p>already have an account ? <Link to="/login"> Login </Link></p>
                      <button className='btn btn-primary d-block w-100  '>Registration  </button> 
                      </form>
                  </div>
              </div>
            </div>
        </div>
    </div>
    );
};

export default Registration;