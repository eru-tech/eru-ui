import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "eru-rules-ui";
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry
    .addSvgIcon("eru-logo", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-logo.svg"))
    .addSvgIcon("eru-home", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-home.svg"))
    .addSvgIcon("eru-file", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-file.svg"))
    .addSvgIcon("eru-deploy", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-deploy.svg"))
    .addSvgIcon("eru-support", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-support.svg"))
    .addSvgIcon("eru-settings", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-settings.svg"))
    .addSvgIcon("eru-search", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-search.svg"));
  }
}
