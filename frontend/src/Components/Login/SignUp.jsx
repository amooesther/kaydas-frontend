import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

const SignUp = () => {
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const [name, setName]=useState();

  const handleSignUp= async (e)=>{
e.preventDefault();
try {
  await createUserWithEmailAndPassword(auth,email,password);
  const user= auth.currentUser;
  console.log(user);
  if (user){
    await setDoc(doc(db,"Users", user.uid),{
      email:user.email,
      Name:name
    })
  }
  console.log("user signed up successfully");
  window.location.href="/login"
} catch (error) {
  console.log(error.message)
}

  }



  return (
    <div className='formContainer'>
      <div className='loginPage'>
        <h2>Sign-Up</h2>
        <form onSubmit={handleSignUp} className='form' >
          <div className=''>
            <label htmlFor="name">Name </label><br />
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name" name="name" required />
            
          </div>
          <div className=''>
            <label htmlFor="email">Email </label><br />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" name="email" required/>
            
          </div>
          <div>
            <label htmlFor="password">Password </label><br />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" name="password" required />
           
          </div>
          <button className='btn' type='submit'>SignUp</button>
          <p>Agree to our terms and conditions</p>
           <button className='btn'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
