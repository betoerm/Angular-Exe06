import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <strong>Page title: {{ pageTitle }}</strong
    ><strong>Page title: {{ pageTitle }}</strong
    ><strong>Page title: {{ pageTitle }}</strong
    ><strong>Page title: {{ pageTitle }}</strong
    ><strong>Page title: {{ pageTitle }}</strong
    ><strong>Page title: {{ pageTitle }}</strong
    ><strong>Page title: {{ pageTitle }}</strong
    ><strong>Page title: {{ pageTitle }}</strong
    ><strong>Page title: {{ pageTitle }}</strong>
  `
})
export class HelloRoute implements OnInit {
  pageTitle: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageTitle = params["title"];
    });
  }
}
