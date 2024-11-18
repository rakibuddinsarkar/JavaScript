import style from "./Button.module.css";
function Button() {
  return (
    <>
      <div>
        <button className={style.button}>Click Me</button>
      </div>
    </>
  );
}

export default Button;
