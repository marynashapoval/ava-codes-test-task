import { Component, OnInit, TemplateRef } from '@angular/core';
import { CharacterResponse } from 'src/app/models/characterResponse';
import { PeopleResponse } from 'src/app/models/peopleResponse';
import { SwapiDataService } from 'src/app/services/swapi-data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FilmsResponse } from 'src/app/models/filmsResponse';
import { FilmListResponse } from 'src/app/models/filmListResponse';
import { SpeciesListResponse } from 'src/app/models/speciesListResponse';
import { SpeciesResponse } from 'src/app/models/speciesResponse';
import { KeyValue } from 'src/app/helpers/keyValue';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  characters: CharacterResponse[] = [];
  films: FilmsResponse[] = [];
  species: SpeciesResponse[] = [];
  defaultModal!: BsModalRef;
  searchValue!: string;
  id: number = 1;
  page: number = 1;
  searching!: KeyValue[];
  default = {
    keyboard: true,
    class: 'modal-dialog-centered modal-xl'
  };

  constructor(private _swapiDataService: SwapiDataService,
              private modalService: BsModalService) {
    }

  getData() {
    this._swapiDataService.getStarWarsCharactersData(this.page)
    .subscribe((res: PeopleResponse) => {
      this.characters = (res.results).map(x => new CharacterResponse(
        x.name,
        x.height,
        x.mass,
        x.hair_color,
        x.skin_color,
        x.eye_color,
        x.birth_year,
        x.gender,
        x.homeworld,
        x.films,
        x.species,
        x.vehicles,
        x.starships,
        x.created,
        x.edited,
        x.url
      ))
    })
  }

  getFilms() {
    this._swapiDataService.getFilms().subscribe((res: FilmListResponse) => {
      this.films = res.results.map(x => new FilmsResponse(
        x.characters,
        x.created,
        x.director,
        x.edited,
        x.episode_id,
        x.opening_crawl,
        x.planets,
        x.producer,
        x.release_date,
        x.species,
        x.starships,
        x.title,
        x.url,
        x.vehicles
      ))
    })
  }

  getSpecies() {
    this._swapiDataService.getSpecies().subscribe((res: SpeciesListResponse) => {
      this.species = res.results.map(x => new SpeciesResponse(
        x.average_height,
        x.average_lifespan,
        x.classification,
        x.created,
        x.designation,
        x.edited,
        x.eye_colors,
        x.hair_colors,
        x.homeworld,
        x.language,
        x.name,
        x.people,
        x.films,
        x.skin_colors,
        x.url
      ))
    })
  }

  nextPage() {
    this.page++;
    this.getData();
  }

  prevoiusPage() {
    this.page--;
    this.getData();
  }

  openCharacterInfo(modalTemplate: TemplateRef<any>, characterId: number, event: any) {
    this.defaultModal = this.modalService.show(modalTemplate, this.default);
    this.id = characterId;
    console.log(this)
    console.log(event)
  }

  closeModal() {
    if (this.defaultModal) {
      this.defaultModal.hide();
    }
  }

  ngOnInit() {
    this.getData();
    this.getFilms();
    this.getSpecies();
  }

}
