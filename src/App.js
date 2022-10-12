import Card from "./components/Card";
import "./App.css";

const data = [
  {
    title: "Pen",
    price: 20,
    color: "blue",
    date: new Date(2022, 7, 5),
  },
  {
    title: "Paper",
    price: 20,
    color: "blue",
    date: new Date(2020, 3, 14),
  },
  {
    title: "Apple",
    price: 20,
    color: "blue",
    date: new Date(2021, 7, 24),
  },
];

function App() {
  return (
    <div className="App">
      {data.map((el) => {
        return (
          <Card
            title={el.title}
            price={el.price}
            color={el.color}
            date={el.date}
          />
        );
      })}
    </div>
  );
}

export default App;
