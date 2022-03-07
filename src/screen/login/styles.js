import {StyleSheet} from 'react-native';
import {colors, fontMain, fontSizes, fontWeights} from '../../../assets';
import {adjust} from '../../utils';

export const styles = StyleSheet.create({
  input: {
    height: adjust(40),
    marginTop: adjust(12),
    borderWidth: 1.5,
    paddingHorizontal: adjust(20),
    borderRadius: 50,
    borderColor: colors.coco,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container2: {
    justifyContent: 'center',
    flex: 0.8,
    width: '85%',
  },
  container3: {
    alignItems: 'center',

    alignSelf: 'center',

    borderRadius: 100,
  },
  logo: {
    borderWidth: adjust(2),
    borderRadius: adjust(100),
    borderColor: colors.coco,
    margin: adjust(3),
    padding: adjust(20),
    marginVertical: adjust(30),
    shadowColor: colors.coco,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginHorizontal: adjust(10),
    marginVertical: adjust(5),
  },
  buttonLogin: {
    backgroundColor: colors.yellow,
    width: '100%',
    alignItems: 'center',
    borderRadius: adjust(50),
  },
  titleLogin: {
    color: 'white',
    fontWeight: 'bold',
    margin: adjust(10),
    fontFamily: fontMain,
  },
  imageBg: {
    width: '100%',
    height: '25%',
    position: 'absolute',
    bottom: 0,
    resizeMode: 'stretch',
  },
});
