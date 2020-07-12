import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "search-component",
  templateUrl: "./search.component.html"
})
export class SearchComponent {
  @Output() SearchMovie = new EventEmitter<string>();

  filter: string;

  onInputChange(name: string) {
    this.SearchMovie.emit(name);
  }
}
