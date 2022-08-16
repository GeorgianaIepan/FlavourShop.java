import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationContainerComponent} from "./containers/registration-container/registration-container.component";
import {ProductListComponent} from "./components/product-list/product-list.component";

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationContainerComponent,
    pathMatch: 'full'
  }, {
    path: 'products',
    component: ProductListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
