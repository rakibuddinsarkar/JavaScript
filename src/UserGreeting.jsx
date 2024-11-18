import PropTypes from "prop-types";
function UserGreeting(props) {
  const greeting = <h3 className="greeting">Welcome {props.username}</h3>;
  const guestGreeting = (
    <h3 className="greeting-guest">Please log in to continue</h3>
    // if (props.isLoggedIn) {
    //   return <p>Welcome {props.username}</p>;
    // } else {
    //   return <p>Welcome Guest</p>;
    // }
  );
  return props.isLoggedIn ? greeting : guestGreeting;
}
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
