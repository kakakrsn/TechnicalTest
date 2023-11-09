import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap, Input } from '../../atoms'
import { IconMinus, IconPlus } from '../../../assets'


const CardModal = ({modalVisible, action, closeModal, description, onItemChange}) => {
    const [qty, setQty] = useState(0)
    const [total, setTotal] = useState(0);
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')

    const incrementQty = () => {
        setQty(prevQty => {
            const newQty = prevQty + 1;
            setTotal(newQty * price);
            if (onItemChange) {
                onItemChange(price, 1); // Call onItemChange only if it is defined
            }
            return newQty;
            });
        };
    const decrementQty = () => {
        setQty(prevQty => {
            if (prevQty > 0) {
            const newQty = prevQty - 1;
            setTotal(newQty * price);
            if (onItemChange) {
                onItemChange(price, -1); // Call onItemChange only if it is defined
            }
            return newQty;
            }
            return prevQty;
        });
    };
      

    // const incrementQty = () => {
    //     setQty(prevQty => prevQty + 1);
    //     setTotal(qty * price);
    //     onItemChange(price, 1); // Assuming `price` is the price of one unit
    //   };
    
    //   const decrementQty = () => {
    //     setQty(prevQty => {
    //       if (prevQty > 0) {
    //         setTotal(qty * price);
    //         onItemChange(price, -1); // Assuming `price` is the price of one unit
    //         return prevQty - 1;
    //       }
    //       return prevQty;
    //     });
    //   };

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.mainModal}>
                    <View style={styles.subModal}>
                        <View>
                            <Text style={styles.title}>New Item</Text>
                            <Gap height={10} />
                            <Text style={styles.description}>{!description ? 'Description' : description}</Text>
                        </View>
                        <Gap height={10} />
                        <View>
                            <Text>Item Name</Text>
                            <Gap height={4} />
                            <Input />
                            <Gap height={8} />
                            <Text>Item Price</Text>
                            <Gap height={4} />
                            <Input value={price} onChangeText={(value) => setPrice(Number(value))} keyboardType="numeric" />
                        </View>
                        <Gap height={10} />
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>QTY</Text>
                            <Gap width={24} />
                            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#F4F4F4', borderRadius: 12, justifyContent: 'center', paddingHorizontal: 4}}>
                                <TouchableOpacity onPress={decrementQty}>
                                    <IconMinus width={14} height={14} />
                                </TouchableOpacity>
                                <Gap width={8} />
                                <Text>{qty}</Text>
                                <Gap width={8} />
                                <TouchableOpacity onPress={incrementQty}>
                                    <IconPlus />
                                </TouchableOpacity>
                                </View>
                        </View>
                        <Gap height={10} />
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text>Total</Text>
                            <Text>{total.toFixed(2)}</Text>
                        </View>
                        <Gap height={20} />
                        <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity style={styles.btn} onPress={action}>
                                <Text style={styles.textBtn} >Save</Text>
                            </TouchableOpacity>
                            <Gap width={10} />
                            <TouchableOpacity style={styles.btn2} onPress={closeModal}>
                                <Text style={styles.textBtn2} >Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <Gap height={40}/>
                        <View style={styles.button}>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    mainModal: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: "center",
        flex: 1,
        padding: 24
    },
    subModal: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 24,
    },
    title: {
        // fontFamily: 'BeVietnamPro-Bold',
        // color: colors.biru1,
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    description: {
        // fontFamily: 'BeVietnamPro-Regular',
        color: '#f4f4f4',
        fontSize: 13,
        textAlign: 'center'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
    btn : {
        width: 85,
        backgroundColor: '#709541',
        padding: 6,
        borderRadius: 8,
        alignItems: 'center'
    },
    btn2 : {
        width: 85,
        padding: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#40444C',
        alignItems: 'center'
    }
})

export default CardModal