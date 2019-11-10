import { Component } from '@angular/core';
/*Importamos la camara y las opciones*/
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
/*Importamos PhotoService asociado multiples fotos (array) */
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

/*Next, define the “currentImage” (eso lo habíamos indicado en tab2.page.html) 
variable and inject the Camera into this class via the constructor:
Y ESCRIBIMOS TODO EL MÉTODO DE TAKEPICTURE */
/*MOVEMOS POSTERIORMENTE LOS MÉTODOS */
export class Tab2Page {
  currentImage: any;
  constructor(public photoService: PhotoService) { }

}
