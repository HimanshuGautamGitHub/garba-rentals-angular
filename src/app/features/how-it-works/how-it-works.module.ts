import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HowItWorksComponent } from './how-it-works.component';

@NgModule({
  declarations: [HowItWorksComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: HowItWorksComponent }])]
})
export class HowItWorksModule { }
