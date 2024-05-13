import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bookList: any[] | undefined;


  constructor(private http: HttpClient) { }


  ngOnInit(): void {

    this.http.get('http://localhost:8081/getallbooks') // replace with your API URL

      .toPromise()

      .then(response => {
       
          this.bookList = response as any[];
       
      });

  }

  }

