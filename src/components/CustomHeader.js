import { StyleSheet, View } from 'react-native';
import MenuIcon from '../../assets/icons/menu.svg';
import Logo from '../../assets/images/logo.svg';
import Profile from '../../assets/images/profile.svg';

export const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.menu}>
        <MenuIcon />
      </View>

      <View style={styles.logoContainer}>
        <Logo height={40} width={120} />
      </View>

      <View style={styles.profile}>
        <Profile />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: '100%',
    paddingHorizontal: 12,
    paddingTop: 8,
    backgroundColor: '#ffffff'
  },
  menu: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});