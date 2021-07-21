import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PeopleResponse } from '../models/peopleResponse';
import { CharacterResponse } from '../models/characterResponse';
import { FilmsResponse } from '../models/filmsResponse';
import { SpeciesResponse } from '../models/speciesResponse';
import { StarshipsResponse } from '../models/starshipsResponse';
import { FilmListResponse } from '../models/filmListResponse';
import { SpeciesListResponse } from '../models/speciesListResponse';

@Injectable({
  providedIn: 'root'
})
export class SwapiDataService {
  apiPeople = 'people';
  apiFilms = 'films';
  apiSpecies = 'species';
  apiStraships = 'starships';

  constructor(private http: HttpClient) { }

  getStarWarsCharactersData(page: number) {
    return this.http.get<PeopleResponse>(environment.apiSW + this.apiPeople + '?page=' + page);
  }

  getCharacterData(id: number) {
    return this.http.get<CharacterResponse>(environment.apiSW + this.apiPeople + '/' + (+id + 1));
  }

  getFilmById(id: number) {
    return this.http.get<FilmsResponse>(environment.apiSW + this.apiFilms + '/' + id)
  }

  getFilms() {
    return this.http.get<FilmListResponse>(environment.apiSW + this.apiFilms)
  }

  getSpeciesById(id: number) {
    return this.http.get<SpeciesResponse>(environment.apiSW + this.apiSpecies + '/' + id)
  }

  getSpecies() {
    return this.http.get<SpeciesListResponse>(environment.apiSW + this.apiSpecies)
  }

  getStarShips(id: number) {
    return this.http.get<StarshipsResponse>(environment.apiSW + this.apiStraships + '/' + id)
  }
}
