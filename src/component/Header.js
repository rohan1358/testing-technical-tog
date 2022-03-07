import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowLeft, colors, fontSizes, fontWeights} from '../../assets';
import {adjust, getHeight} from '../utils';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, action}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: getHeight(8),
        backgroundColor: colors.coco,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: 'absolute',
          left: 0,
          marginLeft: adjust(10),
        }}>
        <ArrowLeft
          width={fontSizes['3xl']}
          height={fontSizes['3xl']}
          color={colors.yellow}
        />
      </TouchableOpacity>
      <View style={{}}>
        <Text
          style={{
            color: colors.yellow,
            fontSize: fontSizes['2xl'],
          }}>
          {title || 'Title Screen'}
        </Text>
      </View>
    </View>
  );
};

export {Header};
