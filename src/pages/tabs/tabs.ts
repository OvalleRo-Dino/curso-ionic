import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyFavoritesPage } from "../my-favorites/my-favorites";
import { MenuController, NavParams } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyFavoritesPage;

  user: any;

  constructor(public params: NavParams,
              private menuCtrl: MenuController) {
  }

  ngOnInit() {
    this.user = {user: this.params.data.user};
    this.menuCtrl.enable(true);
  }
}
