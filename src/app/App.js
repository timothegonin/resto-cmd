import { Provider } from 'react-redux';
import './App.css';
import {store} from './store'
import Cart from "../features/cart/Cart"
import Total from "../features/total/Total"
import { Voucher } from '../features/voucher/Voucher';
import Owner from "../features/owner/Owner"

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Cart/>
        <Total/>
        <Voucher/>
        <Owner/>
      </div>
    </Provider>
  );
}

export default App;
