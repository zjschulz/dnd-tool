import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from './item.model';

@Injectable()
export class ItemService {
    itemsChanged = new Subject<Item[]>();

    private items: Item[] = [];
    private data: any;

    constructor() {}

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }

    setItems(items: Item[]) {
        this.items = items;
        this.itemsChanged.next(this.items.slice());
    }
    
    getItems() {
        return this.items.slice();
    }

    getItem(index: string) {
        return this.items.filter(item => {return item.index === index});
    }

}