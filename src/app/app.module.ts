import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestPortfolioComponent } from './components/test-portfolio/test-portfolio.component';
import { TestRoutesComponent } from './components/test-routes/test-routes.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'portfolio', component:TestPortfolioComponent},
  {path:'test-routes', component:TestRoutesComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestPortfolioComponent,
    TestRoutesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // or 'top'
      anchorScrolling: 'enabled',
      // scrollOffset: [0, 64] // [x, y] - adjust scroll offset
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
