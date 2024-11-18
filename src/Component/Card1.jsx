import { FaFacebook } from "react-icons/fa";
export default function Card1(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <FaFacebook className="faIcon" />
    </div>
  );
}
