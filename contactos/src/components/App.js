import React from 'react';
import Contacto from "./Contacto";
import {Provider as ReduxProvider} from "react-redux";
import configureStore from "../redux/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
        <div className="App">
            <Contacto/>
        </div>
    </ReduxProvider>
);
}

export default App;
