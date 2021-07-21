import { FilmsResponse } from "./filmsResponse"

export class StarshipsResponse {
    constructor(
        public MGLT: string,
        public cargo_capacity: string,
        public  consumables: string,
        public cost_in_credits: string,
        public created: Date,
        public crew: string,
        public edited: Date,
        public hyperdrive_rating: string,
        public length: string,
        public manufacturer: string,
        public max_atmosphering_speed: string,
        public model: string,
        public name: string,
        public passengers: string,
        public films: FilmsResponse[] = [],
        public pilots: [],
        public starship_class: string,
        public url: string
    ) {}
}