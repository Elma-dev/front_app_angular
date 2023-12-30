import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservation:any
  person:any|null
  editRes:any|null
  constructor(private http:HttpClient) {
    this.http
      .get("http://localhost:9090/reservation-service/reservations/all")
      .subscribe(
        {
          next: value => {
            this.reservation = value
          },
          error: err => {
            console.log("ERROR")
            console.log(err)
          }
        }
      )
  }

  showPerson(id:number) {
    this.http.get("http://localhost:9090/reservation-service/person/"+id)
      .subscribe(
        {
          next: value => {
            this.person=value
          },
          error: err => {
            console.log(err)
          }
        }
      )
  }

  deleteReservation(id:number) {
    this.http.delete("http://localhost:9090/reservation-service/reservations/delete/"+id)
      .subscribe(
        {
          next: value => {
            window.location.reload()
          },
          error: err => {
            console.log(err)
          }
        }
      )

  }

  editReservation(r: any) {
    this.editRes = r
    console.log(this.editRes)
  }
}
