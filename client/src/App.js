import React from 'react';
import AppNavbar from './components/AppNavbar'
import VideoTileList from './components/VideoTileList'
import DataModal from './components/DataModal'
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from 'react-helmet'

function App() {
  return (
    < Provider store = {store}>
      <div className="App">
        <AppNavbar/>
        <p/><p/>
        <DataModal/>
        <VideoTileList/>
        <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
        
      </div>
    </Provider>
  );
}

export default App;
