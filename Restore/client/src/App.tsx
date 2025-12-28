const products = [
  { name: "product1", price: 100 },
  { name: "product2", price: 200 },
  { name: "product2", price: 300 },
];

function App() {
  return (
    <>
      <h1 style={{ color: "red" }}>Re-store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
