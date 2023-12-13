import React, { PropsWithChildren, ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import nameof from 'ts-nameof.macro';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailScreen from '../screens/SearchSceen/SearchScreen';
import TabNavigator from './TabNavigator';

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator(
    props: PropsWithChildren<RootNavigatorProps>,
): ReactElement {
    return (
        <Navigator
            initialRouteName={TabNavigator.displayName!}
            screenOptions={{
                headerShown: false,
            }}
        >
            {[TabNavigator, HomeScreen, DetailScreen].map(ScreenComponent => (
                <Screen
                    key={ScreenComponent.displayName!}
                    name={ScreenComponent.displayName!}
                    component={ScreenComponent}
                    initialParams={{}}
                />
            ))}
        </Navigator>
    );
}
export type RootNavigatorProps = {};

RootNavigator.displayName = nameof(RootNavigator);
