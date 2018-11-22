import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from './shared/layout/layout.component';
import { IframeComponent } from './features/iframe/iframe.component';

const routes: Routes = [
  {
    path: "layout",
    // component: LayoutComponent,
    component: IframeComponent,
  /*  children: [
      {
        path: "",
        loadChildren: "./features/iframe/iframe.module#IframeModule",
        data: { pageTitle: "Schdule List" }
      }
    ]*/
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
