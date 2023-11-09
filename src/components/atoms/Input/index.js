import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

const width = Dimensions.get('window').width;

const Input = ({ title, keyboardType, maxLength, secureTextEntry, underlineColorAndroid, value, onChangeText, autoCapitalize, multiline, theme, placeholder }) => {
    return (
        <View>
            {/* <Text style={styles.teks}>{title}</Text> */}
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={'#ACACAC'} secureTextEntry={secureTextEntry} autoCapitalize={autoCapitalize} keyboardType={keyboardType} maxLength={maxLength} underlineColorAndroid={underlineColorAndroid} value={value} onChangeText={onChangeText} multiline={multiline} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 42,
        fontSize: 13,
        backgroundColor: 'white',
        fontWeight: '500',
        borderRadius: 6,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        paddingLeft: 14
    },
    teks: {
        color: '#000000',
        marginBottom: 4,
        fontSize : 14,
        fontWeight: '500'
    },
})


export default Input;