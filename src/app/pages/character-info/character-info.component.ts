import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterResponse } from 'src/app/models/characterResponse';
import { FilmsResponse } from 'src/app/models/filmsResponse';
import { SpeciesResponse } from 'src/app/models/speciesResponse';
import { StarshipsResponse } from 'src/app/models/starshipsResponse';
import { SwapiDataService } from 'src/app/services/swapi-data.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  private subs: Subscription = new Subscription();
  speciesUrl!: string;
  starshipsUrl!: string;
  filmUrl!: string;
  filmId = [];
  starshipId = [];
  speciesId!: any;
  characterFilms: string[] = [];
  characterSpecies: string[] = [];
  characterStarships: string[] = [];
  // filmInfo: FilmsResponse = new FilmsResponse(null, null, null, null, null, null, null, null, null, null, null, null, null, null)
  speciesInfo: SpeciesResponse = new SpeciesResponse(null, null, null, null, null, null, null, null, null, null, null, [], [], null, null)
  characterInfo: CharacterResponse = new CharacterResponse(null, null, null, null, null, null, null, null, null, [], [], null, [], null, null, null)
  @Input() characterDataById: number | any;
  @Output() cancel = new EventEmitter();

  constructor(private _swapiDataService: SwapiDataService) { }

  getCharacterData(id: number) {
    id = this.characterDataById;
    this._swapiDataService.getCharacterData(id)
      .subscribe((res: CharacterResponse) => {
        this.characterInfo = res as any;

        this.speciesUrl = this.characterInfo.species?.toString() as any;
        this.speciesId = this.speciesUrl.replace(/\d/g, '');
        this._swapiDataService.getSpeciesById(this.speciesId).subscribe((res: SpeciesResponse) => {
          this.speciesInfo.name = res.name as any;
        })
        this.filmUrl = this.characterInfo.films?.toString() as any;
        this.filmId = this.filmUrl.match(/\d/g) as any;
        this.filmId.forEach(id => {
          this._swapiDataService.getFilmById(id).subscribe((res: FilmsResponse) => {
            this.characterFilms.push(res.title as any)
          })
        })
        this.starshipsUrl = this.characterInfo.starships?.toString() as any;
        this.starshipId = this.starshipsUrl.match(/\d/g) as any;
        this.starshipId.forEach(idSrtarship => {
          this._swapiDataService.getStarShips(idSrtarship).subscribe((res: StarshipsResponse) => {
            this.characterStarships.push(res.name as any)
          })
        })
      })
  }

  ngOnInit(): void {
    this.getCharacterData(this.characterDataById);
  }

}
