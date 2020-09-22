import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components/index';
import { IPizzaItem } from './interfaces';
import { Cart, Home } from './pages';
import { setPizzas } from './redux/actions/pizzas';

interface ServerData {
  pizzas: IPizzaItem[]
}

const App: React.FC = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get<ServerData>('http://localhost:3000/db.json')
      .then(({ data }) => {
        dispatch(setPizzas(data.pizzas));
      });
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
      </div>
    </div>
  );
}

export default App;
