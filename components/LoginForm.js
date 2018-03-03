import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Input from './Input';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import axios from 'axios';

class App extends React.Component {
  state = {username:'z@z.z',password:'z'}
  render() {
    if (this.props.user) {
      // Redirect to home page
      Actions.home({});
    }

    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center', fontSize:19}}>Bot Social</Text>
        <Input label="Email" value={this.state.username} onChangeText={text => {this.setState({'username':text})}} />
        <Input label="Password" value={this.state.password} onChangeText={text => {this.setState({'password':text})}} />
        <Button title="Login" onPress= {this.onLoginButtonClick.bind(this)}  accessiibilityLabel="Learn more about this purple button"/>
      </View>
    );
  }
  onLoginButtonClick() {
    this.props.loginUser(this.state.username, this.state.password);
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#fff',
    // flex:1,
    height: 400,
    justifyContent: 'space-around'

  },
  textFieldContainer: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

function mapStateToProps(state) {
  // console.log("Recieved user in the login form" + JSON.stringify(state,null,2));
  return {user:state.user};
}

export default connect(mapStateToProps, {loginUser})(App)
