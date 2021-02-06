import {StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  buttonCommon: {
    backgroundColor: 'rgb(172,0,26)',
    width: '100%',
    textAlign: 'center',
    padding: 10,
    borderRadius: 30,
  },
  ltxt: {
    marginTop: 20,
    color: 'rgb(172,0,26)',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonTextWhite: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonTextBlack: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ButtonSmall: {
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: -4,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    textAlign: 'center',
  },
  TestBorder: {
    borderWidth: 1,
    borderColor: '#000',
  },
  TitleBar: {
    backgroundColor: '#ccc',
    padding: 10,
  },
  TitleBarText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  TableCell: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 1,
    padding: 5,
  },
  TableHeaderCell: {
    backgroundColor: '#ccc',
  },
  TableTextCell: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  TableHeaderTextCell: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  BoxContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 10,
  },
  InputBox: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  Label: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Show: {
    display: 'flex',
  },
  Hide: {
    display: 'none',
  },
  FullWidth: {
    width: '100%',
  },
  p1: {
    padding: 3,
  },
  p2: {
    padding: 6,
  },
  p3: {
    padding: 9,
  },
  singleLine: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomLtxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  blacktxt: {
    color: '#000',
  },
  txtRed: {
    color: 'rgb(172,0,26)',
    paddingLeft: 10,
    fontSize: 18,
  },
  bgRed: {
    backgroundColor: 'rgb(172,0,26)',
  },
  menuItem: {
    fontSize: 20,
    textAlign: 'left',
    color: 'rgb(172,0,26)',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: 'rgb(172,0,26)',
  },
  logo: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Card: {
    backgroundColor: '#fff',
    borderColor: 'rgb(172,0,26)',

    width: '90%',
    height: 250,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    margin: 10,
  },
  homeCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'rgb(172,0,26)',

    width: '90%',
    minHeight: 200,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    margin: 15,
  },
  homeTxt1: {
    color: 'rgb(172,0,26)',
    fontSize: 18,
  },
  homeTxt2: {
    color: 'black',
    fontSize: 16,
  },
  txtBlack: {
    color: 'black',
    paddingLeft: 10,
    fontSize: 18,
  },
  donorCard: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: 'rgb(172,0,26)',

    width: '90%',
    height: 180,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    margin: 10,
  },
});
