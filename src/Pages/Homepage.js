import React, { useContext } from "react";
import { ContextData } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Component/Nav";

export const Homepage = () => {
  const { meetingsData, selectedValue, handleSelect } = useContext(ContextData);
  const navigate = useNavigate();

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    const formattedDate = date.toLocaleDateString("en-IN", options);
    const formattedDateTime = `${formattedDate}`;
    return formattedDateTime;
  };

  return (
    <div>
      <Nav />
      <hr />
      <main>
        <div className="header">
          <h1>Meetup Events</h1>
          <select
            name=""
            id=""
            value={selectedValue}
            onChange={(e) => handleSelect(e)}
          >
            <option value="">Select an Option</option>
            <option value="both">Both</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div className="main-wrapper">
          {meetingsData?.map((meeting) => (
            <div
              onClick={() => navigate(`/single-meeting/${meeting.id}`)}
              key={meeting.id}
              className="card"
            >
              <div className="card-top">
                <p>{meeting.eventType}</p>
                <img src={meeting?.eventThumbnail} alt="" />
              </div>
              <div className="card-bottom">
                <p>{formatDate(meeting.eventStartTime)}</p>
                <p className="title">{meeting.title}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
