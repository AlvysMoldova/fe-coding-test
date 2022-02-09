import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavComponent } from './core/nav/nav.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModalModule } from 'ngx-bs-modal';
import { ConfirmComponent } from './shared/components/confim/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToolbarComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    NgbModule,
    BootstrapModalModule,
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  entryComponents: [
    ConfirmComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
