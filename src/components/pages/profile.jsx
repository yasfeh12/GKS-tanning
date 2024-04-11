import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Profile() {
  return (
    <div>
      <h1>Client Photos</h1>
      
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/tan1.jpg" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="/assets/tan2.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="/assets/tan3.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

      <p>
        At GKS Tanning Studios, we prioritize your safety and satisfaction above all else. Our meticulously maintained tanning beds are equipped with the latest technology to ensure even, natural-looking results every time. Whether you're aiming for a subtle sun-kissed glow or a deep bronzed hue, our expert staff is here to guide you on your tanning journey.
      </p>

      <p>
        But it's not just about the tan - it's about the confidence and vitality that come with it. A radiant tan can boost your mood, enhance your appearance, and leave you feeling revitalized inside and out. With GKS Tanning Studios, you're not just getting a tan; you're getting a dose of sunshine and self-care that leaves you looking and feeling your best.
      </p>

      <p>
        Join the countless satisfied customers who have made GKS Tanning Studios their destination for radiant, healthy-looking skin. Discover the transformative power of tanning done right at GKS Tanning Studios.
      </p>

      {/* <button onClick={() => window.open('https://yasfeh12.github.io/Bootstrap-Portfolio/', '_blank')} className="btn btn-dark" id="resume-btn">
        reviews
      </button> */}
    </div>
  );
}

export default Profile;


// import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom'; // Import React Router components
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// function Profile() {
//   return (
//     <div>
//       <h1>Client Photos</h1>
      
//       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="/assets/tan1.jpg" className="d-block w-100" alt="Slide 1" />
//           </div>
//           <div className="carousel-item">
//             <img src="/assets/tan2.jpg" className="d-block w-100" alt="Slide 2" />
//           </div>
//           <div className="carousel-item">
//             <img src="/assets/tan3.jpg" className="d-block w-100" alt="Slide 3" />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       <p>
//         At GKS Tanning Studios, we prioritize your safety and satisfaction above all else. Our meticulously maintained tanning beds are equipped with the latest technology to ensure even, natural-looking results every time. Whether you're aiming for a subtle sun-kissed glow or a deep bronzed hue, our expert staff is here to guide you on your tanning journey.
//       </p>

//       <p>
//         But it's not just about the tan - it's about the confidence and vitality that come with it. A radiant tan can boost your mood, enhance your appearance, and leave you feeling revitalized inside and out. With GKS Tanning Studios, you're not just getting a tan; you're getting a dose of sunshine and self-care that leaves you looking and feeling your best.
//       </p>

//       <p>
//         Join the countless satisfied customers who have made GKS Tanning Studios their destination for radiant, healthy-looking skin. Discover the transformative power of tanning done right at GKS Tanning Studios.
//       </p>

//       {/* Here you can handle routing */}
//       <div className="learn-container">
//         <Link to="learn" role="button" className="btn btn-link" id="reviews-btn">
//           Reviews
//         </Link>
//       </div>

//       <Routes>
//         <Route path="learn" element={<Learn />} /> {/* Make sure to replace `<Learn />` with your actual component */}
//       </Routes>
//     </div>
//   );
// }

// export default Profile;
