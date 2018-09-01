import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const { login, createUser, errors } = this.props;
    return (
      <View>
        {errors.length ? <Text>{errors.join(' ')}</Text> : null}
        <TextInput
          placeholder="email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />
        <Button title="Log In" onPress={() => login(this.state)} />
        <Button title="Sign Up" onPress={() => createUser(this.state)} />
      </View>
    );
  }
}

export default Auth;
