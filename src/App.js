import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Forma from './components/Forma';
import Spisak from './components/Spisak';

function App() {
  const [studenti, setStudenti] = useState([]);
  const kreiraj = (student) => {
    setStudenti(prev => [...prev, student])
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
