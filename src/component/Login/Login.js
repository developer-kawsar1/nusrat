import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase.init';
import Loading from '../Loading/Loading';
const auth=getAuth(app)

const Login = () => {   
  const location = useLocation();  
  let from = location.state?.from?.pathname || "/"; 
  const navigate = useNavigate();
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth); 
  let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('') 

    // form submit 
    const submitLoginForm=(e) => {
      e.preventDefault()  
      signInWithEmailAndPassword(email, password);
       
    
    }   
    if(loading || loading2 ){
      return <Loading></Loading>
  }
    // email  field
    const handelEmail=(e) => {
      setEmail(e.target.value)
    }
    // pass field
    const handelPass=(e) => {
      setPassword(e.target.value)
    } 

    // check if user or not 

    if(user || user2){
      navigate(from, { replace: true });
    }  
    if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
    if (loading) {
        return <p>Loading...</p>;
      } 
     
    return (
        <div className='container'>
            <div className="row my-5 ">
                <div className="col-md-6 col-12 mx-auto"> 
                  <div className="card"> 
                  <h2 className="text-center mt-2">Login </h2>
                      <div className="card-body">
                          <form action="" onSubmit={submitLoginForm}>
                          <input type="email " className=" my-3  form-control"  placeholder='Email ' onBlur={handelEmail}  />
                          <input type="password " className=" my-3  form-control"  placeholder='Password ' onBlur={handelPass}/> 
                          <p>Are you New  ? <Link to="/registration"> Registration  </Link></p>
                          <button className='btn btn-primary d-block w-100 '>Login </button>
                          
                          </form>  
                          <p> {errorElement}</p>
                          <button onClick={() => signInWithGoogle()} className='btn btn-dark d-block w-100  mt-2 mb-4'><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />  <span className='px-2'>Google sign In</span>  </button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Login;