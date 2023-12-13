import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import nameof from 'ts-nameof.macro'

export default function SettingScreen() {
    return (
        <View>
            <Text>SettingScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
SettingScreen.displayName = nameof(SettingScreen)