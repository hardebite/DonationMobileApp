import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalstyle';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Paystack} from 'react-native-paystack-webview';
import Toast from 'react-native-root-toast';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  const [pay, setPay] = useState(false);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header title={donationItemInformation.name} type={2} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} onPress={() => setPay(true)} />
      </View>
      {pay && (
        <View style={{flex: 1}}>
          <Paystack
            paystackKey="pk_test_937b9b0bb70e5ec08ef6588742c522ed0d489f2b"
            amount="500"
            billingEmail="adedoyinadegbite@yahoo.com"
            activityIndicatorColor="green"
            onCancel={e => {
              // handle response here
              setPay(false);
              console.log('cancelled');
              Toast.show('Transaction Cancelled!!', {
                duration: Toast.durations.LONG,
              });
            }}
            onSuccess={response => {
              // handle response here
              setPay(false);
              console.log('success');

              const responseObject = response['transactionRef']['message'];
              if (responseObject === 'Approved') {
                Toast.show('Transaction Approved!!', {
                  duration: Toast.durations.LONG,
                });
              }
            }}
            autoStart={pay}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default SingleDonationItem;
