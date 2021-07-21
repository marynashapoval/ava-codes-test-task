import { CommonModule, DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CharacterInfoComponent } from './pages/character-info/character-info.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FirstPageComponent } from './pages/routing-pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/routing-pages/second-page/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CharacterInfoComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgbModule,
    ModalModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    DatePipe,
    BsModalService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
