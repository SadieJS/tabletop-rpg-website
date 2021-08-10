import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  adventureToggled = false;
  battleToggled = false;
  constructor() { }
  adventuringActive(){
    this.battleToggled = false;
    this.adventureToggled = true;
  }
  battleActive(){
    this.adventureToggled = false;
    this.battleToggled = true;
  }
  ngOnInit(): void {
  }

}
