import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from './shared/layout/layout.component';
import { ExtenalUrlComponent } from './features/extenal-url/extenal-url.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
  //  component: ExtenalUrlComponent,
    children: [
      {
        path: "ext",
        loadChildren: "./features/extenal-url/extenal-url.module#ExtenalUrlModule"
      },
      {
        path: "schedule",
        loadChildren: "./features/schedule/schedule.module#ScheduleModule"
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
