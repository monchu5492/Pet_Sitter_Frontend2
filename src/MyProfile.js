import React from 'react'
import { Image, Header, Divider } from 'semantic-ui-react'
import PetsContainer from './PetsContainer'
import PetCard from './PetCard'

const ProfilePicture = () => (
  <>
    <div className="profile-top-section">
    <Image className="profilepic" src='https://smileinternationalmagazine.com/wp-content/uploads/2017/09/justin-bieber.jpg' size='medium' circular />
    <Header className="profilename" as='h3' style={{ fontSize: '2em' }}>
      Justin B.
    </Header>
    </div>

    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
      <p>My Pets</p>
    </Divider>

    <PetsContainer />
    <PetCard/>
  </>
)

export default ProfilePicture