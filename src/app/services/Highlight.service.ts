import { H } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HIGHLIGHTS } from '../mock/highlight';
import { HighlightModel } from '../model/highlight.model';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  private apiUrl = '';
  
  constructor(private http: HttpClient) {}
  
  getData(): Observable<HighlightModel[]> {
    // return this.http.get<Highlight[]>(this.apiUrl);
    return of(HIGHLIGHTS);
  }
}
