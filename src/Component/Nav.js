import React, { useContext } from "react";
import { ContextData } from "../Context/DataContext";

export const Nav = () => {
  const { search, handleSearch } = useContext(ContextData);
  return (
    <nav>
      <p>Meetup</p>
      <input type="text" value={search} onChange={handleSearch} />
    </nav>
  );
};
