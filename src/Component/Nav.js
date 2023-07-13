import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../Context/DataContext";

export const Nav = () => {
  const { search, handleSearch } = useContext(ContextData);
  return (
    <nav>
      <Link to="/" className="home-link">
        Meetup
      </Link>
      <input type="text" value={search} onChange={handleSearch} />
    </nav>
  );
};
