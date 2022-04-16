import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokiDetailComponent } from './components/poki-detail/poki-detail.component';
import { PokiTableComponent } from './components/poki-table/poki-table.component';

const routes: Routes = [
  {path: 'home', component:PokiTableComponent},
  {path: 'pokiDetail/:id', component: PokiDetailComponent},
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: '**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
