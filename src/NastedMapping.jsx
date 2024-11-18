const users = [
  {
    fullName: "Rakib Uddin",
    age: 22,
    phones: [{ office: "01712345678", home: "01787654321" }],
  },
  {
    fullName: "Salama Rahman",
    age: 52,
    phones: [{ office: "0000000345678", home: "07654321000" }],
  },
  {
    fullName: "Tashfeen",
    age: 3,
    phones: [{ office: "015240020", home: "6584121" }],
  },
];

export default function NastedMapping() {
  return (
    <div>
      <h1>NastedMapping</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h2>Full Name: {user.fullName}</h2>
          <p>Age: {user.age}</p>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <p>Office: {phone.office}</p>
              <p>Home: {phone.home}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}
