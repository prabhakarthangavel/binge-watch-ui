export class ReviewCard {
    cast: string;
    post_date: Date;
    movie_id: string;
    movie_img: string;
    movie_name: string;
    stars: number;
    year: number;

    constructor(reviewResponse: any) {
        this.cast = reviewResponse.cast;
        this.post_date = reviewResponse.createdDate;
        this.movie_id = reviewResponse.movieId;
        this.movie_img = reviewResponse.movieImg;
        this.movie_name = reviewResponse.movieName;
        this.stars = reviewResponse.rating;
        this.year = reviewResponse.year;
    }
}