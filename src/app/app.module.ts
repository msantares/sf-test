import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import {SafeHtmlPipe} from "./safe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AccountsDashboardComponent } from './accounts-dashboard/accounts-dashboard.component';
import { AccountsShortListComponent } from './accounts-short-list/accounts-short-list.component';
import { RequestShortListComponent } from './request-short-list/request-short-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent,
    MainPageComponent,
    SafeHtmlPipe,
    AccountsDashboardComponent,
    AccountsShortListComponent,
    RequestShortListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "ru-RU" }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
