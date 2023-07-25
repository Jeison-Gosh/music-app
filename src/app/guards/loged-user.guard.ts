import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LogedUserGuard implements CanActivate {
  constructor(
    private storage: Storage,
    private navCtrl: NavController
  ) { }
  async canActivate() {
    const isUserLoggedIn = await this.storage.get("isUserLoggedIn");
    if (isUserLoggedIn) {
      this.navCtrl.navigateForward("/menu/home");
      console.log("Ya esta logeado el usuario");
      return false;
    } else {
      return true;
    }
  }

}
