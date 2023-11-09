import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Gap } from '../../atoms'
import { IconDelete, IconEdit, IconMinus, IconPlus } from '../../../assets'

const CardList = ({name, orderId, orderDate }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{!name? 'Profes' : name}</Text>
      </View>
      <View>
        <Text>{!orderId ? 'ID-09' : orderId}</Text>
      </View>
      <View>
        <Text>{!orderDate ? '39-des-2023' : orderDate}</Text>
      </View>
    </View>
  )
}

export default CardList

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
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