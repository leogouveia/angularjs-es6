import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';

export default angular.module('app.home', [uirouter, randomNames])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;