import { CharacterResponse } from "./characterResponse";

export class PeopleResponse {
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: CharacterResponse[] = []
    ) {}
}