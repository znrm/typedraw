import { createStackNavigator } from 'react-navigation';
import HomeContainer from './components/home/home_container';
import Welcome from './components/splash/welcome';
import Splash from './components/splash/splash';
import DocumentFrameContainer from './components/documents/document_frame_container';
import AddCollaboratorsContainer from './components/documents/add_collaborators_container';

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
    DocumentFrameContainer,
    AddCollaboratorsContainer
  },
  { initialRouteName: 'HomeContainer' }
);
