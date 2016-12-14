import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the ShowDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-show-detail',
  templateUrl: 'show-detail.html'
})
export class ShowDetail {

   private user: Array<any> = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    this.user = this.navParams.data;
  }
}
