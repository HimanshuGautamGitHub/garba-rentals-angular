import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../core/services/booking.service';
import { Dress } from '../../core/models/dress.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {
  cart: Dress[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.cart = this.bookingService.getCart();
  }

  removeItem(i: number) {
    this.bookingService.removeItem(i);
  }

  get total(): number {
  return this.cart.reduce((acc, d) => acc + d.price, 0);
}

}
