import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardModal, CardSale, Gap, Input } from '../../components'
import { IconDrawer } from '../../assets'
import Api from '../../Api';

const height = Dimensions.get('screen').height;

const OrderInput = ({navigation}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [modalVisible, setModalVisible] = useState(false)

    const handleItemChange = (itemPrice, itemQtyChange) => {
        // setTotalPrice(prevTotalPrice => prevTotalPrice + (itemPrice * itemQtyChange));
        // setTotalItems(prevTotalItems => prevTotalItems + itemQtyChange);
        const numericPrice = Number(itemPrice);
        const numericQtyChange = Number(itemQtyChange);

        // Check if numericPrice and numericQtyChange are actual numbers
        if (!isNaN(numericPrice) && !isNaN(numericQtyChange)) {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + (numericPrice * numericQtyChange));
            setTotalItems((prevTotalItems) => prevTotalItems + numericQtyChange);
        } else {
            // Handle the case where numericPrice or numericQtyChange is not a number
            console.error('Invalid item price or quantity change: ', itemPrice, itemQtyChange);
        }
    };
      

    const onOrder = () => {
        const data = {
            totalItems: totalItems,
            totalPrice: totalPrice
        }
        console.log(data, 'cek')
    }

    // const grant_type = 'client_credentials';
    // const client_id = 'profes-api';
    // const client_secret = 'P@ssw0rd'

    // const requestToken = async () => {
    //     try {
    //         const data = {
    //             grant_type : 'client_credentials',
    //             client_id : 'profes-api',
    //             client_secret : 'P@ssw0rd',
    //         }
    //         console.log(data, 'kirim')
    //         const response = await Api.getToken(data)
    //         console.log(response.data, 'berhasil')
    //     } catch (error) {
    //         console.log(error.response.data, 'gagal')
    //     }
    // }

    // useEffect(() => {
    //     requestToken()
    // },[])


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
                <Text style={styles.text}>Sales Order Input</Text>  
            </View>
        </View>
        <View style={styles.mainBody}>
            <View style={styles.body}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.card}>
                        <Text style={styles.text2}>Sales Information</Text>
                        <Gap height={8} />
                        <Input placeholder={'Sales order number'} />
                        <Gap height={8} />
                        <Input placeholder={'Sales order Date'}  />
                        <Gap height={8} />
                        <Input placeholder={'Customer'}  />
                        <Gap height={8} />
                        <Input placeholder={'Address'}  />
                        <Gap height={8} />
                    </View>
                    <Gap height={10} />
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={styles.text2}>Detail Sales</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textBtn} >Add item</Text>
                        </TouchableOpacity>
                    </View>
                    <Gap height={12} />
                    <CardSale  
                        price={4500}
                        total={totalPrice}
                    onItemChange={handleItemChange} />
                    <CardSale 
                        price={1500}
                        total={totalPrice}
                        onItemChange={handleItemChange} />
                    <CardSale />
                    <Gap height={10} /> 
                </ScrollView>
            </View>
        </View>
        <View style={{flex: 0.2, position: 'relative'}}>
            <View style={styles.body2}>
                <Text style={styles.text2}>Order Summary</Text>
                <Gap height={12} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                    <Text style={styles.text3}>Sub Total</Text>
                    <Text style={styles.text3}>{totalPrice}</Text>
                </View>
                <Gap height={4} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                    <Text style={styles.text3}>Total Product</Text>
                    <Text style={styles.text3}>{totalItems} Product</Text>
                </View>
                <Gap height={10} />
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.btn} onPress={onOrder}>
                        <Text style={styles.textBtn} >Proces Order</Text>
                    </TouchableOpacity>
                    <Gap width={10} />
                    <TouchableOpacity style={styles.btn2}>
                        <Text style={styles.textBtn2} >Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        {
            modalVisible &&
            <CardModal 
            onItemChange={(priceChange, quantityChange) => {
                // Define what should happen when the item changes
              }}
                closeModal={() => setModalVisible(!modalVisible)}
            />
        }
    </SafeAreaView>
  )
}

export default OrderInput

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
        flex: 0.2,
        position: 'absolute',
        top: -60,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        paddingTop: 12,
        paddingBottom: 16,
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
        fontSize: 12,
        fontWeight: '500',
        color: 'black'
    },
    textBtn: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white'
    },
    textBtn2: {
        fontSize: 12,
        fontWeight: '500',
        color: 'black'
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
        borderRadius: 8
    },
    btn2 : {
        // backgroundColor: '#FFFFF',
        padding: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#40444C',
    }

})