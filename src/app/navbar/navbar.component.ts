import { Component, OnInit, EventEmitter, Output, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
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

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
      this.userSub.unsubscribe();
  }

  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if (windowScroll > this.elementPosition) {this.sticky = true;}
      else {this.sticky = false;}
    }

}
