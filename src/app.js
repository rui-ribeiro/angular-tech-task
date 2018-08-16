const dependencies = [
    'ngRoute',
    'ngSanitize',
    'timeAgo',
    'ui.router'
];

import config from './app.routes.js';

import bootstrap from "./assets/css/bootstrap.css";
import mainStyle from "./assets/css/main.scss";

import $ from 'jquery';

window.jQuery = $;
window.$ = $;

import angular from 'angular'
import ngRoute from './assets/js/libs/angular/angular-route.js'
import ngSanitize from './assets/js/libs/angular/angular-sanitize'
import uiRouter from 'angular-ui-router'
import timeAgo from './assets/js/libs/angular/angular-timeago'

import "./components/inbox/index.html"

import {InboxController} from "./components/inbox/controller.js";
import InboxService from "./components/inbox/service.js";
import EmailService from "./components/email/service.js";
import {InboxDirective} from "./components/inbox/directive.js"
import {EmailDirective} from "./components/email/directive.js";

import InboxHTML from "./components/inbox/index.html"

angular.module("EmailApp", dependencies)
    .config(config)
    .controller('InboxController', InboxController)
    .service('InboxService', InboxService)
    .directive('inbox', InboxDirective)
    .service('EmailService', EmailService)
    .directive('email', EmailDirective)
    .filter('join', function () {
        return function (x) {
            return x.join(',')
        }
    }).run(($templateCache) => {
        $templateCache.put('inbox.html', InboxHTML)
});

