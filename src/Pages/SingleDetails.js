import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../Component/Nav";
import { ContextData } from "../Context/DataContext";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const RSVPModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRSVP = () => {};

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Button onClick={handleOpen}>RSVP</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="group">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your Name" />
          </div>
          <div className="group">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your Email" />
          </div>
          <button
            onClick={() => {
              handleRSVP();
              handleClose();
            }}
          >
            RSVP
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export const SingleDetails = () => {
  const { dataId } = useParams();
  const { meetingsData } = useContext(ContextData);
  const meeting = meetingsData.find(({ id }) => id === dataId);
  console.log(meeting);

  return (
    <div>
      <Nav />
      <hr />
      <div className="main-single-page">
        <div className="lhs">
          <h3>{meeting?.title}</h3>
          <p className="host">
            Hosted by:
            <br />
            <span>{meeting?.hostedBy}</span>
          </p>
          <img src={meeting?.eventThumbnail} alt="" />
          <p className="details">
            Details:
            <br />
            <span>{meeting?.eventDescription}</span>
          </p>
          <p className="info">
            Additional Information:
            <br />
            <span className="dress">
              Dress Code:{" "}
              <span>{meeting?.additionalInformation.dressCode}</span>
            </span>
            <br />
            <span className="age">
              Age Restrictions:{" "}
              <span>{meeting?.additionalInformation.ageRestrictions}</span>
            </span>
          </p>
          <p className="tag">
            Events Tag:
            <br />
            <span>
              {meeting?.eventTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </span>
          </p>
        </div>
        <div className="rhs">
          <div className="rhs-top">
            <p>
              {meeting?.eventStartTime} to {meeting?.eventEndTime}
            </p>
            <p>
              {meeting?.location} <br /> {meeting?.address}
            </p>
            <p>${meeting?.price}</p>
          </div>
          <div className="rhs-middle">
            <p>Speakers ({meeting.speakers.length})</p>
            <div className="speakers-wrapper">
              {meeting.speakers.map((speaker) => (
                <div className="speaker" key={speaker.name}>
                  <img src={speaker.image} alt="" />
                  <p className="name">{speaker.name}</p>
                  <p className="designation">{speaker.designation}</p>
                </div>
              ))}
            </div>
          </div>
          <RSVPModal />
        </div>
      </div>
    </div>
  );
};
