import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Gatito",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
      title: "Pez",
      img: "assets/images/pez.jpeg",
      icon: "barbell-outline",
      description: "Hola soy la explicacion del slide, Hola soy la explicacion del slide"
    },
    {
      title: "Huron",
      img: "https://images.hola.com/imagenes/mascotas/20220929218065/hurones-sintomas-enfermedad-dn/1-144-730/sintomas-enfermedad-hurones-m.jpg?tx=w_680",
      icon: "beer-outline",
      description: "Hola soy la explicacion del slide, Hola soy la explicacion del slide"
    },
    {
      title: "Perrito",
      img: "https://www.informador.mx/__export/1595406095362/sites/elinformador/img/2020/07/22/perrito_crop1595406075803.jpg_1902800913.jpg",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    }, 
    {
      title: "Pajaro",
      img: "https://demascotas.info/wp-content/uploads/2019/03/Cacatua_alba_-upper_body-8a.jpg",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    }
  ]
  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish() {
    this.storage.set("introShow", true);
    this.router.navigateByUrl("/home");
  }

  

}
