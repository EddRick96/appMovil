import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../services/Vehiculo';
import { FirebaseService } from '../services/firebase.service';
import { VehiculosPageModule } from '../pages/vehiculos/vehiculos.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cars: Vehiculo[];

  constructor(private FirebaseService: FirebaseService) {}

  ngOnInit(){
    this.FirebaseService.getCars().subscribe(res => {
      console.log('Vehiculos', res)
      this.cars = res;
    });
  }

}
