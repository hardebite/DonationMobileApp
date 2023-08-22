import auth from '@react-native-firebase/auth';
import {updateToken} from '../redux/reducers/User';
import store from '../redux/store';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'email is already in use'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address'};
    }
    return {error: 'There was an error please try again'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'Please enter a correct password'};
    } else if (error.code === 'auth/user-not-found') {
      return {
        status: false,
        error: 'The email you enter does not exist please create a new account',
      };
    }
    console.log(error);
    return {status: false, error: 'Something went wrong '};
    // return {status: false, error: error.message};
  }
};
export const logout = async () => {
  await auth().signOut();
};
export const checkToken = async () => {
  try {
    let response = await auth().currentUser.getIdToken(true);
    // console.log(response);
    // console.log('we are updating token');
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
