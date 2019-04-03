import React, {Component} from 'react'
import { Form, Grid, Button, Header, Segment, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginUser } from '../../app/reducers/userActions'


class HomePage extends Component {

  state = {
    login:'',
    password:'',
    logged: false,
    error: false,
    }


  handleLogin = (e) => {
    e.preventDefault();
    this.props.history.push('/triage');

    // let check=false;
    // this.state.users.forEach(user=>{
    //     if(user.Login === this.state.login
    //       && user.Password === this.state.password ){
    //         check=true;
    //         this.setState({
    //           logged: true,
    //         })
    //         let loggedUser = user;
    //         loggedUser.logged=true;
    //         this.props.loginUser(loggedUser);
    //         this.props.history.push('/videos');
    //       }
    // })

    // if(!check){
    //   this.setState({
    //     error: true,
    //   })
    // } else {
    //   this.setState({
    //     error: false,
    //   })
    // }
  }

  handleLoginChange= (e)=>{
      this.setState({
        login: e.target.value
      })
  }

  handlePasswordChange= (e) =>{
   this.setState({
     password: e.target.value
   })
 }


  render(){
    if(!this.props.isLogged){
      return (
        <div>
              <div className="ui inverted vertical masthead center aligned segment">
                <div className="ui text container">
                  <h1 className="ui inverted stackable header">
                    <img
                      className="ui image massive"
                      src="/assets/logo.png"
                      alt="logo"
                    />
                    <div className="content">Triage</div>
                  </h1>
                  <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
          Login to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input onChange={this.handleLoginChange} fluid icon='user' iconPosition='left' placeholder='Login' />
              <Form.Input
                onChange={this.handlePasswordChange}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button onClick={this.handleLogin} color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>


          {this.state.error && <Message negative>
            <Message.Header>Blad logowania</Message.Header>
            <p>Bledny login lub haslo. Sprobuj ponownie!</p>
          </Message> }

        </Grid.Column>
      </Grid>
                </div>
              </div>
            </div>
      )
    } else
      {
      this.props.history.push('/videos');
      return null;
    }
    }

}

const mapStateToProps = (store) => {
  // return {
  //   isLogged: store.user.isLogged
  // }
}

const mapDispatchToProps = (dispatch)=>{
   return {
     loginUser: (login)=> dispatch(loginUser(login))
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
