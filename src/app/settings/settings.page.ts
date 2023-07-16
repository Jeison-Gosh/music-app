import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userImage = "../../assets/images/perfil.jpeg";
  photo: any;
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getUser(1).then(userData => {

    })
  }

  async takePhoto() {
    const image = await Camera.getPhoto(
      {
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      }
    );
    this.photo = image.dataUrl;
    console.log(image);
  }
}
