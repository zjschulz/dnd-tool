import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  onNewCharacter() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
