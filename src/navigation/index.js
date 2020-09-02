import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerNav from './DrawerNav'
import { AddPopupScreen } from '../screens'
import routes from './routes'
import { useMount } from '../hooks/useMount'

const RootStack = createStackNavigator()

export default function RootNavigation(props) {
    const isLoading = useMount()

    if (!isLoading) {
        return null
    }

    return (
        <NavigationContainer>
            <RootStack.Navigator
                mode="modal"
                headerMode="none"
                screenOptions={{
                    cardOverlayEnabled: false,
                    cardStyle: {
                        backgroundColor: 'transparent',
                    },
                }}>
                <RootStack.Screen
                    name={routes.MAIN}
                    component={DrawerNav}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name={routes.ADD_POPUP}
                    component={AddPopupScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
