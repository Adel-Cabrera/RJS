import React, { Component } from 'react';

class UserGreeting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  render() {

    // return (this.state.isLoggedIn && <div>Hola, Adel</div>);

    return(
      this.state.isLoggedIn ?
      (<div>Hola, Adel</div>) :
      (<div>Hola, Guest</div>)
    );

    // let message
    // if (this.state.isLoggedIn){
    //   message = <div>Hola, Adel</div>
    // } else {
    //   message = <div>Hola, Guest</div>
    // }
    // return <div> {message} </div>


    // if (this.state.isLoggedIn){
    //   return(
    //     <div>Welcome Adel</div>
    //   );
    // } else {
    //   return(
    //     <div> Welcome Guest </div>
    //   );
    // }

  }

}

export default UserGreeting;
