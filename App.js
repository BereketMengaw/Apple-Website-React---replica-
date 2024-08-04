import "./App.css";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";

import Header from "./functional component/Header";
import Footer from "./functional component/Footer";
import First from "./functional component/First";
import Alert from "./functional component/Alert";
import Second from "./functional component/Second";
import Third from "./functional component/Third";
import Forth from "./functional component/Forth";
import Fifth from "./functional component/Fifth";
import Sixth from "./functional component/Sixth";

function App() {
  return (
    <div className="app">
      <Header />
      <Alert />
      <First />
      <Second />
      <Third />
      <Forth />
      <Fifth />
      <Sixth />

      <Footer />
    </div>
  );
}

export default App;
