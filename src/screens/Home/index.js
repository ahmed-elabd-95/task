import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/Button';
import Axios from 'axios';


export const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'task',
      headerRight: () => (
        <View style={styles.headerRight}>
          <Image
            source={require('../../images/sort-icon.png')}
            style={styles.searchIcon}
          />
          <Image
            source={require('../../images/cart-icon.png')}
            style={styles.searchIcon}
          />
        </View>
      ),
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <Image
            source={require('../../images/menu.png')}
            style={styles.searchIcon}
          />
        </View>
      ),
    });
  }, []);
  useEffect(() =>{
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(response.data)
    } catch (error) {
      console.log('error', error);
    }
  };


  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.mainSearch}>
        <View style={styles.searchView}>
          <TouchableOpacity style={styles.searchButton}>
            <Image
              source={require('../../images/searchIcon.png')}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput placeholder="Search..." style={{paddingHorizontal: 5}} />
        </View>
      </View>
      <View style={styles.homeTabs}>
        <Button
          title="One Day"
          image={require('../../images/Exploreimage.png')}
        />
        <Button
          title="Programs"
          image={require('../../images/Exploreimage.png')}
        />
        <Button
          title="Muti-mix"
          image={require('../../images/Exploreimage.png')}
        />
      </View>
      <View style={styles.categories}>
        <View style={styles.categoriesTitle}>
          <Text style={styles.header}>Programs</Text>
          <TouchableOpacity>
            <Text style={styles.headerLink}>View all ></Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={categoryData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-around',
            marginRight: -50,
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[styles.categoryButton, item.categoryButtonbackground]}>
                <Image source={item.img} style={{height: 50, width: 50}} />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff',
                    alignSelf: 'center',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.featured}>
        <View style={styles.featuredTitle}>
          <Text style={styles.featuredheader}>Diet Companies</Text>
          <TouchableOpacity>
            <Text style={styles.featuredHeaderLink}>View all ></Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={featuredData}
          contentContainerStyle={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-evenly',
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.featuedButton}>
                <ImageBackground
                  source={require('../../images/veg.jpeg')}
                  imageStyle={{borderRadius: 20}}
                  style={styles.categorybackground}>
                  <Image source={item.img} style={styles.iamgesCategort} />
                  <View style={styles.categoriesname}>
                    <Text style={styles.categoriesproductName}>{item.productName}</Text>
                    <TouchableOpacity>
                      <Image
                        source={require('../../images/wishlist.png')}
                        style={styles.searchIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
const categoryData = [
  {
    name: 'Weight Losses',
    img: require('../../images/body-loss.png'),
    key: '1',
    categoryButtonbackground: {
      backgroundColor: '#dd6ebb',
    },
  },
  {
    name: 'Keto',
    img: require('../../images/body-loss.png'),
    key: '2',
    categoryButtonbackground: {
      backgroundColor: '#fecc78',
    },
  },
  {
    name: 'Vigetarian',
    img: require('../../images/body-loss.png'),
    key: '3',
    categoryButtonbackground: {
      backgroundColor: '#65beae',
    },
  },
  {
    name: 'Total Body',
    img: require('../../images/body-loss.png'),
    key: '3',
    categoryButtonbackground: {
      backgroundColor: '#5bc2ea',
    },
  },
];

const featuredData = [
  {
    price: '55.00$',
    productName: 'Woman T-shirt',
    img: require('../../images/Fwomanp1.png'),
    key: '1',
    des:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
  },
  {
    price: '34.00$',
    productName: 'Man T-shirt',
    img: require('../../images/Fmanp.png'),
    key: '2',
    des:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
  },
  {
    price: '24.00$',
    productName: 'Woman T-Shirt',
    img: require('../../images/Fwomanp2.png'),
    key: '3',
    des:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
  },
  {
    price: '24.00$',
    productName: 'Woman T-Shirt',
    img: require('../../images/Fwomanp2.png'),
    key: '4',
    des:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
  },
  {
    price: '24.00$',
    productName: 'Woman T-Shirt',
    img: require('../../images/Fwomanp2.png'),
    key: '5 ',
    des:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
  },
];
