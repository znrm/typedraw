import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles';

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
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="password"
          onChangeText={password => this.setState({ password })}
        />

        <View style={styles.row}>
          <Button title="Log In" onPress={() => login(this.state)} />
          <Button title="Sign Up" onPress={() => createUser(this.state)} />
        </View>

        <View style={styles.error}>
          {errors.length ? <Text>{errors.join(' ')}</Text> : null}
        </View>
      </View>
    );
  }
}

export default Auth;
