import "./App.css";
import BooksList from "./components/BooksList";
import HotSale from "./components/HotSale";
import BookProvider from "./context/bookProvider";

function App() {
  return (
    <BookProvider>
      <div className="App">
        <h1>The Bookstore</h1>
        <HotSale />
        <BooksList />
      </div>
    </BookProvider>
  );
}

export default App;
