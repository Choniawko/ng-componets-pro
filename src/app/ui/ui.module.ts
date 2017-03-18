import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ToogleComponent } from './toogle/toogle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckboxComponent,
    ToogleComponent
  ],
  exports: [
    CheckboxComponent,
    ToogleComponent
  ]
})
export class UiModule { }
