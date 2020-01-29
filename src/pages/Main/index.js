import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';


import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

  
export default function Main(){
  return(
     
    <Container >
      <Header/>
      <Content>
        <Card>
         
          <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />

          </CardHeader>
                
          <CardContent>
                <Title>Saldo disponível</Title>
                <Description>$ 175,450.50</Description>
          </CardContent>
          
          <CardFooter>
              <Annotation>
                Transferência de $ 5,000 Recebida de BRICKS hoje às 06:00h
              </Annotation>
          
          </CardFooter>
          
        </Card>
      </Content>
        <Tabs />
    </Container>
  );

}
