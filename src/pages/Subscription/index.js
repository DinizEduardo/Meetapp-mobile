import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Title,
  Meetup,
  DateMeetup,
  DateText,
  LocationText,
  OrganizerText,
  Location,
  Organizer,
  SubscriptionButton,
  Image,
  Info,
} from './styles';
import Header from '~/components/Header';
import Background from '~/components/Background';

import ImageMeetup from '~/assets/Teste.png';

export default function Subscription() {
  return (
    <Background>
      <Container>
        <Header />
        <Meetup>
          <Image source={ImageMeetup} />
          <Info>
            <Title>Meetup de React Native</Title>
            <DateMeetup>
              <Icon name="event" size={16} color="#999" />
              <DateText>24 de Junho, às 20h</DateText>
            </DateMeetup>
            <Location>
              <Icon name="place" size={16} color="#999" />
              <LocationText>Rua guilherme gembala, 260</LocationText>
            </Location>
            <Organizer>
              <Icon name="person" size={16} color="#999" />
              <OrganizerText>Organizador: Diego Fernandes</OrganizerText>
            </Organizer>
            <SubscriptionButton>Cancelar inscrição</SubscriptionButton>
          </Info>
        </Meetup>
      </Container>
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
