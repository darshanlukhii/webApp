import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import Colors from '../helper/colors';
import Images from '../helper/Images';
import axios from 'axios';

const Home = ({navigation}) => {
  // const {email, password} = useRoute()?.params;
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  //Function for API Base
  const makeAPIRequest = ({method, url, data, headers, params, baseURL}) =>
    new Promise(async (resolve, reject) => {
      const options = {method, baseURL, url, data, headers, params};
      axios(options)
        .then(response => {
          if (response.status === 200) {
            resolve(response);
          }
        })
        .catch(error => {
          reject(error);
        });
    });

  const getData = async () => {
    makeAPIRequest({
      method: 'get',
      baseURL: 'https://dummyjson.com/users',
    }).then(res => {
      // console.log('userData ....', res?.data?.users);
      setLoading(false);
      setUserData(res?.data?.users);
    });
  };
  return (
    // <View style={styles.container}>
    //   <View style={styles.headerCon}>
    //     <View style={styles.headerFirst}>
    //       <Image
    //         source={Images?.drawer}
    //         style={{height: Platform.OS == 'web' ? 50 : 10, width: 20}}
    //       />
    //       <Image
    //         source={Images?.youtube}
    //         style={{
    //           height: 20,
    //           width: 20,
    //           marginLeft: Platform.OS == 'web' ? '30%' : 'auto',
    //         }}
    //       />
    //     </View>
    //     <View style={styles.searchCon}>
    //       <TextInput
    //         placeholder="Search"
    //         style={{height: 40, width: 'auto', marginLeft: '1.5%'}}
    //         placeholderTextColor={'black'}
    //       />
    //       {/* <Image source={Images?.drawer} style={{height: 20, width: 20}} /> */}
    //     </View>
    //     <View style={{flexDirection: 'row'}}>
    //       <Image
    //         source={Images?.youtube}
    //         style={{height: 20, width: 20, marginLeft: '1%'}}
    //       />
    //     </View>
    //   </View>
    // </View>
    <View style={styles.container}>
      {/* <View style={styles.mainCon}>
        <Text style={styles.test1}>
          Your Email is <Text style={styles.textMain}>{email} </Text>
        </Text>
        <Text style={styles.test1}>
          Your Password is
          <Text style={styles.textMain}>{password} </Text>
        </Text>
      </View> */}
      {loading ? (
        <Text style={styles.loadingStyle}>Loading ...</Text>
      ) : (
        <View>
          <Text style={styles.emailsStyle}>{`---> List of Emails  <---`}</Text>
          <FlatList
            data={userData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.responseCon}>
                  <Text
                    style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
                    {item?.email}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   height: '100%',
  //   backgroundColor: 'white',
  // },
  // headerCon: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   width: '100%',
  //   marginTop: '1%',
  //   justifyContent: 'space-between',
  // },
  // searchCon: {
  //   flexDirection: 'row',
  //   borderWidth: 1,
  //   borderRadius: 100,
  //   width: '40%',
  //   alignItems: 'center',
  //   // justifyContent: 'flex-end',
  // },
  // headerFirst: {
  //   marginLeft: '1%',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    height: '100%',
    backgroundColor: 'black',
  },
  mainCon: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: {width: 6, height: 5},
    shadowColor: '#475252',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  test1: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
  },
  test2: {color: 'black', fontSize: 20, fontWeight: '500'},
  textCon: {flexDirection: 'row', alignItems: 'center'},
  textMain: {color: 'orange', fontSize: 18, fontWeight: '700'},
  loadingStyle: {color: 'white', fontSize: 18, fontWeight: '500'},
  responseCon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  emailsStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    margin: 20,
    fontWeight: '600',
  },
});

export default Home;

// import axios from 'axios';

// export const makeAPIRequest = ({method, url, data, headers, params, baseURL}) =>
//   new Promise(async (resolve, reject) => {
//     const options = {method, baseURL, url, data, headers, params};
//     axios(options)
//       .then(response => {
//         if (response.status === 200) {
//           resolve(response);
//         }
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });

//   const getData = async () => {
//     makeAPIRequest({
//       method: 'get',
//       baseURL: 'https://dummyjson.com/users',
//     }).then(res => {
//       // console.log('userData ....', res?.data?.users);
//       setUserData(res?.data?.users);
//       setFilteredData(res?.data?.users);
//       setModalFilteredData(res?.data?.users);
//       log;
//     });
//   };
