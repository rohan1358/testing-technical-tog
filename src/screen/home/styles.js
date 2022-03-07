import {StyleSheet} from 'react-native';
import {colors, fontMain, fontSizes, fontWeights} from '../../../assets';
import {adjust} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: adjust(20),
    flex: 1,
    marginTop: adjust(20),
  },
  button: {
    paddingHorizontal: adjust(8),
    paddingVertical: adjust(6),
    borderRadius: adjust(30),
    borderWidth: adjust(2),
    borderColor: colors.coco,
    alignSelf: 'flex-start',
    marginHorizontal: '3%',
    margin: adjust(10),
    minWidth: '44%',
    textAlign: 'center',
    minHeight: adjust(150),
    justifyContent: 'center',
  },
  comboBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleWelcome: {
    fontFamily: fontMain,
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights.bold,
    color: colors.coco,
  },
  banner: {
    width: adjust(200),
    height: adjust(200),
  },
  buttonCatalog: {
    paddingHorizontal: adjust(8),
    alignSelf: 'flex-start',
    marginHorizontal: '2%',
    minWidth: '44%',
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: adjust(12),
  },
  titleCatalog: {
    fontWeight: fontWeights.bold,
    fontSize: fontSizes['2xl'],
    color: colors.ash,
  },
  bgPage: {
    width: '100%',
    height: '25%',
    position: 'absolute',
    bottom: 0,
    resizeMode: 'stretch',
  },
  titleCard: {
    fontFamily: fontMain,
    fontWeight: 'bold',
    fontSize: adjust(15),
  },
});
