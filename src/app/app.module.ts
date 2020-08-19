import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GodsComponent } from './gods/gods.component';
import { ItemsComponent } from './items/items.component';
import { GodpageComponent } from './godpage/godpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GodsComponent,
    ItemsComponent,
    GodpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
