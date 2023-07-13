import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../Component/Nav";
import { ContextData } from "../Context/DataContext";

export const SingleDetails = () => {
  const { dataId } = useParams();
  const { meetingsData } = useContext(ContextData);
  const meeting = meetingsData.find(({ id }) => id === dataId);
  console.log(meeting);
  return (
    <div>
      <Nav />
      <hr />
      <div className="lhs">
        <h3>{meeting?.title}</h3>
        <p>
          Hosted by:
          <br />
          <span>{meeting?.hostedBy}</span>
        </p>
        <img src={meeting?.eventThumbnail} alt="" />
        <p>
          Details:
          <br />
          <span>{meeting?.eventDescription}</span>
        </p>
        <p>
          Additional Information:
          <br />
          <span>
            Dress Code: <span>{meeting?.additionalInformation.dressCode}</span>
          </span>
          <span>
            Age Restrictions:{" "}
            <span>{meeting?.additionalInformation.ageRestrictions}</span>
          </span>
        </p>
        <p>
          Events Tag:
          <br />
          <span>
            {meeting?.eventTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </span>
        </p>
      </div>
      <div className="rhs"></div>
    </div>
  );
};
