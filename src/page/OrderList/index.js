import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { CardList, CardSale, Gap, Input } from '../../components'
import { IconDrawer } from '../../assets'

const height = Dimensions.get('screen').height;

const OrderList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
                animated={true}
                backgroundColor={'white'}
                barStyle="dark-content"
                translucent={false}
            />
        <Gap height={24} />
        <View style={{height: 180, backgroundColor: '#709541', padding: 24 }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                <Image source={{uri: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'}} style={styles.img} />
                <Gap height={10} />
                <IconDrawer />
            </View>
            <Gap height={24} />
            <View>
                <Text style={styles.text}>Sales Order List</Text>  
            </View>
        </View>
        <View style={styles.mainBody}>
            <View style={styles.body}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.card}>
                        <Text style={styles.text2}>Search</Text>
                        <Gap height={8} />
                        <Input placeholder={'Keyword'} />
                        <Gap height={8} />
                        <Input placeholder={'order Date'}  />
                        
                    </View>
                    <Gap height={10} />
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={styles.text2}>Order List</Text>
                        <Text style={styles.text3}>Total items: 3</Text>
                    </View>
                    <Gap height={12} />
                    <View style={{width: 80,}}>
                      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('OrderInput')}>
                            <Text style={styles.textBtn} >Add</Text>
                        </TouchableOpacity>
                    </View>
                    <Gap height={10} />
                    <CardList />
                    <Gap height={10} /> 
                </ScrollView>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default OrderList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    img: {
        height: 52,
        width: 52,
        borderRadius: 108
    },
    mainBody: {
        flex: 1,
        position: 'relative'
    },
    body: {
        flex: 1,
        position: 'absolute',
        top: -45,
        width: '100%',
        height: '100%',
        backgroundColor: '#F4F4F4',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        paddingTop: 24,
        paddingBottom: 16,
        paddingHorizontal: 20
    },
    body2: {
        flex: 0.3,
        // position: 'absolute',
        // top: -45,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        // paddingTop: 38,
        // paddingBottom: 16,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 28,
        fontWeight: '600',
        color: 'white'
    },
    text2: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black'
    },
    text3: {
        fontSize: 10,
        fontWeight: '500',
        color: 'black'
    },
    textBtn: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white'
    },
    card: {
        borderWidth: 0.5,
        borderColor: '#40444C',
        borderRadius: 12,
        padding: 12
    },
    btn : {
        backgroundColor: '#709541',
        padding: 6,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: 'center'
    }

})