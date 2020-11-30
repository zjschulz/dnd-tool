import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  isAuthenticated = false;
  @Output() featureSelected = new EventEmitter<string>();
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onSaveData() {
    this.dataStorageService.storeCharacters();
  }

  onFetchData() {
    this.dataStorageService.fetchCharacters().subscribe();
  }

}
