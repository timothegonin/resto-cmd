import { useSelector } from "react-redux";
import { getListQuantityProductPerName } from '../../app/selectors'

const Cart = () => {
  const list = useSelector(getListQuantityProductPerName)

  return (
    <div className="Selection">
      <h1>Choisir son menu</h1>
      {
        list.filter(
          product => product.quantity !== 0
        ).map(
          (product, index) => {
            return (
              <span key={index} className="SelectedProduct">{product.quantity} x {product.title}</span>
            )
          }
        )
      }
    </div>
  );
};

export default Cart