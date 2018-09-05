import { createStackNavigator } from 'react-navigation';
import HomeContainer from '../mobile/components/home/home_container';
import Welcome from '../mobile/components/splash/welcome';
import Splash from '../mobile/components/splash/splash';
import DocumentTools from '../mobile/components/documents/document_tools';
import DocumentFrameContainer from '../mobile/components/documents/document_frame_container';
import AddCollaboratorsContainer from '../mobile/components/documents/add_collaborators_container';

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
    DocumentTools
  },
  { initialRouteName: 'HomeContainer' }
);
