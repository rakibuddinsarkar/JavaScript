import { v4 as uuidv4 } from "uuid";
const todos = [
  {
    id: uuidv4(),
    title: "Learn React",
    desc: "Learn React from scratch",
  },
  {
    id: uuidv4(),
    title: "Learn Angular",
    desc: "Learn Angular from scratch",
  },
  {
    id: uuidv4(),
    title: "Learn Vue",
    desc: "Learn Vue from scratch",
  },
];

function MapUniqueId() {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.desc}</p>
        </div>
      ))}
    </>
  );
}
export default MapUniqueId;
