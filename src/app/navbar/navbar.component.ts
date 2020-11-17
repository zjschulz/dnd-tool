import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();
  
  onSelect(feature: string) {
      this.featureSelected.emit(feature)
  }

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.dataStorageService.storeCharacters();
  }

  onFetchData() {
    this.dataStorageService.fetchCharacters();
  }

}
