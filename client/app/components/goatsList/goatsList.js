import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatsListComponent from './goatsList.component';
import goatsListItemComponent from './goatsListItem.component';

let goatsListModule = angular.module('goatsList', [
  uiRouter
])

.component('goatsList', goatsListComponent);

export default goatsListModule;
