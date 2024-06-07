import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData().subscribe({
      next: (data) => {
        this.title = data;
      },
      error: (err: any) => {
        this.title = err.message;
      }
    })
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json, text/plain, */*'
    });

    return this.http.get('http://localhost:3000/hello', { headers, responseType: 'text' as 'json' });
  }
}
