import { StyleSheet } from 'react-native'
import { colors } from '../../../assets/styles/vars'

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
});

const leftSide = StyleSheet.create({
  container: {
    flexBasis: 90,
    backgroundColor: colors.substrate
  },
  menu: {
    height: 24,
    width: 24,
    marginLeft: 20,
    marginTop: 26
  }
});

const rightSide = StyleSheet.create({
  container: {},
});

const rightSideHeader = StyleSheet.create({
  main: {},
  title: {},
  circle: {},
  dor: {},
});

const rightSideContent = StyleSheet.create({
  container: {}
});

export { styles, leftSide, rightSide, rightSideHeader, rightSideContent }