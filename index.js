/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {name as appName} from './app.json';
import App from './src/0_app';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
