import { StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/vars'

const sortItem = StyleSheet.create({
  item: {
    transform: [
      { rotate: '-90deg' }
    ],
    position: 'relative'
  },
  itemCurrent: {
    height: 60,
    width: 2
  },
  text: {
    fontFamily: 'lexendDeca',
    fontSize: 18,
    lineHeight: 26,
    color: colors.secondary
  },
  textCurrent: {
    color: colors.black
  },
  underline: {
    position: 'absolute',
    width: 60,
    height: 2,
    backgroundColor: colors.primary,
    top: '100%',
    marginTop: 9,
    left: '50%',
    transform: [
      { translateX: '-50%' }
    ]
  }
});

export { sortItem }