import { NavbarModule } from './common/components/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './common/common.module';
import { JWTInterceptor } from './common/interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RootRouting,
    BrowserAnimationsModule,
    AppCommonModule,
    NavbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
