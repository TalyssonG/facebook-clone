import React from 'react'
import { ScrollView } from 'react-native'

import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Avatar from './Avatar'

const Container = styled.View`
    width: 100%;
    height: 58px;
    flex-direction: row;
    align-items: center;
`

const Room = styled.TouchableOpacity`
    width: 135px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
    border-width: 1px;
    border-color: #82b1ff;
    padding: 0 15px;
    margin-right: 12px;
`

const Text = styled.Text`
    color: #1777f2;
    font-size: 14px;
    padding-left: 6px;
`

const User = styled.View`
    margin-right: 13px;
`

const BottonDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`

const Users = () => {
    return (
        <>
        <Container>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={{paddingLeft:11}}
            >
                <Room>
                    <MaterialCommunityIcons 
                        name="video-plus"
                        size={26}
                        color="#e141fc"
                    />
                    <Text>Create Room</Text>
                </Room>
                <User>
                    <Avatar source={require('../assets/user1.jpg')}
                    online={true}
                    />
                </User>   
                <User>
                    <Avatar source={require('../assets/user2.jpg')}
                    online={true}
                    />
                </User>   
                <User>
                    <Avatar source={require('../assets/user4.jpg')}
                    online={true}
                    />
                </User>  
                <User>
                    <Avatar source={require('../assets/user5.jpg')}
                    online={false}
                    />
                </User> 
                <User>
                    <Avatar source={require('../assets/user5.jpg')}
                    online={false}
                    />
                </User> 
                <User>
                    <Avatar source={require('../assets/user5.jpg')}
                    online={false}
                    />
                </User> 
                <User>
                    <Avatar source={require('../assets/user5.jpg')}
                    online={false}
                    />
                </User> 
            </ScrollView>
        </Container>

        <BottonDivider/>
        </>


    )

}

export default Users
