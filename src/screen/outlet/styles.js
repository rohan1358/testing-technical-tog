import {StyleSheet} from 'react-native';
import {colors, fontMain, fontSizes, fontWeights} from '../../../assets';
import {adjust} from '../../utils';

export const styles = StyleSheet.create({
  iconList: {
    padding: adjust(15),
    borderWidth: 1,
    borderRadius: adjust(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.coco,
    flex: 1,
  },
  titleList: {
    marginHorizontal: adjust(10),
    borderBottomWidth: adjust(1),
    borderColor: colors.ash,
    flex: 4,
  },
  containerList: {
    marginVertical: adjust(8),
    marginHorizontal: adjust(8),
  },
  nameItem: {
    fontFamily: fontMain,
    fontSize: fontSizes['2xl'],
  },
});
