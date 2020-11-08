import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private NEWS_API_SERVER = "https://my-json-server.typicode.com/TomaszJaworski/test-api/news";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.NEWS_API_SERVER);
  }
}