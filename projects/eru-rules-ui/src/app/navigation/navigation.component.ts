import { Component } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  isCollapsed = false;

  constructor() {}

  //Expands the navbar on mouse enter
  expand() {
    this.isCollapsed = false;
  }

  //Expands the navbar on mouse enter
  collapse() {
    this.isCollapsed = false;
  }
}
