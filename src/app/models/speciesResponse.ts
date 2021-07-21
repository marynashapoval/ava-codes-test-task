import { FilmsResponse } from "./filmsResponse";
import { PeopleResponse } from "./peopleResponse"

export class SpeciesResponse {
    constructor(
        public average_height: string | null,
        public average_lifespan: string | null,
        public classification: string | null,
        public  created: Date | null,
        public designation: string | null,
        public edited: Date | null,
        public  eye_colors: string | null,
        public  hair_colors: string | null,
        public homeworld: string | null,
        public language: string | null,
        public name: string | null,
        public people: PeopleResponse[] = [],
        public films: FilmsResponse[] = [],
        public skin_colors: string | null,
        public url: string | null
    ) {}
}