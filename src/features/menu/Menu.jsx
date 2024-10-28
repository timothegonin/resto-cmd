import { useDispatch } from "react-redux"
import { ProductCard } from "../../common/components/ProductCard"
import * as ProductList from "../../common/models"
import { cartSlice } from "../cart/cartSlice"
import {getQuantityProductPerName} from '../../app/selectors'

const addProductThunk = (product) => (dispatch, getState) => {
  dispatch(cartSlice.actions.addProduct(product))
  return new Promise((resolve) => {
    setTimeout(() => {
      const numberForSpecialOffer = getQuantityProductPerName('Poulet Croquant')(getState())
      if(numberForSpecialOffer === 2){
        window.confirm('Voulez-vous ajouter une troisième fois ce produit à moitié prix ?')
        const reducedPrice = Number((ProductList.PouletCroquant.price / 2).toFixed(2))
        dispatch(
          cartSlice.actions.addProduct({
            ...ProductList.PouletCroquant,
            price: reducedPrice
          })
        )
      }
      resolve()
    }, 5000)
  })
}


const Menu = () => {
  const dispatch = useDispatch()
  return (
    <div className='Menu'>
      {
        Object.values(ProductList).map(
          (product) => {
            return (
              <ProductCard
                key={product.name}
                product={product}
                onSelect={()=> dispatch(addProductThunk(product))}
              />
            )
          } 
        )
      }
    </div>
  )
}

export default Menu