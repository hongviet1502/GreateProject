import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import nameof from 'ts-nameof.macro'

export default function EmptyScreen() {
    return (
        <View>
            <Text>EmptyScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
EmptyScreen.displayName = nameof(EmptyScreen)