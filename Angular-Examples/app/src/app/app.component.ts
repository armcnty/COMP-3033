import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app';
  items = [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/contact').toPromise().then(data=> {
      console.log(data);

      for( let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(data[key as never]); 
    });
  }
}
