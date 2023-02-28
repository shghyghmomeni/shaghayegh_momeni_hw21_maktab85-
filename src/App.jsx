import "./App.css";
import Form from "./components/form";
import CartsBox from "./components/cartsBox";
function App() {
  return (
    <div className="App">
      <div className="layout">
        <Form />
        <CartsBox />
      </div>
    </div>
  );
}

export default App;
