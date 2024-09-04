import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiURL = 'http://localhost/phprestAPI/reservations/';

  // private reservations: Reservation[] = [];

  constructor( private http: HttpClient ){

  }

  //CRUD

  getReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>( this.apiURL + 'view.php' );
  }

  getReservation( id: string ): Observable<Reservation>{
    return this.http.get<Reservation>( this.apiURL + 'view.php?id=' + id );
  }

  addReservation( reservation: Reservation ): Observable<void>{
    return this.http.post<void>( this.apiURL + 'insert.php', reservation );
  }

  deleteReservation( id: any ): Observable<void>{
    return this.http.delete<void>( this.apiURL + 'delete.php?id=' + id );
  }

  updateReservation( id: any, updatedReservation: Reservation ): Observable<void>{
    updatedReservation.id = id;
    return this.http.put<void>( this.apiURL + 'update.php?id=' + id, updatedReservation );
  }

}
