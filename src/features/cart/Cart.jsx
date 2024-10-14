import React, { useEffect, useState } from 'react'
import { useStore } from 'react-redux'
import { SuperCremeux } from '../../common/models'

const Cart = () => {
  const store = useStore()
  const [list, setList] = useState(store.getState().list)
  const price = list.map(item => item.price)
  const initialValue = 0
  const totalPrice = price.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

  useEffect(() => {
    store.subscribe(()=> setList(store.getState().list))
  })

  return (
    <div className='Selection'>
      <h1>Vos produits sélectionnés</h1>
      {
        list.map((item, index) => {
          return <span key={index} className='SelectedProduct'>{item.title} {item.price}</span>
        })
      }
      <p className='TotalCommand'>{list < 0 ? 'Aucun produit sélectionné pour le moment' : `Total commande ${totalPrice} euros`}</p>
      <div className='CartNavBar'>
        <button onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}>Ajouter un super crémeux</button>
      </div>
    </div>
  )
}

export default Cart