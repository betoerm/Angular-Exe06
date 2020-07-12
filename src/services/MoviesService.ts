import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";
const withBaseUrl = path =>
  `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`;

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopular(): Observable<any> {
    return this.http.get(withBaseUrl("movie/popular"));
  }

  getDetail(id): Observable<any> {
    return this.http.get(withBaseUrl(`movie/${id}`));
  }
}
