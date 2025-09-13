import { Injectable } from '@angular/core';
import { Dress } from '../models/dress.model';

@Injectable({ providedIn: 'root' })
export class CollectionsService {
  private dresses: Dress[] = [
    { id: 1, name: 'Royal Red Lehenga', description: 'Elegant red lehenga with embroidery.', price: 4500, sizes: ['S','M','L'], imageUrl: 'assets/images/dress-placeholder.jpg' },
    { id: 2, name: 'Golden Silk Saree', description: 'Traditional silk saree.', price: 3800, sizes: ['M','L','XL'], imageUrl: 'assets/images/dress-placeholder.jpg' },
    { id: 3, name: 'Emerald Green Anarkali', description: 'Graceful anarkali gown.', price: 5200, sizes: ['S','M'], imageUrl: 'assets/images/dress-placeholder.jpg' },
    { id: 4, name: 'Classic Black Sherwani', description: 'Sherwani set for men.', price: 6000, sizes: ['M','L','XL'], imageUrl: 'assets/images/dress-placeholder.jpg' }
  ];

  getCollections(): Dress[] {
    return this.dresses;
  }
}
