import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatio" },
      { type: "pattern", message: "Debe poner un email valido" }
    ]
  }
  errorMessage: string = '';
  alertButton = ["OK"]
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage,

  ) {
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
            ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        )
      }
    )
  }

  ngOnInit() {
  }

  loginUser(credentials: any) {
    console.log(credentials);
    this.authService.loginUser(credentials).then((res: any) => {
      this.errorMessage = "";
      this.storage.set("user_id", res.id);
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateRoot("/menu/home");
    }).catch(err => {
      this.errorMessage = err;
      this.presentAlert();
      console.log(this.errorMessage);
    })
  }

  goToRegister() {
    this.navCtrl.navigateForward("/register")
  }
  forgotPass() {

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: 'Atención',
      message: '¡Credenciales Invalidas!',
      buttons: ['OK'],
    });

    this.storage.get('isUserLoggedIn').then((isUser) => {
      if (isUser === null || isUser === undefined) {
        alert.present();
      }
    }
    ).catch((error) => {
      alert.present();
      console.error(error.message);
    })

  }

}
