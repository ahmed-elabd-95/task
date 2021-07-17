import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-around',
    width: 100
  },
  headerLeft: {
    paddingHorizontal: 5,
  },
  mainView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  searchIcon: {
    width: 18,
    height: 17.05,
  },
  mainSearch: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    alignSelf: 'center',
    paddingHorizontal: '5%',
  },
  searchView: {
    flexDirection: 'row',
    width: '90%',
    height: 52,
    margin: 6,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  homeTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    margin: 17,
    alignItems: 'center',
  },
  categories: {
    marginTop: 20,
  },
  categoriesTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    color: '#434343',
  },
  headerLink: {
    fontSize: 14,
    color: '#ffccb0',
    marginTop: 5,
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 100,
    height: 130,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 35,
    elevation: 5,
  },
  featured: {
    marginTop: 20,
  },
  featuredTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  featuredheader: {
    fontSize: 22,
    color: '#434343',
  },
  featuredHeaderLink: {
    fontSize: 14,
    color: '#ffccb0',
    marginTop: 5,
  },
  featuedButton: {
    width: 350,
    height: 120, 
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 35,
    elevation: 5,
  },
  categorybackground: {
    width: 350,
    height: 120, 
  },
  iamgesCategort:{
    height: 50, 
    width: 50, 
    borderRadius: 50, 
    alignSelf: 'center',
    position: 'absolute',
    top: 20,
  },
  categoriesname: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 20,
    top : '80%'
  },
  categoriesproductName: {
    color: '#fff',
  },
});
