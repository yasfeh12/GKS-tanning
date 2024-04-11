import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';

function Contact(props) {
  return (
    <div>
      <img
        src="https://imgs.search.brave.com/xtE9jIIsy8NLtx0-EpJOUk67TcTaHvMJEEeC1Hcf35w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/OTExMzY2Ny9waG90/by9nb3QtYS1wcm9i/bGVtLWNvbnRhY3Qt/dXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVhZNkNkVFM0/UGxraVMycndfRVdt/SmRnN19mRzVvNHQy/OHh4TDVHVTlkMEU9" 
        alt="contact me Image"
        className="img-fluid rounded mx-auto d-block mb-4"
      />
    
      <h1>Contact me</h1>
      <ul>
        <li>
          <button className="btn btn-link" onClick={() => window.open('https://www.google.com/maps/place/Rochdale/@53.6244652,-2.2741463,12z/data=!3m1!4b1!4m6!3m5!1s0x487bb88ceb3db3ab:0x9a885edb20da6527!8m2!3d53.6097136!4d-2.1561!16zL20vMDJ6Mmxq?entry=ttu', '_blank')}>
          <i class="fa-solid fa-map-pin"></i> locations:
          </button>
        </li>
        <li>
          <button className="btn btn-link" onClick={() => window.open('https://instagram.com/', '_blank')}>
            <i className="fa-brands fa-square-instagram"></i> Instagram: GKS Tanning studios
          </button>
        </li>
        <li>
          <button className="btn btn-link" onClick={() => window.open('https://facebook.com/YaseenFehad', '_blank')}>
            <i className="fa-brands fa-square-facebook"></i> Facebook: GKS Tanning studios
          </button>
        </li>
        <li>
          <button className="btn btn-link" onClick={() => window.open('https://www.linkedin.com', '_blank')}>
            <i className="fa-brands fa-linkedin"></i> LinkedIn: GKS Tanning studios
          </button>
        </li>
      </ul>

      <div className="learn-container">
        <Link to="learn" role="button" className="btn btn-link" id="learnmore-btn">
          Learn More
        </Link>
        <Link to="contact" role="button" className="btn btn-link" id="learnless-btn"> 
          Learn Less
        </Link>
      </div>

      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Contact;
