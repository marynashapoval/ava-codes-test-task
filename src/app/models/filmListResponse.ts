import { FilmsResponse } from "./filmsResponse";

export class FilmListResponse {
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: FilmsResponse[] = []
    ) {}
}