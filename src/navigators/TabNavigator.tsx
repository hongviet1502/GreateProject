import { Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import nameof from 'ts-nameof.macro';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SearchScreen from '../screens/SearchSceen/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import EmptyScreen from '../screens/EmptyScreen/EmptyScreen';
const { Navigator, Screen } = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Navigator
            initialRouteName={HomeScreen.displayName!}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: 35,
                    marginHorizontal: 20,
                    height: 60,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                }
            }}
        >
            {[HomeScreen, SearchScreen, EmptyScreen, NotificationScreen, SettingScreen].map(ScreenComponent => (
                <Screen
                    key={ScreenComponent.displayName!}
                    name={ScreenComponent.displayName!}
                    component={ScreenComponent}
                    initialParams={{}}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            let iconName = HomeScreen.displayName;
                            switch (ScreenComponent.displayName!) {
                                case HomeScreen.displayName:
                                    iconName = 'home';
                                    break;
                                case SearchScreen.displayName:
                                    iconName = 'search';
                                    break;
                                case EmptyScreen.displayName:
                                    iconName = 'plus';
                                    break;
                                case NotificationScreen.displayName:
                                    iconName = 'bell';
                                    break;
                                case SettingScreen.displayName:
                                    iconName = 'user-alt';
                                    break;
                                default:
                                    break;
                            }
                            return (
                                <View>
                                    <FontAwesome5 name={iconName} size={20} color={focused ? 'red' : 'grey'} />
                                </View>
                            )
                        }

                    }}
                />
            ))}
        </Navigator>
    )
}

TabNavigator.displayName = nameof(TabNavigator);
