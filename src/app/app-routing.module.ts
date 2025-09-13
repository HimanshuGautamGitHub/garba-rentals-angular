import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'collections', loadChildren: () => import('./features/collections/collections.module').then(m => m.CollectionsModule) },
  { path: 'booking', loadChildren: () => import('./features/booking/booking.module').then(m => m.BookingModule) },
  { path: 'faq', loadChildren: () => import('./features/faq/faq.module').then(m => m.FaqModule) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule) },
  { path: 'how-it-works', loadChildren: () => import('./features/how-it-works/how-it-works.module').then(m => m.HowItWorksModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
