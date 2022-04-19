import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../Firebase.init';

const auth=getAuth(app)
const Header = () => {
  const [user]=useAuthState(auth) 
  const handleSignOut=() => {
    signOut(auth);
  }
    return (
        <div>
           
           <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
         
          {
                    user ?
                    <button className='btn btn-danger' onClick={handleSignOut}>Sign out</button>
                    :
                    <Link className="nav-link" to="/login">Login</Link> }
        </li>
        
     
      </ul>
     
    </div>
  </div>
</nav>
  
        </div>
    );
};

export default Header;