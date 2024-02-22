import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { AppRoutingModule } from './app.routes';
import { counterReducer } from '../services/reducer';
import { increment } from '../services/actions';
import { StoreModule } from '@ngrx/store';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [
    AppComponent,
    StoreComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent); // Or some other component
  }
}