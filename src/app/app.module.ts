import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MatButtonModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './home/mission/mission.component';
import { ScrollPageComponent } from './home/scroll-page/scroll-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionComponent,
    ScrollPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
    // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
