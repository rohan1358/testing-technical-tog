import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  View,
  Alert,
} from 'react-native';
import {bg, coffeeBag, colors, fontMain, shadow} from '../../../assets';
import {adjust, newAlert, userLogin} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {ContextReact, initialValue} from '../../context/reducers';
import {changeLogin} from '../../context/action';
import Base from '../../component/Base';
import {styles} from './styles';

const auth = {
  email: 'admin',
  password: 'password',
};

let initialValidate = {
  email: false,
  password: false,
};

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(null);

  const [stateAuth, setStateAuth] = useState({
    email: '',
    password: '',
  });

  const [validate, setValidate] = useState(initialValidate);
  const [validateTitle, setValidateTitle] = useState(initialValidate);

  const {dispatch} = useContext(ContextReact);

  const handleLogin = () => {
    const {email, password} = stateAuth;

    if (email || password) {
      if (email !== auth.email) {
        Alert.alert('Login Gagal!', 'email yang anda masukan salah!');
        setValidate({...validate, email: true});
        setValidateTitle({
          ...validate,
          email: 'email yang anda masukan salah!',
        });
      } else if (password !== auth.password) {
        Alert.alert('Login Gagal!', 'password yang anda masukan salah!');
        setValidate({...validate, password: true, email: false});
        setValidateTitle({
          ...validate,
          password: 'password yang anda masukan salah!',
        });
      } else {
        setValidate(initialValidate);
        setValidateTitle(initialValidate);
        userLogin({email, password}).then(res => {
          dispatch(changeLogin());
        });
      }
    } else {
      setValidate({
        email: true,
        password: true,
      });
      setValidateTitle({
        email: 'mohon masukan email anda',
        password: 'mohon masukan password anda',
      });
    }
  };

  const TextValidate = ({title}) => {
    return (
      <Text
        style={{
          marginTop: 0,
          marginHorizontal: adjust(20),
          color: 'red',
          fontFamily: fontMain,
        }}>
        {title || 'warning'}
      </Text>
    );
  };

  const handleChange = e => {
    const {name, value} = e;

    if (!value.length) {
      setValidate({
        ...validate,
        [name]: true,
      });
      setValidateTitle({
        ...validateTitle,
        [name]: `${name} dibutuhkan!`,
      });
    } else {
      setValidate({
        ...validate,
        [name]: false,
      });
    }

    setStateAuth({...stateAuth, [name]: value});
  };

  return (
    <Base style={styles.container}>
      <Image style={styles.imageBg} source={bg} />

      <Base style={styles.container2}>
        <Base style={styles.container3}>
          <Base style={styles.logo}>
            <Image source={coffeeBag} width="50%" height="50%" />
          </Base>
        </Base>
        <Base>
          <TextInput
            placeholder="Email or Phone Number"
            style={[
              styles.input,
              {borderColor: validate.email ? 'red' : colors.coco},
            ]}
            onChangeText={e => handleChange({value: e, name: 'email'})}
            value={stateAuth.email}
          />
          {validate.email && <TextValidate title={validateTitle.email} />}
          <TextInput
            style={[
              styles.input,
              {borderColor: validate.password ? 'red' : colors.coco},
            ]}
            onChangeText={e => handleChange({value: e, name: 'password'})}
            placeholder="Password"
            secureTextEntry={true}
            value={stateAuth.password}
          />
          {validate.password && <TextValidate title={validateTitle.password} />}
        </Base>
        <Base style={styles.forgotPass}>
          <TouchableOpacity
            onPress={() => {
              // handleLogin();
              newAlert();
            }}>
            <Text
              style={{
                color: colors.yellow,
                fontFamily: fontMain,
              }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </Base>
        <Base
          style={{
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              handleLogin();
            }}
            style={styles.buttonLogin}>
            <Text style={styles.titleLogin}>Login</Text>
          </TouchableOpacity>
        </Base>
      </Base>
    </Base>
  );
};

export default Login;
