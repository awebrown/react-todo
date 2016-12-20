import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class Login extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.onLoginFacebook = this.onLoginFacebook.bind(this);
  //   this.onLoginGithub = this.onLoginGithub.bind(this);
  // }
  onLoginFacebook() {
    let {dispatch} = this.props;
    dispatch(actions.startLoginFacebook());
  }
  onLoginGithub() {
    let {dispatch} = this.props;
    dispatch(actions.startLoginGithub());
  }
  render () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with facebook account below</p>
              <button className="button" onClick={this.onLoginGithub.bind(this)}>Login with GitHub</button>
              <button className="button" onClick={this.onLoginFacebook.bind(this)}>Login with Facebook</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(Login);
