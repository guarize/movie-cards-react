import React from 'react';
import { FaFilm } from 'react-icons/fa';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <FaFilm className="movie-icon" />
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
