import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Diagnostic } from '@ionic-native/diagnostic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private diagnostic: Diagnostic) {
  }
  
  getPermission() {
    this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.CAMERA).then((status) => {
      console.log(`AuthorizationStatus`);
      console.log(status);
      if (status != this.diagnostic.permissionStatus.GRANTED) {
        this.diagnostic.requestRuntimePermission(this.diagnostic.permission.CAMERA).then((data) => {
          console.log(`getCameraAuthorizationStatus`);
          console.log(data);
        })
      } else {
        console.log("We have the permission");
      }
    }, (statusError) => {
      console.log(`statusError`);
      console.log(statusError);
    });
  }

}
