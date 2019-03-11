import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

const SignedInMenu = ({signOut}) => {

    return(
            <Menu.Item position="right">
            <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
            </Menu.Item>
    )
}

export default SignedInMenu