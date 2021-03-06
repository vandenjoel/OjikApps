import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { NowPage } from '../pages/now/now';
import { PopularPage } from '../pages/popular/popular';
import { MapPage } from '../pages/map/map';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Top Movies', component: HomePage },
      { title: 'Upcoming Movies', component: UpcomingPage },
      { title: 'Now Playing', component: NowPage },
      { title: 'Popular Movies', component: PopularPage },
      { title: 'List', component: ListPage, icon: 'list-box' },
    ];

    this.added = [
      { title: 'Map', component: MapPage, icon: 'map' },
      { title: 'About', component: AboutPage, icon: 'about' },
     // { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
