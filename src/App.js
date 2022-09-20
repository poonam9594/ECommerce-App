import "./App.css";
import Navbar from "./component/Navbar";
import List from "./component/List";
import Loader from "./component/Loader";

function App() {
  return (
    <>
      <Navbar />
      <div className="product_list_container">
        <div className="container">
          <List />

          <div className="row mt-4 pb-4">
            <div className="col-12">
              <Loader />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
