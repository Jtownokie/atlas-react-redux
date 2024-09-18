import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Board />
      <Footer />
    </Provider>
  );
}

export default App;
