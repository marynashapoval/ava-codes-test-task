export class CharacterResponse {
    constructor(
        public name: string | null,
        public height: string | null,
        public mass: string | null,
        public hair_color: string | null,
        public skin_color: string | null,
        public eye_color: string | null,
        public birth_year: string | null,
        public gender: string | null,
        public homeworld: string | null,
        public films: string[] | null,
        public species: string[] | null,
        public vehicles: string[] | null,
        public starships: string[] | null,
        public created: string | null,
        public edited: string | null,
        public url: string | null,
    ) { }
}