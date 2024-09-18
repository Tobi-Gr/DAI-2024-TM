import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/textInput';
import { StyleSheet, View } from 'react-native';
import { loginUser } from '../authService';
import React, {useState} from 'react';
import Title from '../components/Title';
import Boton from '../components/Boton';

export default function Login() {
  const [username, setUsername] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation(); 

  const handleLogin = async () => {
    if (!username || !contrasena) {
      alert('Por favor, completa todos los campos');
      return;
    }
    try {
      const credentials = { username, contrasena };
      const user = await loginUser(credentials);
      navigation.navigate('Index', { nombre: user.username});
      console.log("username:", username);
      console.log("contrasena:", contrasena);
    } catch (error) {
      alert('Error al iniciar sesión');
      console.error('Error en el login:', error);
    }
  };
  return (
    <View style={styles.container}>
        <Title text={"Inicio sesión"} />
        <View style={styles.inputContainer}>
            <CustomTextInput placeholder="Usuario" value={username} onChangeText={setUsername} style={styles.inputContainer} />
            <CustomTextInput placeholder="Contraseña" value={contrasena} onChangeText={setContrasena} secureTextEntry style={styles.inputContainer} />
            <Boton text="Iniciar Sesión" onPress={handleLogin} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%0',
    flex: 1,
    backgroundColor: '#F8F9FD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  inputContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '55%',
    marginBottom: 20
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});