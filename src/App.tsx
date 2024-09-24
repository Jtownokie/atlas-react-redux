import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Board />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default App;
