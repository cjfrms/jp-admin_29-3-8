import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from './shared/layout/layout.component';
import { ExtenalUrlComponent } from './features/extenal-url/extenal-url.component';

const routes: Routes = [
  {
    path: "layout",
    component: LayoutComponent,
  //  component: ExtenalUrlComponent,
    children: [
      {
        path: "",
        loadChildren: "./features/extenal-url/extenal-url.module#ExtenalUrlModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
