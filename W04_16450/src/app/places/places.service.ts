import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'https://res.cloudinary.com/g5-assets-cld/image/upload/x_5,y_103,h_897,w_1495,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1j4zxgpzty-bolton-estates-apartments/uploads/BuildingPhoto_94_uhfkne.jpg',
      100000000      
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_1100,w_2000/v1504090383/g5/g5-c-i7yxybw5-mission-rock-single/g5-cl-iap27qrg-mountain-view-apartment-homes/uploads/interior-4.jpg',
      125000000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4011-1/moda-apartments-exterior.jpg',
      500000000
    ),
  ];

  get places() {
    return [...this._places];
  }
  
  constructor() { }
}
