import React, { useContext } from "react";
import { ContextData } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Component/Nav";

export const Homepage = () => {
  const { meetingsData } = useContext(ContextData);
  const navigate = useNavigate();
  console.log(meetingsData);

  const formatDate = (date) => {
    // const abc = new Date(date);
    // const d = abc.getDate();
    // const m = abc.getMonth().padStart(2, "0");
    // const y = abc.getFullYear();
    // const ans = `${d}-${m}-${y}`;
    // return ans.toString();
    // console.log(ans);
  };

  return (
    <div>
      <Nav />
      <main>
        <div className="header">
          <h1>Meetup Events</h1>
          <select name="" id="">
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
