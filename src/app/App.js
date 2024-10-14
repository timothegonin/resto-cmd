import { Provider } from 'react-redux';
import './App.css';
import {store} from './store'
import Cart from "../features/cart/Cart"
import Total from "../features/total/Total"

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Cart/>
        <Total/>
      </div>
    </Provider>
  );
}

export default App;
