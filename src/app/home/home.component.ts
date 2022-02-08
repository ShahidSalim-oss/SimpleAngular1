import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Friend {
  constructor(
    public breed: string,
    public dateOfBirth: Date,
    public id: string,
    public name: string
  ) {
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends: Friend[];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(){
    this.httpClient.get<any>('https://logitive.click/pets').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }
}
