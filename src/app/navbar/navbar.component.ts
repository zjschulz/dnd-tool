import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSaveData() {}

  onFetchData() {}

}
