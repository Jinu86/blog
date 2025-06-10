import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} 나만의 블로그. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 