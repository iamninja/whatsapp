import 'meteor-client-side';

import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { METEOR_PROVIDERS } from 'angular2-meteor';
import * as Check from 'meteor/check';
import * as EJSON from 'meteor/ejson';
import { TabsPage } from './pages/tabs/tabs';

Object.assign(window,
  Check,
  EJSON
);

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [METEOR_PROVIDERS]);
