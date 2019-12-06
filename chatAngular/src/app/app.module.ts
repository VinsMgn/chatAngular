import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DisplayComponentComponent } from './display/display-component.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ChatServiceService } from '../app/services/chat-service.service';
import { HttpClientModule } from '@angular/common/http';
import { UserNameService } from './services/connexion.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DisplayComponentComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ChatServiceService, UserNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
