import React from 'react';

import styled from 'styled-components/native'
const user3 = require("../assets/minhafoto.jpg");
import { 
    Ionicons,
    MaterialIcons, 
    MaterialCommunityIcons 
    }  from '@expo/vector-icons'
    import Avatar from './Avatar';

    const Container = styled.View`

  width: 100%;
  height: 92px;
`
const Row = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  align-items: center;
`
const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  padding: 0 8px;
`

const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #f0f0f0;
`

const Menu = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: center;
height: 42px;
`

const MenuText = styled.Text`
   padding-left: 11px;
   font-weight: 500;
   font-size: 12px;
`

const Separator = styled.View`
width: 1px;
height: 26px;
background: #f0f0f0;
`
const ToolBar = () => {
    return (
        <Container>
            <Row>
               <Avatar source ={user3} />
               <Input place placeholder="o que você está pensando?" />
            </Row>
                <Divider />
            <Row>
                <Menu>
                    <Ionicons name="ios-videocam" size={22} color="#f44"  />
                    <MenuText>Ao vivo</MenuText>
                </Menu>
                <Separator />

                <Menu>
                    <MaterialIcons 
                        name="photo-size-select-actual"
                        size={20}
                        color="#4caf50"
                    />
                    <MenuText>Foto</MenuText>
                    </Menu>

                    <Menu>
                        <MaterialCommunityIcons 
                           name="video-plus"
                           size={22}
                           color="#e141fc"
                        />
                        <MenuText>Sala</MenuText>
                    </Menu>
                    <Separator/>

               </Row>
          </Container>
    );
};

export default ToolBar;