import {View, Text, FlatList, Image, StatusBar} from 'react-native';
import React from 'react';
import {Header} from '../../component';
import {colors, dataOutlet, ShopIcon} from '../../../assets';
import {adjust, getHeight} from '../../utils';
import {styles} from './styles';
import Base from '../../component/Base';

const renderItem = ({item}) => {
  return (
    <Base style={styles.containerList}>
      <Base
        style={{
          flexDirection: 'row',
        }}>
        <Base style={styles.iconList}>
          <ShopIcon fill={colors.yellow} />
        </Base>
        <Base style={styles.titleList}>
          <Text style={styles.nameItem}>{item.name}</Text>
          <Text
            style={{
              fontStyle: 'italic',
            }}>
            {item.address}
          </Text>
        </Base>
      </Base>
    </Base>
  );
};

const Outlet = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.coco} />
      <Header title={'Francise Outlet'} />

      <Base
        style={{
          paddingHorizontal: adjust(5),
          flex: 1,
          height: getHeight(92),
        }}>
        <FlatList
          data={dataOutlet}
          key={item => item.id}
          renderItem={renderItem}
        />
      </Base>
    </>
  );
};

export default Outlet;
