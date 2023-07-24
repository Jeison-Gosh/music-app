import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (
        credentials.email == "jeisongomez@gmail.com" &&
        credentials.password == "1234567"
      ) {
        this.storage.set("isUserLoggedIn", true);
        this.saveUsername(credentials.email);
        accept("Login exitoso")
      } else {
        reject("Verifique sus credenciales")
      }
    })
  }

  registerUser(userData: any) {
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }

  saveUsername(username: any) {
    this.storage.set("username", username);
  }
}
