import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { userReducer } from './Store/Reducers/user.reducers';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { movieReducer } from './Store/Reducers/movie.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    MovieComponent,
    MovieListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({}, {}),

    /* Register the Reducer -> used inside the application */
    // StoreModule.forRoot({ users: userReducer }),
    StoreModule.forRoot({ movies: movieReducer }),
    /* Added : After installed: ng add @ngrx/store-devtools */
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
