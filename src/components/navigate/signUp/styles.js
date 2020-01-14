import { StyleSheet } from 'react-native'
import { colors } from '../../../assets/styles/vars'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    position: 'relative',
    backgroundColor: colors.substrate,
    minHeight: '100vh'
  },
  title: {
    fontFamily: 'lexendDeca',
    fontSize: 26,
    lineHeight: 36,
    textAlign: 'center',
    marginBottom: 135,
    marginTop: 22
  },
  btn: {
    paddingVertical: 14,
    backgroundColor: '#00D180',
    borderRadius: 12,
    marginBottom: 40
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'lexendDeca',
    textAlign: 'center',
    color: 'white'
  },
  inputRow: {
    marginBottom: 22,
    display: 'flex',
    flexDirection: 'row'
  },
  filstInput1: {
    flex: 1,
    marginRight: 7.5
  },
  filstInput2: {
    flex: 1,
    marginLeft: 7.5
  },
  fullInput: {
    flexBasis: '100%'
  },
  lastInputRow: {
    marginBottom: 20
  },
  leafBig: {
    position: 'absolute',
    left: 0,
    top: 51,
    height: 117,
    width: 108
  },
  otherMethodsCaption: {
    textAlign: 'center',
    fontFamily: 'lexendDeca',
    marginBottom: 14,
    color: 'rgba(97, 119, 152, 0.5)'
  },
  otherMethodsBtnSet: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 98
  },
  otherMethodsBtn: {
    width: 150,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  otherMethodsBtnIcon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  otherMethodsBtntext: {
    fontFamily: 'lexendDeca',
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(133, 136, 140)'
  },
  leafSmall: {
    position: 'absolute',
    top: 858,
    right: 0,
    height: 76,
    width: 70
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  footerText: {
    fontFamily: 'lexendDeca',
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(168, 183, 203)'
  },
  footerLink: {
    fontFamily: 'lexendDeca',
    fontSize: 14,
    lineHeight: 18,
    color: 'rgb(0, 209, 128)',
    textDecorationLine: 'underline'
  }
});

export { styles }