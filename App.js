import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <LinearGradient
      colors={['#A32085', '#C33B87', '#CC365C']}
      locations={[0, 0.5, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('./assets/logo-ig.png')}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 700,
          paddingBottom: 25,
          color: 'white',
          fontFamily: 'CircularStd-BlackItalic',
        }}>
        {' '}
        Instagram{' '}
      </Text>
      <TextInput
        style={styles.textBox}
        placeholder="Username or Email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Text 
      style={{
        color: 'white',
        paddingLeft: 190,
        padding: 5,
      }}>
        Forgot Password?
      </Text>
      <Pressable style={styles.button}>
        <Text> Log In </Text>
      </Pressable>
      <Text style={styles.textt}>
        {' '}
        Forgot you Login Details? Get Help Signing In{' '}
      </Text>
      <Text style={styles.textt}> OR </Text>
      <Text style={styles.textt}> Log in with Facebook </Text>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6C9C',
  },
  logo: {
    height: 40,
    width: 40,
  },
  textBox: {
    marginTop: 10,
    padding: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
    width: 300,
  },
  button: {
    backgroundColor: '#0097FE',
    padding: 8,
    margin: 8,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  textt: {
    color: 'white',
    paddingTop: 8,
  },
});
