import { useDispatch } from "react-redux"
import { ProductCard } from "../../common/components/ProductCard"
import * as ProductList from "../../common/models"
import { addProduct } from "../../app/store"

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
                onSelect={()=> dispatch(addProduct(product))}
              />
            )
          } 
        )
      }
    </div>
  )
}

export default Menu