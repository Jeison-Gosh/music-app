import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Introductión",
      img: "assets/images/intro1.png",
      description: "Es una aplicación para esuchcar música y albunes de artistas famosos, así como mixs de exitos mundiales."
    },
    {
      title: "",
      img: "assets/images/intro2.png",
      description: "También puedes escuchar cover de musica clasica o karaoke, en Music App no hay limites para los gustos."
    },
    {
      title: "Artistas",
      img: "assets/images/intro3.jpg",
      description: "Tienes el privilegio de escuchar a los mejores Artistas a nivel Mundial, junto con sus mas grandes Exitos indistintamente de su epoca."
    },
    {
      title: "Electronica",
      img: "assets/images/intro4.png",
      description: "En la calle o en la Casa, es tu desición llevate la experiencia musical a otro nivel, disfruta todo el contenido de nuestros mixs y la música electrónica de los más grandes DJ. "
    }
  ]

  constructor(
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  close() {
    console.log("estoy tratando de cerrar");
    this.storage.set("introShow", true);
    this.navCtrl.navigateRoot("/menu/home");
  }

}
