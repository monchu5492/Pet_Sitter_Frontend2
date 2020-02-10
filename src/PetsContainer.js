import React from 'react'
import PetCard from './PetCard.js'

class PetsContainer extends React.Component {
  
  //iterate over all pets for this specific owner and create a PetCard for them
  everyPet = () => {
    return this.props.pets.map((pet, index) => {
      return <PetCard pet={pet} key={index} />
    })
  }

  render() {
    return(
      <div className="ui grid container"></div>
    )
  }

}
export default PetsContainer