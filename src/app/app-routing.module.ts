import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './serverComponent/servers/servers.component';

import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'servers',
    component: ServersComponent,
  },
  {
    path: 'recipe',
    component: RecipeComponent,
  },
  {
    path: 'shopping-list',
    component: ShopingListComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, [RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule {}
