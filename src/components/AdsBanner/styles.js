import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Colors } from '../../styles/colors'

export const TouchableBanner = styled.TouchableOpacity`
    border-radius: 16px
    overflow: hidden
    width: 100%
    height: 150px
    
    marginVertical: 15px
`

export const BannerImage = styled.Image`
    width: 100%
    height: 100%
    border-radius: 16px
`