import React from 'react'
import { useStore } from 'react-redux'

const Cart = () => {
  const store = useStore()
  return (
    <div className='Selection'>
      <h1>Vos produits sélectionnés</h1>
      {
        store.getState().list.map((item, index) => {
          return <span key={index} className='SelectedProduct'>{item.title} {item.price}</span>
        })
      }
    </div>
  )
}

export default Cart