import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const SignedInMenu = ({signOut}) => {

  this.handleClick = () => {
    console.log("Witam");
  }

    return(
            <Menu.Item position="right">
            <Dropdown.Item onClick={this.handleClick} text="Przelacz" icon="download" />
            <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
            </Menu.Item>
    )
}

export default SignedInMenu
