import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1><Link to="/">나만의 블로그</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/write">글 작성</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 