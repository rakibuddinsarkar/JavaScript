import PropTypes from "prop-types";
function Student(props) {
  let { name, age, Id } = props;
  return (
    <div className="student">
      <p>Student Name : {name}</p>
      <p>Student Age : {age}</p>
      <p>Student : {Id ? "Yes" : "No"}</p>
    </div>
  );
}
// propsType for validation purpose use this result in console

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  Id: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  Id: false,
};
export default Student;
