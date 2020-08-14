import React from 'react'
import { Linking } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import {
    StoreWrapper,
    StoreBanner,
    StoreAvatar,
    StoreTitle,
    StoreDetails,
    ActionBar,
    InfoWrapper,
} from './styles'
import { ActionButton, PrimaryButton, Header } from '../../components'
import { redirectToWebsite, openWhatsApp } from '../../utils/helper'
import { toggleFavoriteStoreAsync, selectFavorites } from '../../redux/stores'

export default function StoreScreen({ navigation, route }) {
    const {
        name,
        title,
        logo,
        image,
        order_link,
        call_number,
        whatsApp_number,
        id,
    } = JSON.parse(route.params)

    // hooks
    const dispatch = useDispatch()
    const favorites = useSelector(selectFavorites)

    // handlers
    const onOrder = React.useCallback(async () => {
        redirectToWebsite(order_link)
    }, [order_link])

    const onCall = React.useCallback(async () => {
        await Linking.openURL(`tel:+${call_number}`)
    }, [call_number])

    const onWhatsApp = React.useCallback(async () => {
        openWhatsApp(whatsApp_number)
    }, [whatsApp_number])

    const toggleFavorite = React.useCallback(() => {
        dispatch(toggleFavoriteStoreAsync(JSON.parse(route.params)))
    }, [dispatch, route])

    return (
        <StoreWrapper>
            <StoreBanner source={{ uri: image }}>
                <Header
                    onBack={navigation.goBack}
                    onFavorite={toggleFavorite}
                    isFavorite={favorites.includes(id)}
                />
            </StoreBanner>
            <InfoWrapper>
                <StoreAvatar source={{ uri: logo }} />
                <StoreTitle>{name}</StoreTitle>
                <StoreDetails>{title}</StoreDetails>
                <ActionBar>
                    <ActionButton
                        logo="whatsapp"
                        title="Whatsapp"
                        onPress={onWhatsApp}
                    />
                    <ActionButton
                        logo="compass-outline"
                        title="Location"
                        onPress={() => {}}
                    />
                    <ActionButton logo="phone" title="Call" onPress={onCall} />
                </ActionBar>
                <PrimaryButton
                    title={order_link ? 'Ordern Now' : 'No link for this store'}
                    disabled={!Boolean(order_link)}
                    onPress={onOrder}
                />
            </InfoWrapper>
        </StoreWrapper>
    )
}
