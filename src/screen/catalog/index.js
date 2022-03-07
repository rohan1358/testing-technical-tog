import {Text, FlatList, Image, StatusBar} from 'react-native';
import React from 'react';
import {Header} from '../../component';
import {colors, dataCatalog, fontMain, fontSizes} from '../../../assets';
import {adjust, getHeight} from '../../utils';
import Base from '../../component/Base';
import {styles} from './styles';

const renderItem = ({item}) => {
  return (
    <Base style={styles.container}>
      <Base
        style={{
          flexDirection: 'row',
        }}>
        <Base style={styles.containerImageList}>
          <Image
            style={styles.imageList}
            source={{
              uri: item.image,
            }}
          />
        </Base>
        <Base
          style={{
            marginHorizontal: adjust(10),
          }}>
          <Text
            style={{
              fontFamily: fontMain,
              fontSize: adjust(fontSizes['2xl']),
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontStyle: 'italic',
            }}>
            {item.price}/kg
          </Text>
        </Base>
      </Base>
    </Base>
  );
};

const Catalog = () => {
  return (
    <Base>
      <StatusBar backgroundColor={colors.coco} />
      <Header title={'Catalog'} color={colors.yellow} />
      <Base
        style={{
          height: getHeight(92),
        }}>
        <FlatList
          data={dataCatalog}
          key={item => item.id}
          renderItem={renderItem}
        />
      </Base>
    </Base>
  );
};

export default Catalog;
