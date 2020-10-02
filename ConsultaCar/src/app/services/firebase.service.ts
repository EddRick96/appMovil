import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Vehiculo } from './Vehiculo';
import { map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private cars: Observable<Vehiculo[]>;
  private carCollection: AngularFirestoreCollection<Vehiculo>;

  constructor(db: AngularFirestore) { 
    this.carCollection = db.collection<Vehiculo>('vehiculos');
    this.cars = this.carCollection.snapshotChanges().pipe(
      map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
      )
    );
  }

  getCars(){
    return this.cars;
  }

  getCar(id: string){
    return this.carCollection.doc<Vehiculo>(id).valueChanges();
  }

  updateCar( vehiculo: Vehiculo, id: string){
    return this.carCollection.doc(id).update(vehiculo);
  }

  addCar(vehiculo: Vehiculo){
    return this.carCollection.add(vehiculo);
  }

  removeCar(id: string){
    return this.carCollection.doc(id).delete();
  }
 
}
