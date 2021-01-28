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
  isWeapon: boolean;
  isArmor: boolean;
  isStandardGear: boolean;
  isEquipmentPack: boolean;
  isTool: boolean;
  isHolySymbol: boolean;
  isDruidicFoci: boolean;
  isArcaneFoci: boolean;
  isMountsAndVehicles: boolean;


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
                      switch(res.equipment_category.name) {
                        case "Weapon":
                          this.isWeapon = true;
                          this.isArmor = false;
                          this.isStandardGear = false;
                          this.isEquipmentPack = false;
                          this.isTool = false;
                          this.isHolySymbol = false;
                          this.isDruidicFoci = false;
                          this.isArcaneFoci = false;
                          this.isMountsAndVehicles = false;
                          break;
                        case "Armor":
                          this.isWeapon = false;
                          this.isArmor = true;
                          this.isStandardGear = false;
                          this.isEquipmentPack = false;
                          this.isTool = false;
                          this.isHolySymbol = false;
                          this.isDruidicFoci = false;
                          this.isArcaneFoci = false;
                          this.isMountsAndVehicles = false;
                          break;
                        case "Adventuring Gear":
                          if (res.gear_category.name === "Standard Gear") {
                            this.isWeapon = false;
                            this.isArmor = false;
                            this.isStandardGear = true;
                            this.isEquipmentPack = false;
                            this.isTool = false;
                            this.isHolySymbol = false;
                            this.isDruidicFoci = false;
                            this.isArcaneFoci = false;
                            this.isMountsAndVehicles = false;
                          }
                          else if (res.gear_category.name === "Equipment Packs") {
                            this.isWeapon = false;
                            this.isArmor = false;
                            this.isStandardGear = false;
                            this.isEquipmentPack = true;
                            this.isTool = false;
                            this.isHolySymbol = false;
                            this.isDruidicFoci = false;
                            this.isArcaneFoci = false;
                            this.isMountsAndVehicles = false;
                          }
                          break;
                        case "Tools":
                          this.isWeapon = false;
                          this.isArmor = false;
                          this.isStandardGear = false;
                          this.isEquipmentPack = false;
                          this.isTool = true;
                          this.isHolySymbol = false;
                          this.isDruidicFoci = false;
                          this.isArcaneFoci = false;
                          this.isMountsAndVehicles = false;
                          break;  
                        case "Holy Symbol":
                          this.isWeapon = false;
                          this.isArmor = false;
                          this.isStandardGear = false;
                          this.isEquipmentPack = false;
                          this.isTool = false;
                          this.isHolySymbol = true;
                          this.isDruidicFoci = false;
                          this.isArcaneFoci = false;
                          this.isMountsAndVehicles = false;
                          break; 
                        case "Druidic Foci":
                          this.isWeapon = false;
                          this.isArmor = false;
                          this.isStandardGear = false;
                          this.isEquipmentPack = false;
                          this.isTool = false;
                          this.isHolySymbol = false;
                          this.isDruidicFoci = true;
                          this.isArcaneFoci = false;
                          this.isMountsAndVehicles = false;
                          break; 
                        case "Arcane Foci":
                          this.isWeapon = false;
                          this.isArmor = false;
                          this.isStandardGear = false;
                          this.isEquipmentPack = false;
                          this.isTool = false;
                          this.isHolySymbol = false;
                          this.isDruidicFoci = false;
                          this.isArcaneFoci = true;
                          this.isMountsAndVehicles = false;
                          break; 
                        case "Mounts and Vehicles":
                          this.isWeapon = false;
                          this.isArmor = false;
                          this.isStandardGear = false;
                          this.isEquipmentPack = false;
                          this.isTool = false;
                          this.isHolySymbol = false;
                          this.isDruidicFoci = false;
                          this.isArcaneFoci = false;
                          this.isMountsAndVehicles = true;
                          break;   
                        default:
                          this.isWeapon = false;
                          this.isArmor = false;
                          this.isStandardGear = false;
                          this.isEquipmentPack = false;
                          this.isTool = false;
                          this.isHolySymbol = false;
                          this.isDruidicFoci = false;
                          this.isArcaneFoci = false;
                          this.isMountsAndVehicles = false;
                      }
                    });
                  }
                )
              }
}