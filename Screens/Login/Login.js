import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalstyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import style from './style';
import {Routes} from '../../Navigation/Routes';
import {loginUser} from '../../api/user';
import {useDispatch, useSelector} from 'react-redux';
import {resetToInitialState, logIn} from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            onChangeText={value => {
              setEmail(value);
            }}
            placeholder={'Enter your Email'}
            label={'Email'}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
            placeholder={'******'}
            label={'Password'}
          />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 8}
          />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate(Routes.Registration);
          }}
          style={style.registrationButton}>
          <Header
            color={'#156CF7'}
            type={3}
            title={"don't have an account ?"}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
