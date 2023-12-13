import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import nameof from 'ts-nameof.macro';
import Entypo from 'react-native-vector-icons/Entypo';
export default function HomeScreen() {
    return (
        <View>
            <View>
                <Entypo name='home' size={20} color='#000' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
HomeScreen.displayName = nameof(HomeScreen);
