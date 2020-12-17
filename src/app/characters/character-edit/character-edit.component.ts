import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent implements OnInit {
  id: number;
  editMode = false;
  characterForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router) { }

  get controls() {
    return (<FormArray>this.characterForm.get('items')).controls;
  }

  private initForm() {
    let characterName = '';
    let characterRace = '';
    let characterJob = '';
    let characterSubJob = '';
    let characterImagePath = '';
    let characterItems = new FormArray([]);

    if (this.editMode){
      const character = this.characterService.getCharacter(this.id);
      characterName = character.name;
      characterRace = character.race;
      characterJob = character.job;
      characterSubJob = character.subjob;
      characterImagePath = character.imagePath;
      if (character['ingredients']) {
        for (let item of character.items) {
          characterItems.push(
            new FormGroup({
              'name': new FormControl(item.name, Validators.required),
              'amount': new FormControl(item.weight, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.characterForm = new FormGroup({
      'name': new FormControl(characterName, Validators.required),
      'race': new FormControl(characterRace, Validators.required),
      'job': new FormControl(characterJob, Validators.required),
      'subjob': new FormControl(characterSubJob, Validators.required),
      'imagePath': new FormControl(characterImagePath, Validators.required),
      'items': characterItems
    });

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.characterService.updateCharacter(this.id, this.characterForm.value)
    }
    else {
      this.characterService.addCharacter(this.characterForm.value)
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onAddItem() {
    (<FormArray>this.characterForm.get('items')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onDeleteItem(index: number) {
    (<FormArray>this.characterForm.get('items')).removeAt(index);
  }

}
