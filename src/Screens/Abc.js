import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import obj from './json';

const Abc = () => {
  const [newData, setNewData] = useState([]);
  const data = obj;

  const bcde = Object.entries(data);
  console.log('bcde', bcde);

  // useEffect(() => {
  const a = Object.keys(data);

  //   const datab = [];

  //   for (let index = 0; index < a.length; index++) {
  //     datab.push({[a[index]]: data[a[index]]});
  //   }
  //   setNewData(datab);
  // }, []);
  useEffect(() => {
    const documentArray = [];
    const temp = obj;
    for (let item in temp) {
      if (Object.keys(temp?.[item]).length > 0) {
        const documentFileArray = [];
        for (let fileItem in temp?.[item]) {
          if (temp?.[item]?.[fileItem]?.files.length > 0) {
            documentFileArray.push({[fileItem]: temp?.[item]?.[fileItem]});
          }
        }
        if (documentFileArray.length > 0) {
          documentArray.push({[item]: documentFileArray});
        }
      }
    }
    console.log('documentArray', documentArray);
    // setNewData(documentArray);
  }, []);

  console.log('newData', newData);
  return (
    <View style={styles.container}>
      <FlatList
        data={newData}
        renderItem={({item}) => {
          console.log('item', Object.keys(item));
          return (
            <View>
              <Text>dbvdfb</Text>
              {/* <FlatList
                data={}
                renderItem={({item}) => {
                  return (
                    <View>
                      <Text>mdnvdj</Text>
                    </View>
                  );
                }}
              /> */}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Abc;
