import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { GodsComponent } from './gods/gods.component';
import { GodpageComponent } from './godpage/godpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gods', component: GodsComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'gods/:god', component: GodpageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
