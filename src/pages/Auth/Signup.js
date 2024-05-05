import React from 'react'
import { useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [user_type, setUserType] = useState("");

  const handleSignup = async (e) => {
    console.log("b4 fetch", name , user_type)
    e.preventDefault();

    try{
      console.log("url login rev :",`${process.env.REACT_APP_SERVER_URL}/user/signup`)
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/signup`,{
      method: "POST",
      body : JSON.stringify({
          name : name,
          email : email,
          password: password,
          phone: phone,
          userType: user_type,
        }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    const contentType = res.headers.get("content-type")
    if (contentType && contentType.indexOf("application/json") !== -1){
      const user = await res.json();
      console.log(user);
      
      navigate('/login');
    }
    else{
      const text = await res.text();
      console.log(text);
    }
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <>
    <div className='container auth-div'>
    <div className='col-md-5 auth-box'>
    <h4 className='heading'> Signup </h4>
    <form onSubmit={handleSignup}>
          <div className="mb-3">
            <input
              type="text"
              //value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="SignUpName"
              placeholder="Name"
              //required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              //value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="SignUpEmail"
              placeholder="Email"
              //required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              //value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="SignUpPassword"
              placeholder="Password"
              //required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              //value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="SignUpPhone"
              placeholder="Phone Number"
              //required
            />
          </div>
          <div className="mb-3">
            {/* <input
              type="text"
              //value={phone}
              onChange={(e) => setUserType(e.target.value)}
              className="form-control"
              id="SignUpPhone"
              placeholder="Phone Number"
              //required
            /> */}

            <select className="form-select form-control" aria-label="Default select example" 
              onChange={(e) => setUserType(e.target.value)} placeholder="Select Application Service type" >
              <option className="diabled-option-signup" disabled selected value>select application service</option>
              <option value={"buyer"} className="option-signup">Buyer Application</option>
              <option value={"seller"} className="option-signup">Seller Application</option>
            </select>
          </div>

          
          
          <button type="submit" className="btn btn-primary btn-auth">
            Sign Up
          </button>
        </form>
      </div>
      </div>
    </>
  )
}

export default Signup