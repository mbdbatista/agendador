import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { CreateActivityComponent } from './page/create-activity/create-activity.component';
import { UpdateActivityComponent } from './page/update-activity/update-activity.component';
import { DeleteActivityComponent } from './component/delete-activity/delete-activity.component';


@NgModule({
  declarations: [
    CreateActivityComponent,
    UpdateActivityComponent,
    DeleteActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
