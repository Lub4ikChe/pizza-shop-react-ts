import axios from 'axios';
import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/index';
import { IPizzaItem } from './interfaces';
import { Cart, Home } from './pages';


interface ServerData {
  pizzas: IPizzaItem[]
}

const App: React.FC = () => {
  const [pizzas, setPizzas] = React.useState<IPizzaItem[]>([]);

  React.useEffect(() => {
    axios.get<ServerData>('http://localhost:3000/db.json')
      .then(({ data }) => {
        setPizzas(data.pizzas);
      });
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' exact render={() => <Home items={pizzas} />} />
        <Route path='/cart' exact component={Cart} />
      </div>
    </div>
  );
}

export default App;
