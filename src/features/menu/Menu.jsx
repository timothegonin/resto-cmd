import { useDispatch } from "react-redux"
import { ProductCard } from "../../common/components/ProductCard"
import * as ProductList from "../../common/models"

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
                onSelect={()=> dispatch({
                  type:"ADD_PRODUCT",
                  payload: product
                })}
              />
            )
          } 
        )
      }
    </div>
  )
}

export default Menu