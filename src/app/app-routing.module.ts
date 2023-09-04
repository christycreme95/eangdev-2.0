import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@views/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    loadChildren: () =>
      import('@views/views.module').then((m) => m.ViewsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
