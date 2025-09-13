import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: BookingComponent }])]
})
export class BookingModule { }
