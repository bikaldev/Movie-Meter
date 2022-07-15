export class Film {
    constructor(public title:string, 
        public posterUrl:string, 
        public synopsis: string,
        public genre: string, 
        public year: number, 
        public avgRating: number,
        public cast: string[],
        public director: string,
        public directors: string[],
        public language: string,
        public subscription: string[],
        public imdb: number, 
        public letterboxd: number,
        public critic: number,
        public metacritic: number
        ) {
    }
}