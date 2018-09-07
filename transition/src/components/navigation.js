import { createStackNavigator } from 'react-navigation';
import HomeContainer from './home/home_container';
import Welcome from './splash/welcome';
import Splash from './splash/splash';
import DocumentTools from './documents/document_tools';
import DocumentFrameContainer from './documents/document_frame_container';
import AddCollaboratorsContainer from './documents/add_collaborators_container';
import DocumentToolsContainer from './documents/document_tools_container';

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
    AddCollaboratorsContainer,
    DocumentToolsContainer
  },
  { initialRouteName: 'HomeContainer' }
);
