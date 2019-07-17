import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './layout/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './layout/card/card.component';
import { StartComponent } from './pages/start/start.component';
import { FlexCheatSheetComponent } from './pages/flex-cheat-sheet/flex-cheat-sheet.component';
import { MediaQueriesComponent } from './pages/media-queries/media-queries.component';
import { BreakpointObserverComponent } from './pages/breakpoint-observer/breakpoint-observer.component';
import { AngularFlexLayoutComponent } from './pages/angular-flex-layout/angular-flex-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BootstrapGridComponent } from './pages/bootstrap-grid/bootstrap-grid.component';
import { AngularFlexLayoutGridComponent } from './pages/angular-flex-layout-grid/angular-flex-layout-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    StartComponent,
    FlexCheatSheetComponent,
    MediaQueriesComponent,
    BreakpointObserverComponent,
    AngularFlexLayoutComponent,
    BootstrapGridComponent,
    AngularFlexLayoutGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
