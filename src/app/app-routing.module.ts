import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {EventComponent} from './components/event/event.component';
import {HumanComponent} from './components/human/human.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'events', component: EventComponent},
  {path: 'humans', component: HumanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
