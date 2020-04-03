import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  showSplash = true;
  public appPages = [
    {
      title: 'Inicio',
      url: '/categorias',
      icon: 'home'
    },
    {
      title: 'Categorias',
      url: '/categorias',
      icon: 'book'
    },
    {
      title: 'Trabajadores',
      url: '/folder/trabajadores',
      icon: 'hammer'
    },
    
    {
      title: 'Registrarse',
      url: '/registro',
      icon: 'pencil'
    }
  ];
  public labels = ['Aplicacion API Unipoli'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer().subscribe(() => this.showSplash = false )
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
