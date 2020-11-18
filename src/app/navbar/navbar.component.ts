import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService) { }

  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeCharacters();
  }

  onFetchData() {
    this.dataStorageService.fetchCharacters().subscribe();
  }

}
