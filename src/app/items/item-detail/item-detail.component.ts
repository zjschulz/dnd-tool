import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Item } from '../item.model';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.css']
  })
export class ItemDetailComponent implements OnInit{
  item: Item;
  index: string;
  data: any;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService){}

              ngOnInit() {
                this.route.params
                .subscribe( 
                  (params: Params) => {
                    this.index = params['index'];
                    this.item = this.itemService.getItem(this.index)[0];
                    this.dataStorageService.fetchUrl(this.item.url)
                    .subscribe((res: any) => {
                      console.log(res);
                      this.data = res;
                    });
                  }
                )
              }
}