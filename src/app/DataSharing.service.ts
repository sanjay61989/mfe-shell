import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SharedData {
  key: string;
  value: any;
}

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private apiUrl = 'http://localhost:3000/data'; // Base URL of your Node.js service

  constructor(private http: HttpClient) {}

  // Method to get shared data by key
  getData(key: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${key}`);
  }

  // Method to share new data or update existing data
  shareData(key: string, value: any): Observable<any> {
    const data: SharedData = { key, value };
    return this.http.post(this.apiUrl, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
