import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router

import { MoviesComponent } from "../components/movies/movies.component";
import { MovieDetailComponent } from "../components/moviesDetails/movie-detail.component";

const routes: Routes = [
  { path: "", component: MoviesComponent },
  { path: "movie-detail/:id", component: MovieDetailComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
