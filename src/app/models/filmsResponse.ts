export class FilmsResponse {
    constructor(
        public characters: string[] | null,
        public created: Date | null,
        public director: string | null,
        public edited: Date | null,
        public episode_id: number | null,
        public opening_crawl: string | null,
        public planets: [] | null,
        public producer: string | null,
        public release_date: Date | null,
        public species: string[] | null,
        public starships: string[] | null,
        public title: string | null,
        public url: string | null,
        public vehicles: [] | null
    ) {}
}