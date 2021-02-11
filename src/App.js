import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Spisak from './components/Spisak';
import Forma from './components/Forma';

function App() {
  const [studenti, setStudenti] = useState([]);
  const kreiraj = (student) => {
    setStudenti(prev => [...prev, student])
  }
  const obrisi = (student) => {
    setStudenti(prev => prev.filter(element => element !== student));
  }
  return (
    <BrowserRouter>

      <Switch>

        <Route path='/spisak'>
          <Spisak studenti={studenti} />
        </Route>
        <Route path='/'>
          <Forma kreiraj={kreiraj} />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
