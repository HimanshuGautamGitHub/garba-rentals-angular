import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../core/services/collections.service';
import { Dress } from '../../core/models/dress.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html'
})
export class CollectionsComponent implements OnInit {
  dresses: Dress[] = [];

  constructor(private collectionsService: CollectionsService) {}

  ngOnInit(): void {
    this.dresses = this.collectionsService.getCollections();
  }
}
