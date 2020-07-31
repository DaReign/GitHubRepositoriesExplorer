import React, { Component } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchComponent from "./components/SearchComponent";
import UsersList from "./components/UsersList";

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="cols col-sm-12 App__body">
                <SearchComponent />
                <UsersList />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
