import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Route ,Switch} from "react-router-dom";
import './App.css';
import Home from './Pages/Home'
import Upload from './Pages/Upload'
import Header  from "./components/Header";


const App = ()=> {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Switch>
        <Route path = '/upload' component={Upload}/>
          <Route path = '/'component={Home}/>
       
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
