import { SpeciesResponse } from "./speciesResponse";

export class SpeciesListResponse {
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: SpeciesResponse[] = []
    ) {}
}