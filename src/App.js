import React, { Component } from 'react';
import Navigation from './components/layout/Navigation';
import Header from './components/Header';
import Services from './components/Services';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation logoTitle="React Project"/>
        <Header title="Stylish Portfolio" button="Find Out More"/>
        <Services />
      </div>
    );
  }
}

export default App;
