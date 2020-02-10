import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          as={NavLink} to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/about"
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/profile"
          name='my profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/pets"
          name='My Pets'
          active={activeItem === 'mypets'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          
        <Menu.Item
          as={NavLink} to="/login"
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/signup"
          name='sign up'
          active={activeItem === 'sign up'}
          onClick={this.handleItemClick}
        />
        
        <Menu.Item
          as={NavLink} to="/logout"
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
        />

        </Menu.Menu>
      </Menu>
    )
  }
}


