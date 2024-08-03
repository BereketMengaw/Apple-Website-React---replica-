import "./App.css";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";

import Header from "./functional component/Header";
import Footer from "./functional component/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <App />
      <Footer />
    </div>
  );
}

export default App;
