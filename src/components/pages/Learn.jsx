import React from 'react';

function Learn() {
  return (
    <div>
      <h1 className="text-center">Book with us today!</h1>
      <div>
        <p>Reach us on WhatsApp:</p>
        <a href="https://api.whatsapp.com/send?phone=447597461109" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="WhatsApp Logo" style={{ marginBottom: '10px' }} />
        </a>
      </div>
      <div>
        <p><i className="fa-solid fa-phone-volume"></i> Phone: <a href="tel:07597461109">07597461109</a></p>
        <p><i className="fa-solid fa-envelope"></i> Email: <a href="mailto:GKStanningstudios@gmail.com">GKStanningstudios@gmail.com</a></p>
      </div>
    </div>
  );
}

export default Learn;
