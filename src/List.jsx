function List() {
  const fruits = [
    { id: 1, name: "Apple", calories: 25 },
    { id: 2, name: "Banana", calories: 95 },
    { id: 3, name: "Orange", calories: 35 },
    { id: 4, name: "Mango", calories: 74 },
    { id: 5, name: "Pineapple", calories: 66 },
    { id: 6, name: "Watermelon", calories: 77 },
  ];

  //sort

  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  // fruits.sort((a, b) => b.name.localeCompare(a.name));
  // fruits.sort((a, b) => a.calories - b.calories);
  // fruits.sort((a, b) => b.calories - a.calories);

  //filter

  // const lowCalories = fruits.filter((fruit) => fruit.calories < 50);

  //map
  // const listItems = lowCalories.map((lowCalorie) => (
  //   <li key={lowCalorie.id}>
  //     {lowCalorie.name}:&nbsp;{lowCalorie.calories}
  //   </li>
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;{fruit.calories}
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
