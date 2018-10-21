import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookComponent } from './book/book.component';
import { MixesComponent } from './mixes/mixes.component';
import { LibraryComponent } from './library/library.component';
import { MenuComponent } from './menu/menu.component';
import { UpcomingShowsComponent } from './upcoming-shows/upcoming-shows.component';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';


const appRoutes : Routes = [
  // {path: '', component: AppComponent},
  {path: '', component: HomeComponent},
  {path: 'book', component: BookComponent}, 
  {path: 'mixes', component: MixesComponent},
  {path: 'library', component: LibraryComponent},
  { path: '**', component: HomeComponent } 
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    MixesComponent,
    LibraryComponent,
    MenuComponent,
    UpcomingShowsComponent,
    HomeComponent,
    ShowsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //TODO remove when done
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
