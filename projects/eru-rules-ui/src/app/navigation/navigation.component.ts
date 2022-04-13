import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  isCollapsed = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  //Expands the navbar on mouse enter
  expand() {
    this.isCollapsed = false;
  }

  //Expands the navbar on mouse enter
  collapse() {
    this.isCollapsed = false;
  }
}
