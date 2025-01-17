import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { FooterComponent } from "./footer/footer.component";
import { routes } from "./app.routes";
@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    ToolbarComponent,
    FooterComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "onoAir2";
}
