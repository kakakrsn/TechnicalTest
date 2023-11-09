import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gap } from '../../atoms'
import { IconDelete, IconEdit, IconMinus, IconPlus } from '../../../assets'

const CardSale = ({barang, price, onItemChange }) => {
  const [qty, setQty] = useState(0)
  const [total, setTotal] = useState(0);


  const incrementQty = () => {
    setQty((prevQty) => {
      const newQty = prevQty + 1;
      const priceIncrease = price; // The increase in total price is just the price of one item
      setTotal((prevTotal) => prevTotal + priceIncrease);
      onItemChange(price, 1); // Pass the item's price and a quantity change of 1
      return newQty;
    });
  };
  
  
  const decrementQty = () => {
    setQty((prevQty) => {
      if (prevQty > 0) {
        const newQty = prevQty - 1;
        const priceChange = -price; // This is the negative value of the item's price
        setTotal((prevTotal) => prevTotal + priceChange);
        onItemChange(price, -1); // Pass the item's price and -1 to indicate decrement
        return newQty;
      }
      return prevQty;
    });
  };
  

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{!barang? 'Barang 1' : barang}</Text>
        <Text style={styles.text2}>{!price ? '2.000.000' : price}</Text>
      </View> 
      <Gap width={4} />
      <View style={{ alignItems: 'center'}}>
        <Text style={styles.text}>QTY</Text>
        <Gap height={4} />
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#F4F4F4', borderRadius: 12, justifyContent: 'center'}}>
          <TouchableOpacity onPress={decrementQty}>
            <IconMinus width={14} height={14} />
          </TouchableOpacity>
          <Gap width={8} />
          <Text style={{color: 'black'}}>{qty}</Text>
          <Gap width={8} />
          <TouchableOpacity onPress={incrementQty}>
            <IconPlus />
          </TouchableOpacity>
        </View>
        {/* <Text>CardSale</Text> */}
      </View> 
      <Gap width={4} />
      <View style={{ alignItems: 'center'}}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text2}>{total}</Text>
      </View> 
      <Gap width={4} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <IconEdit width={20} height={20} />
        </TouchableOpacity>
        <Gap width={8} />
        <TouchableOpacity>
          <IconDelete width={20} height={20} />
        </TouchableOpacity>
      </View> 
    </View>
  )
}

export default CardSale

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginBottom: 8
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black'
  },
  text2: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black'
  },
  text3: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black'
  },
})