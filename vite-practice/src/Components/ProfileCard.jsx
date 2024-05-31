import React from "react";

export const ProfileCard = ({ profilePic, name, role, email, skills }) => {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "Regarding a disgussion"
  )}&body=${encodeURIComponent(
    "Hi Mr.prithivirajan, /n I wanted to reach out to you regarding..."
  )}`;
  return (
    <>
      <div className="profile-card">
        <h2 className="center-header">Profile Card</h2>
        <div className="profile">
          <img src={profilePic} alt="image alt" className="profile-pic" />
          <div>{name}</div>
          <div>{role}</div>
          <div>
            <a href={mailto}>{email}</a>
          </div>
          <div className="div-tittle">Skills</div>
          <ul>
            {skills.map((skill, index) => (
              <li className="skill-list" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
