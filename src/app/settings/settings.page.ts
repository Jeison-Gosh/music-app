import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@ionic/storage';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  userImage = "../../assets/images/profile.jpeg";
  photo: any;
  userInfo: any;

  constructor(
    private UserService: UserService,
    private storage: Storage
  ) { }

  ionViewDidEnter() {
    this.UserService.getUser().then(userData => {
      this.userInfo = userData;
      this.photo = userData.image;
      console.log(userData.image);
    });
  }


  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      })
      this.photo = image.dataUrl;
      console.log(image.dataUrl)
      this.UserService.updateUser({ "image": this.photo }).then((res: any) => {
        console.log(res)
      })
    }
    catch (error) {
      console.log("No se selecciono foto")
    }

  }
}
