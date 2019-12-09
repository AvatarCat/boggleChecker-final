import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getResults(letters) {
    return this.http.get('http://api.codebox.org.uk/boggle/' + letters);
  }
}
