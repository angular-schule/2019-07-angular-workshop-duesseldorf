import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { FlexCheatSheetComponent } from './pages/flex-cheat-sheet/flex-cheat-sheet.component';
import { MediaQueriesComponent } from './pages/media-queries/media-queries.component';
import { BreakpointObserverComponent } from './pages/breakpoint-observer/breakpoint-observer.component';
import { AngularFlexLayoutComponent } from './pages/angular-flex-layout/angular-flex-layout.component';
import { AngularFlexLayoutGridComponent } from './pages/angular-flex-layout-grid/angular-flex-layout-grid.component';
import { BootstrapGridComponent } from './pages/bootstrap-grid/bootstrap-grid.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'flex-cheat-sheet', component: FlexCheatSheetComponent },
  { path: 'media-queries', component: MediaQueriesComponent },
  { path: 'breakpoint-observer', component: BreakpointObserverComponent },
  { path: 'angular-flex-layout', component: AngularFlexLayoutComponent },
  { path: 'bootstrap-grid', component: BootstrapGridComponent },
  { path: 'angular-flex-layout-grid', component: AngularFlexLayoutGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
