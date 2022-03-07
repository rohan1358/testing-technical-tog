import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {
  banner,
  CartIcon,
  colors,
  HistoryIcon,
  MenuIcon,
  NotificationIcon,
  ShopIcon,
  bg,
} from '../../../assets';
import {adjust, newAlert} from '../../utils';
import {ContextReact} from '../../context/reducers';
import {changeLogout} from '../../context/action';
import {useNavigation} from '@react-navigation/native';
import Base from '../../component/Base';
import {styles} from './styles';

const listMenu = [
  {
    title: 'My Outlet',
    Icon: props => <ShopIcon {...props} />,
    redirectTo: 'Outlet',
  },
  {title: 'Order', Icon: props => <CartIcon {...props} />},
  {title: 'Notification', Icon: props => <NotificationIcon {...props} />},
  {title: 'History', Icon: props => <HistoryIcon {...props} />},
];

let colorCard = {
  default: {icon: colors.coco, bg: 'transparent'},
  hover: {icon: colors.yellow, bg: colors.coco},
};

const Home = () => {
  const {dispatch} = useContext(ContextReact);

  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Image style={[styles.bgPage]} source={bg} />

      <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              // dispatch(changeLogout());
              newAlert();
            }}>
            <MenuIcon color={colors.coco} />
          </TouchableOpacity>
          <View style={styles.comboBox}>
            <View
              style={{
                flex: 1,
              }}>
              <Text style={styles.titleWelcome}>Welcome Partner :)</Text>
            </View>
            <View style={{flex: 1}}>
              <Image style={styles.banner} source={banner} />
            </View>
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <Pressable
                style={{
                  marginHorizontal: '3%',
                  minWidth: '44%',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                  }}
                />
              </Pressable>

              <Pressable style={styles.buttonCatalog}>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Catalog');
                    }}>
                    <Text style={styles.titleCatalog}>CATALOG</Text>
                  </TouchableOpacity>
                </View>
              </Pressable>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {listMenu.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <ChildListMenu Data={data} />
                    </React.Fragment>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

function ChildListMenu({Data}) {
  const [stateColor, setStateColor] = useState(colorCard.default);

  const navigation = useNavigation();

  return (
    <>
      <Pressable
        onPressIn={() => setStateColor(colorCard.hover)}
        onPress={() =>
          Data.redirectTo ? navigation.navigate(Data.redirectTo) : newAlert()
        }
        onPressOut={() => setStateColor(colorCard.default)}
        style={[
          styles.button,
          {
            backgroundColor: stateColor.bg,
          },
        ]}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text>
            {
              <Data.Icon
                height={adjust(70)}
                width={adjust(70)}
                fill={stateColor.icon}
              />
            }
          </Text>

          <Text
            style={{
              fontSize: adjust(12),
              fontWeight: '500',
              color: 'coral',
            }}>
            {Data && (
              <>
                <Text
                  style={[
                    styles.titleCard,
                    {
                      color: stateColor.icon,
                    },
                  ]}>
                  {Data.title}
                </Text>
              </>
            )}
          </Text>
        </View>
      </Pressable>
    </>
  );
}

export default Home;
