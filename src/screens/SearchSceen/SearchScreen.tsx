import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import nameof from 'ts-nameof.macro';

export default function SearchScreen() {
    return (
        <View>
            <Text>DetailScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
SearchScreen.displayName = nameof(SearchScreen);
