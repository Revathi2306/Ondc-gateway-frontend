import React from 'react'
import Navbar from '../components/Navbar'
import { useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Homepage = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  console.log("after pase obj",user)

  const [name, setName] = useState(`${user?.name}`);
  const [email, setEmail] = useState(`${user?.email}`);
  const [phone, setPhone] = useState(`${user?.phone}`);
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  
  console.log("after pase obj2",user)

  const handleUserUpdate = async (e) => {
    e.preventDefault();

    try{
      console.log("url login rev :",`${process.env.REACT_APP_SERVER_URL}/user/update-details`)
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/update-details`,{
      method: "PUT",
      body : JSON.stringify({
          name : name,
          email : email,
          phone: phone
        }),
      credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    const contentType = res.headers.get("content-type")
    if (contentType && contentType.indexOf("application/json") !== -1){
      const user = await res.json();
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
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
    <Navbar/>
    <div className='container nav-padd' style={{"marginBottom" : "70px"}}>
      <h3 className='heading'>Your Token:</h3>
      <div className="code-snippet">
        <div className="code-section">
          <pre className='token'>{user?.token}</pre>
          <CopyToClipboard text={user?.token} onCopy={onCopyText}>
            <span>{isCopied ? "Copied!" :  <i class="fa-regular fa-copy"/>}</span>
          </CopyToClipboard>
        </div>
      </div>

      {/* <span>
        <CopyToClipboard text={user?.token}>
            <button> {user?.token}  <i class="fa-regular fa-copy"/></button>
          </CopyToClipboard>
      </span> */}

      <div className='container detail-div'>
      <h3 className='side-heading'>Personel Info</h3>
      <form onSubmit={handleUserUpdate}>
          <div className="mb-3 row">
            
            <label htmlFor="ProfileName" className="form-label col-md-1 profile-label">
              Name
            </label>
            <div class="col-md-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="ProfileName"
              placeholder="Name"
              autoFocus
            />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="ProfileEmail" className="form-label col-md-1 profile-label">
                Email
            </label>
            <div class="col-md-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="ProfileEmail"
              placeholder="Email"
              disabled
            />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="ProfilePhone" className="form-label col-md-1 profile-label">
                Phone
            </label>
            <div class="col-md-5">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="ProfilePhone"
              placeholder="Phone Number"
            />
            </div>
          </div>
          <div className=' row '>
            <div className='col-md-4 '></div>
            <div className='col-md-2 profile-label'>
              <button type="submit" className="btn btn-primary" >
              Update Details
            </button>
            </div>
          </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default Homepage