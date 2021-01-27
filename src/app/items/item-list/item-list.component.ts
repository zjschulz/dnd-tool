import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
  })
export class ItemListComponent implements OnInit, OnDestroy{
  items: Item[] = [];
  filteredName: string;
  subscription: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.filteredName = '';
    this.subscription = this.itemService.itemsChanged
      .subscribe(
        (items: Item[]) => {
          this.items = items;
        }
      );
    this.items = this.itemService.getItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
} 