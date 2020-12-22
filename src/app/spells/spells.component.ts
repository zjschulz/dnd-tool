import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spell } from './spell.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onFetchSpells() {
    return this.http.get(
      'https://www.dnd5eapi.co/api/spells'
    )
    .subscribe(res => console.log(res.results))
    // get list of spell index's
    // create list component and have this fetch request populate the list
    // create detail component that fetch spell data on clicked spell in list
  }

}
