import React from 'react'
import { useEffect, useState } from 'react';

const Users = (props) => {
  const [userData, setuserData] = useState([]);
  const fetchInfo = async () => {
    try{
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/get${props.user_type}`,{
      credentials: 'include'
    })

    const userData = await res.json();
    setuserData(userData);
    console.log("umm ?",userData);

    }catch(err){
      console.log("catch err",err);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  
  const handleApprove = async (userID) => {
    try{
        console.log("url login rev :",`${process.env.REACT_APP_SERVER_URL}/user/approve`)
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/approve`,{
        method: "PUT",
        body : JSON.stringify({
            requesterId: userID
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
        fetchInfo();
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

  const handleReject = async (userID) => {
    try{
        console.log("url login rev :",`${process.env.REACT_APP_SERVER_URL}/user/remove`)
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/remove`,{
        method: "PUT",
        body : JSON.stringify({
            userId: userID
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
        fetchInfo();
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

  const approvebtn = (userObj)=>{
    if(userObj.is_approved){
        return(<button className="btn btn-outline-primary" type="submit" 
        style={{"color": "#D4782B", "border-color": "#D4782B"}}
        onClick={(e)=>{
            e.preventDefault();
            handleApprove(userObj._id)}} disabled>Approved</button>
        );
    }
    else{
        return(
            <button className="btn btn-primary" type="submit" onClick={(e)=>{
                e.preventDefault();
                handleApprove(userObj._id)}}>Approve</button>
        );
    }
  }


  return (
    <div className="container" style={{ "padding": "20px 0 100px 0"}}>
      <div className="row table-heading">
        <div className="col-md-1 col-half ">
          <h4 className='table-head-text'>ID</h4>
        </div>
        <div className="col-md-2">
          <h4 className='table-head-text'>Name</h4>
        </div>
        <div className="col-md-3">
          <h4 className='table-head-text'>Email</h4>
        </div>
        <div className="col-md-2 col-2half">
          <h4 className='table-head-text'>Phone</h4>
        </div>
        <div className="col-md-1 col-half">
        </div>
        <div className="col-md-1 col-half">
        </div>
      </div>

      {userData?.map( (userObj) => {
        
        return (
        <div className="row row-list admin-row">
         <div className="col-md-1 my-auto col-half" style={{"word-wrap": "break-word"}}>
          <p className="user-ID">
             {userObj._id}
          </p>
          </div>
          <div className="col-md-2 my-auto">
          <p className="user-name">
            {userObj.name}
          </p>
          </div>
          <div className="col-md-3 my-auto">
          <p className="user-email">
            {userObj.email}
          </p>
          </div>
          <div className="col-md-2 my-auto col-2half">
          <p className="user-phone">
            +91 {userObj.phone}
          </p>
          </div>
          <div className="col-md-1 my-auto col-half">
            {approvebtn(userObj)}
          </div>
          <div className="col-md-1 my-auto col-half">
              <button className="btn btn-primary" type="submit" onClick={(e)=>{
                e.preventDefault();
                handleReject(userObj._id)}}>Reject</button>
          </div>

        </div>
    );
    })}

    </div>
  )
}

export default Users