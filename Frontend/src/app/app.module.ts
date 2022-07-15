import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter-page/filter/filter.component';
// import { DisplayContainerComponent } from './filter-page/display-container/display-container.component';
import { DisplayCardComponent } from './filter-page/display-card/display-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DropdownDirective } from './directives/app-dropdown.directive';
import { DropdownItemDirective } from './directives/app-dropdown-item.directive';
import { DataService } from './services/data.service';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    // DisplayContainerComponent,
    DisplayCardComponent,
    NavBarComponent,
    DropdownDirective,
    DropdownItemDirective,
    FilterPageComponent,
    AuthFormComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    FormsModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
