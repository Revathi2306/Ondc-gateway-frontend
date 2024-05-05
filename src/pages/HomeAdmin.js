import React from 'react'
import Users from '../components/Users';

const HomeAdmin = () => {
    
  return (
    <>
    <div className='container' style={{"minHeight": "80vh", "padding": "25px 0 10px 0", "maxWidth": "80vw"}}>
    <h4 className='heading mb-4'> Admin Dashboard ONDC Gateway</h4>
    <div>
    <ul className="nav nav-tabs one-edge-shadow mt-3" id="myTab" role="tablist">
    <li className="nav-item admin-nav-item active" role="presentation">
      <button
        className="nav-link active"
        id="seller-tab"
        data-bs-toggle="tab"
        data-bs-target="#seller"
        type="button"
        role="tab"
        aria-controls="seller"
        aria-selected="true"
      >
        Seller Application
      </button>
    </li>
    <li className="nav-item admin-nav-item" role="presentation">
      <button
        className="nav-link"
        id="buyer-tab"
        data-bs-toggle="tab"
        data-bs-target="#buyer"
        type="button"
        role="tab"
        aria-controls="buyer"
        aria-selected="false"
      >
        Buyer Application
      </button>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div
      className="tab-pane fade show active"
      id="seller"
      role="tabpanel"
      aria-labelledby="seller-tab"
    >
      <Users user_type="Seller"/>
    </div>
    <div
      className="tab-pane fade"
      id="buyer"
      role="tabpanel"
      aria-labelledby="buyer-tab"
    >
      <Users user_type="Buyer"/>
    </div>

  </div>
  </div>
    </div>
    </>
  )
}

export default HomeAdmin