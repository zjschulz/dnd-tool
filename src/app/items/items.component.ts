import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
  })
export class ItemComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.onFetchItems();
  }

  onFetchItems() {
    this.dataStorageService.fetchItems
  }

}