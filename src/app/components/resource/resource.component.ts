import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent {

  resources:any
  constructor(private http:HttpClient) {
    this.http
      .get("http://localhost:9090/resource-service/all")
      .subscribe(
        {
          next: value => {
            console.log(value)
            this.resources = value
          },
          error: err => {
            console.log(err)
          }
        }
      )
  }

}
