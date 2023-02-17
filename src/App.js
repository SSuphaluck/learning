const students = [
  'Bic',
  'Job',
  'May',
  'Leelee',
  'First',
  'Best',
  'Way',
  'Kaew',
  'Mild',
  'Ohm',
  'Ohm'
];

const data = [
  { id: 1, name: 'Coke', price: 20, stock: 100, description: 'description1' },
  { id: 2, name: 'Pepsi', price: 20, stock: 100, description: 'description2' },
  { id: 3, name: 'Fanta', price: 20, stock: 100, description: 'description3' }
];

function App() {
  return (
    // <div>
    //   <p>{students[0]}</p>
    //   <p>{students[1]}</p>
    //   <p>{students[2]}</p>
    //   <p>{students[3]}</p>
    //   {[<p>Bic</p>, <p>Job</p>, <p>May</p>, <p>Leelee</p>]}
    // </div>

    // <div>
    //   {students.map((item, index) => (
    //     <p key={index}>{item}</p>
    //   ))}
    // </div>

    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
      {data.map(({ id, name, price, description }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      ))}
      {/* <div>
        <h3>Coke</h3>
        <p>20</p>
      </div>
      <div>
        <h3>Pepsi</h3>
        <p>20</p>
      </div>
      <div>
        <h3>Fanta</h3>
        <p>20</p>
      </div> */}
    </div>
  );
}

export default App;
