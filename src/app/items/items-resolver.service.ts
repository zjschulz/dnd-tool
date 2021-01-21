import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Injectable({providedIn: 'root'})
export class ItemsResolverService implements Resolve<Item[]> {

    constructor(private itemsService: ItemService,
                private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const items = this.itemsService.getItems();

        if (items.length === 0) {
            return this.dataStorageService.fetchItems();
        }
        else {
            return items;
        }
    }

}
