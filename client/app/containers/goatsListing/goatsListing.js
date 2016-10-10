import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatsListingComponent from './goatsListing.component';

let goatsListingModule = angular.module('goatsListing', [
  uiRouter
])

.component('goatsListing', goatsListingComponent);

export default goatsListingModule;
