import {StyleSheet} from 'react-native';
import {colors} from '../../../assets';
import {adjust} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    padding: adjust(10),
    marginVertical: adjust(8),
    marginHorizontal: adjust(16),
    borderBottomWidth: adjust(1),
    borderColor: colors.ash,
  },
  containerImageList: {
    width: adjust(100),
    height: adjust(100),
    borderWidth: 1,
    borderRadius: adjust(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageList: {
    height: '80%',
    width: '80%',
    borderRadius: adjust(30),
  },
});
