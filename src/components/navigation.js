import { createStackNavigator } from 'react-navigation';
import HomeContainer from './home/home_container';
import Welcome from './splash/welcome';
import Splash from './splash/splash';
import FrameContainer from './documents/frame_container';
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
    FrameContainer,
    CollaboratorsContainer,
    ToolBarContainer
  },
  { initialRouteName: 'HomeContainer' }
);
