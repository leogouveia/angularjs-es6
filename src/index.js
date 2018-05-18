import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import home from './features/home';
import routing from './app.config.js';
import linkerComponent from './features/linker'
angular.module('app', [uirouter, home, linkerComponent])
    .config(routing);