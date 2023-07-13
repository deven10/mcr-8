import React, { createContext, useEffect, useState } from "react";
import { data } from "../Data/data";
export const ContextData = createContext();

export const DataContext = ({ children }) => {
  console.log("data: ", data);
  const [meetingsData, setMeetingsData] = useState(data?.meetups);

  const [selectedValue, setSelectedValue] = useState("");

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    if (selectedValue === "both") {
      setMeetingsData(data.meetups);
    } else if (selectedValue === "offline") {
      setMeetingsData(
        data.meetups.filter(({ eventType }) => eventType === "Offline")
      );
    } else if (selectedValue === "online") {
      setMeetingsData(
        data.meetups.filter(({ eventType }) => eventType === "Online")
      );
    }
  }, [selectedValue]);

  useEffect(() => {
    const newData = data.meetups.filter(
      (meeting) =>
        meeting.title.toLowerCase().includes(search) ||
        meeting.eventTags.join("").toLowerCase().includes(search)
    );
    setMeetingsData(newData);
  }, [search]);

  return (
    <ContextData.Provider
      value={{
        meetingsData,
        setMeetingsData,
        handleSelect,
        selectedValue,
        search,
        handleSearch,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
