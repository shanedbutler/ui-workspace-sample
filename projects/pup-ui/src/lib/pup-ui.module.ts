import { NgModule } from '@angular/core';
import { PupUiComponent } from './pup-ui.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    PupUiComponent,
    NavBarComponent
  ],
  imports: [
  ],
  exports: [
    PupUiComponent
  ]
})
export class PupUiModule { }
