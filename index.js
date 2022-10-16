/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Lesson_01 from './src/Lesson_01';
// import Lesson_02 from './src/Lesson_02';

AppRegistry.registerComponent(appName, () => Lesson_01);
