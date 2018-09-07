import { createStackNavigator } from 'react-navigation';
import HomeContainer from './home/home_container';
import Welcome from './splash/welcome';
import Splash from './splash/splash';
import DocumentFrame from './documents/document_frame';
import CollaboratorsContainer from './home/collaborators_container';
import ToolBarContainer from './documents/toolbar';

export const RootStack = createStackNavigator(
  {
    Welcome,
    Splash
  },
  { initialRouteName: 'Welcome' }
);

export const AppStack = createStackNavigator(
  {
    HomeContainer,
    DocumentFrame,
    CollaboratorsContainer,
    ToolBarContainer
  },
  { initialRouteName: 'HomeContainer' }
);
