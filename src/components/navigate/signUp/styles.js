import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    position: 'relative',
    backgroundColor: '#F0F7FF',
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
    marginBottom: 12
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'lexendDeca',
    textAlign: 'center',
    color: 'white'
  },
  filstInput: {
    marginBottom: 22
  },
  filstInputFlex: {
    display: 'flex',
    flexDirection: 'row'
  },
  filstInput1: {
    flexBasis: '50%',
    flexGrow: 1,
    flexShrink: 1,
    marginRight: 15
  },
  filstInput2: {
    flexBasis: '50%',
    flexGrow: 1,
    flexShrink: 1
  },
  secondInput: {
    marginBottom: 40
  },
  btnCaption: {
    textAlign: 'right',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'lexendDeca',
    marginBottom: 40
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
    top: 628,
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