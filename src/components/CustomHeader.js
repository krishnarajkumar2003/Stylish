import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MenuIcon from '../../assets/icons/menu.svg';
import Logo from '../../assets/images/logo.svg';
import Profile from '../../assets/images/profile.svg';
import BackIcon from "../../assets/icons/back.svg"
import CartIcon from "../../assets/icons/cart.svg"
import { useCallback } from 'react';


export const CustomHeader = ({
  showBackBtn = false,
  showMenu = false,
  showProfile = false,
  showCart = false,
  showLogo = false,
  title = '',
  navigation
}) => {


  const onClickBankBtn = useCallback(
    () => {
      navigation.goBack();
    }, []
  )

  const goToProfile = () => {
    navigation.navigate("Profile")
  }

  return (
    <View style={styles.header}>
      {
        showMenu &&
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <MenuIcon height={24} width={24} />
        </TouchableOpacity>
      }

      {
        showBackBtn &&
        <TouchableOpacity onPress={onClickBankBtn}>
          <BackIcon height={24} width={24} />
        </TouchableOpacity>
      }

      {
        title &&
        <Text style={styles.title}>
          {title}
        </Text>
      }

      {
        showLogo &&
        <TouchableOpacity>
          <Logo height={40} width={120} />
        </TouchableOpacity>
      }

      {
        showProfile &&
        <TouchableOpacity onPress={goToProfile}>
          <Profile height={40} width={40} />
        </TouchableOpacity>
      }

      {
        showCart &&
        <TouchableOpacity>
          <CartIcon height={24} width={24} />
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    width: '100%',
    paddingHorizontal: 12,
    paddingTop: 8,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 19,
    fontWeight: '500'
  }
});