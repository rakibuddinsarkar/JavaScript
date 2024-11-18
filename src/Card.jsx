import profilePic from "./assets/profile-pic.jpg";

export default function Card(props) {
  let { profileName, designation } = props;
  return (
    <>
      <div className="card">
        <img className="profile-pic" src={profilePic} alt="ProfilePic" />
        <h1 className="profile-name">{profileName}</h1>
        <p className="profile-job">{designation}</p>
      </div>
    </>
  );
}
