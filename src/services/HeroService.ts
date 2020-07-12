import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHeroes() {
    return [{ name: "Batman" }];
  }
}
