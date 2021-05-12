import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "./app.component";
import { CardComponent } from "./dashboard/card/card.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FakeApiService } from "./fake-api.service";
import { HelloComponent } from "./hello.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { ContainerComponent } from "./container/container.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SkillService } from "./skill.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeApiService, { delay: 5000 }),
    FlexLayoutModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    CardComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
  providers: [SkillService],
})
export class AppModule {}
