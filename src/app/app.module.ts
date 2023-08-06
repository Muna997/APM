import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'Home', component: HomeComponent },
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: '**', redirectTo: 'Home', pathMatch: 'full' },
    ]),
    ProductsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
