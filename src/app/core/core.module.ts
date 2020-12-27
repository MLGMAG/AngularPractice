import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    NavigationComponent
  ],
  declarations: [NavbarComponent, NavigationComponent]
})
export class CoreModule {
}
