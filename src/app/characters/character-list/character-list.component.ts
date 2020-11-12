import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  subscription: Subscription;

  constructor(private characterService: CharacterService,
              private router: Router,
              private route: ActivatedRoute) { }

    ngOnInit() {
      this.subscription = this.characterService.charactersChanged
        .subscribe(
          (characters: Character[]) => {
            this.characters = characters;
          }
        );
      this.characters = this.characterService.getCharacters();
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewCharacter() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
