import React, { createContext, useState } from "react";
import { data } from "../Data/data";
export const ContextData = createContext();

export const DataContext = ({ children }) => {
  console.log("data: ", data);
  const [meetingsData, setMeetingsData] = useState(data?.meetups);

  return (
    <ContextData.Provider
      value={{
        meetingsData,
        setMeetingsData,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
