import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import nameof from 'ts-nameof.macro'

export default function NotificationScreen() {
    return (
        <View>
            <Text>NotificationScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
NotificationScreen.displayName = nameof(NotificationScreen)