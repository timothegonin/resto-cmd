import { Provider } from 'react-redux';
import './App.css';
import {store} from './store'
import Cart from "../features/cart/Cart"

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;
