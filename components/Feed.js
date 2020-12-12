
import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Avatar from "./Avatar";

const Container = styled.View`
 flex: 1;
 
`;
const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;

`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;

`;

const User = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #222121;
`;
const Time = styled.Text`
  font-size: 12px;
  color: #747477;
`;
const Post = styled.Text`
   font-size: 13px;
   color: #222121;
   line-height:16px;
   padding: 0 11px;

`;

const Foto = styled.Image`
   margin-top: 9px;
   width: 100%;
   height: 300px;

`;
const Footer = styled.View`
   padding: 0 11px;
`;

const FooterCount = styled.View`
   flex-direction: row;
   justify-content: space-between;
   padding: 9px 0;
`;

const IconCount = styled.View`
   background: #1878f3;
   height: 20px;
   width:20px;
   border-radius: center;
   justify-content: center;
   margin-right: 6px;
`;

const TextCount = styled.View`
   font-size: 11px;
   color: #424040;
  
`;

const Separator = styled.View`
   width: 100%;
   height: 1px;
   background: #f9f9f9;
`;

const FooterMenu = styled.View`
   flex-direction: row;
   justify-content: space-between;
   padding: 9px 0;
`;

const Buttom = styled.TouchableOpacity`
   flex-direction: row;
`;

const Icon = styled.View`
   margin-right: 6px;
`;

const Text = styled.Text`
   font-size: 12px;
   color: #424040;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`



const Feed = () => {
    return (
        <>
            <Container>
                <Header>
                    <Row>
                        <Avatar
                            source={require('../assets/minhafoto.jpg')}
                        />
                        <View style={{ paddingLeft: 10 }}>
                            <User>Talysson Gadêlha</User>
                            <Row>
                                <Time>18m</Time>
                                <Entypo
                                    name="dot-single"
                                    size={14}
                                    color="#747476"
                                />
                                <Entypo
                                    name="globe"
                                    size={12}
                                    color="#747476"
                                />
                            </Row>
                        </View>
                    </Row>
                    <Entypo
                        name="dots-three-horizontal"
                        size={15}
                        color="#222121"
                    />
                </Header>

                <Post>
                    Lorem ipsum dolor sit amet, consectetur adip
            </Post>
                <Foto source={require('../assets/post1.jpg')} />

                <Footer>
                    <FooterCount>
                        <Row>
                            <IconCount>
                                <AntDesign
                                    name="like1"
                                    size={12}
                                    color="#ffffff"
                                />

                             </IconCount>
                            <TextCount> 500 curtidas</TextCount>
                          </Row>
                        <TextCount>200 comentários</TextCount>
                    </FooterCount>

                  <Separator />

                  <FooterMenu>
                      <Buttom>
                          <Icon>
                              <AntDesign 
                               name="like2"
                               size={20}
                               color="#424040"
                              />
                          </Icon>
                          <Text> Curtir </Text>
                      </Buttom>

                      <Button>
                          <Icon>
                              <MaterialCommunityIcons 
                               name="content-outline"
                               size={20}
                               color="#424040"
                              />
                          </Icon>
                          <Text> Comentar </Text>
                      </Button>

                      <Button>
                          <Icon>
                              <MaterialCommunityIcons
                               name="share-outline"
                               size={20}
                               color="#424040"
                              />
                          </Icon>
                          <Text> Curtir </Text>
                      </Button>
                  </FooterMenu>
                </Footer>
              <BottomDivider/>
            </Container>
        </>

        //Outro container

    
    );
};

export default Feed;