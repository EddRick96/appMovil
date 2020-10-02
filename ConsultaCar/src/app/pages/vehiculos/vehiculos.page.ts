import { Component, OnInit } from '@angular/core';
import {Vehiculo } from '../../services/Vehiculo';
import { FirebaseService } from '../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  car: Vehiculo = {
    propietario: '',
    matricula: '',
    modelo: '',
    marca: '',
    color: '',
    puertas: 0
  }
  carId = null;

  constructor(private route: ActivatedRoute, private nav: NavController,
    private carService: FirebaseService, private loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.carId = this.route.snapshot.params['id'];
    if (this.carId) {
      this.loadCar();
    }
  }

  async loadCar(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.carService.getCar(this.carId).subscribe(res => {
      loading.dismiss();
      this.car = res;
    });
  }

  async saveCar(){
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();

    if (this.carId){
      // Update
      this.carService.updateCar(this.car, this.carId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }else {
      // Add new
      this.carService.addCar(this.car).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }

  onRemove( idCar: string){
    // console.log(idCar);
    this.carService.removeCar(idCar);
  }

}
