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
    .addSvgIcon("eru-search", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-search.svg"))
    .addSvgIcon("eru-edit", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-edit.svg"))
    .addSvgIcon("eru-export", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-export.svg"))
    .addSvgIcon("eru-download", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-download.svg"))
    .addSvgIcon("eru-copy", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-copy.svg"))
    .addSvgIcon("eru-share", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-share.svg"))
    .addSvgIcon("eru-delete", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-delete.svg"))
    .addSvgIcon("eru-enter", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-enter.svg"))
    .addSvgIcon("eru-dmn-input", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-dmn-input.svg"))
    .addSvgIcon("eru-dmn-knowledge", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-dmn-knowledge.svg"))
    .addSvgIcon("eru-dmn-knowledge-model", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-dmn-knowledge-model.svg"))
    .addSvgIcon("eru-dmn-decision", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-dmn-decision.svg"))
    .addSvgIcon("eru-dmn-text", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-dmn-text.svg"))
    .addSvgIcon("eru-dmn-service", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-dmn-service.svg"))
    .addSvgIcon("eru-drop", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-drop.svg"))
    .addSvgIcon("eru-model", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/eru-model.svg"));
  }
}
