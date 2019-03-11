import React, { Component } from "react";
import { Menu, Container} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import SignedInMenu from "../Menus/SignedInMenu";

import { connect } from 'react-redux'

class NavBar extends Component {
  render() {

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to='/' header>
            <img src="/assets/logo.png" alt="logo" />
            Triage
          </Menu.Item>
          
          <SignedInMenu signOut={this.handleSignOut} />
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.isAdmin
  }
}

export default connect(mapStateToProps)(NavBar);
