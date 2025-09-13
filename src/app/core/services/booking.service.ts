import { Injectable } from '@angular/core';
import { Dress } from '../models/dress.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private cart: Dress[] = [];

  getCart(): Dress[] {
    return this.cart;
  }

  addToCart(dress: Dress) {
    this.cart.push(dress);
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
  }
}
