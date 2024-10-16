import React, {useEffect, useState} from 'react'
import { useStore } from 'react-redux'

const Owner = () => {
  const store = useStore()
  const [owner, setOwner]= useState(store.getState().owner)

  const handleSubmit = e => {
    e.preventDefault()
    const firstName = e.currentTarget.firstName.value
    store.dispatch({
      type:'UPDATE_FIRSTNAME',
      payload:firstName
    })
  }

  useEffect(() => {
    store.subscribe(() => setOwner(store.getState().owner))
  })

  return (
    <form onSubmit={handleSubmit} className='OwnerForm'>
      <h2>Propriétaire du restaurant</h2>
      {
        owner?.firstName ? 
        (<span className='OwnerName'>Le propriétaire du restaurant est {owner.firstName}</span>) : 
        (<span className='OwnerName'>Le propriétaire n'est pas été configuré</span>)
      }
      <label>
        Prénom du propriétaire
        <input type="text" name="firstName" />
      </label>
      <button type="submit">Configurer le propriétaire</button>
    </form>
  )
}

export default Owner