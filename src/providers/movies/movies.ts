import { Injectable } from '@angular/core';
import { MovieModel, Ratings } from "../../models/movie.model";

@Injectable()
export class MoviesProvider {

  private movies: MovieModel[];

  constructor() {
    this.movies = [];

    const montyPython = new MovieModel({
      title: 'Monty Python and the Holy Grail',
      genre: 'Comedy',
      phrase: {
        quote: 'So unnecessarily gorgeous',
        author: 'Tom Huddleston'
      },
      rating: Ratings.ATP
    });
    montyPython.posterUrl = 'https://img.reelgood.com/content/movie/cb7f9b74-5876-4f1b-a1d6-496246b229f8/poster-780.webp';
    montyPython.sinopsis = 'The Knights of the Round Table set off in search of the Holy Grail on foot, as their lackeys make clippety-clop sounds with coconut shells. A plague-ridden community, ringing with the cry of "bring out your dead," offers its hale and hearty citizens to the body piles. A wedding of convenience is attacked by Arthur\'s minions while the pasty-faced groom continually attempts to burst into song. The good guys are nearly thwarted by the dreaded, tree-shaped "Knights Who Say Ni!" A feisty enemy warrior, bloodily shorn of his arms and legs in the thick of battle, threatens to bite off his opponent\'s kneecap. A French military officer shouts such taunts as "I fart in your general direction" and "I wave my private parts at your aunties." Rabbits are a particular obsession of the writers this time around, ranging from the huge Trojan Rabbit to the "killer bunny" that decapitates one of the knights.';
    montyPython.score = 9.75;
    montyPython.availableNow = false;

    this.movies.push(montyPython);

    const blackPanther = new MovieModel({
      title: 'Black Panther',
      genre: 'Action, Superheroes',
      phrase: {
        quote: 'Beautiful, meticulously created, gorgeously shot, incredibly detailed, terrifically acted, brilliantly directed',
        author: 'TK Burton'
      },
      rating: Ratings.M13
    });
    blackPanther.posterUrl = 'https://resizing.flixster.com/N9cH6YGhThIZwrJkuhPej5aujVw=/206x305/v1.bTsxMjU1NzcyNTtqOzE3NzQwOzEyMDA7MTY4ODsyNTAw';
    blackPanther.sinopsis = '"Black Panther" follows T\'Challa who, after the events of "Captain America: Civil War," returns home to the isolated, technologically advanced African nation of Wakanda to take his place as King. However, when an old enemy reappears on the radar, T\'Challa\'s mettle as King and Black Panther is tested when he is drawn into a conflict that puts the entire fate of Wakanda and the world at risk.';
    blackPanther.score = 8.2;
    blackPanther.availableNow = true;

    this.movies.push(blackPanther);

    const skyfall = new MovieModel({
      title: 'Skyfall',
      genre: 'Thriller, Action, Spies',
      phrase: {
        quote: 'Best Bond yet!',
        author: 'Scott Mantz'
      },
      rating: Ratings.M16,
      posterUrl: 'http://es.web.img2.acsta.net/pictures/15/11/13/08/29/165153.jpg',
      availableNow: true,
      sinopsis: 'In Skyfall, Bond\'s loyalty to M is tested as her past comes back to haunt her. As MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost',
      score: 9.1
    });

    this.movies.push(skyfall);

    this.movies.push(new MovieModel({
      title: 'Ant-Man and The Wasp',
      genre: 'Acción y Aventura, Comedia, Fantasía',
      phrase: {
        author: 'Rodrigo',
        quote: 'Divertida'
      },
      rating: Ratings.M13,
      posterUrl: 'https://resizing.flixster.com/RQGuI1bOR6hdZSVlJlrI7toTGTo=/206x305/v1.bTsxMjcyOTQxMjtqOzE3Nzg3OzEyMDA7MTYzODsyMDQ4',
      availableNow: true,
      sinopsis: 'In the aftermath of "Captain America: Civil War," Scott Lang (Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he\'s confronted by Hope van Dyne (Lilly) and Dr. Hank Pym (Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.',
      score: 7.9
    }));

    this.movies.push(new MovieModel({
      title: 'Mission: Imposible - Fallout',
      genre: 'Acción, Misterio, Drama',
      phrase: {
        quote: 'Best action movie ever',
        author: 'Variety'
      },
      rating: Ratings.M16,
      posterUrl: 'https://resizing.flixster.com/7hS1cxYjGSiBEktXogs1iCJe6Fg=/206x305/v1.bTsxMjc0MjEwMjtqOzE3Nzg3OzEyMDA7Njk2OzEwMjQ',
      availableNow: false,
      sinopsis: 'The best intentions often come back to haunt you. MISSION: IMPOSSIBLE - FALLOUT finds Ethan Hunt (Tom Cruise) and his IMF team (Alec Baldwin, Simon Pegg, Ving Rhames) along with some familiar allies (Rebecca Ferguson, Michelle Monaghan) in a race against time after a mission gone wrong. Henry Cavill, Angela Bassett, and Vanessa Kirby also join the dynamic cast with filmmaker Christopher McQuarrie returning to the helm.',
      score: 8.5
    }));

    this.movies.push(new MovieModel({
      title: 'The Matrix',
      score: 7.6,
      phrase: {
        quote: 'Where other films are done in by the freedom offered by computer effects, The Matrix integrates them beautifully.',
        author: 'Keith Philipps'
      },
      genre: 'Action, Sci-fi',
      rating: Ratings.M18,
      availableNow: true,
      posterUrl: 'https://resizing.flixster.com/EsE5EO3Q2Sw6BSfSBujfprqqcfg=/206x305/v1.bTsxMTE2ODA5NjtqOzE3ODE0OzEyMDA7ODAwOzEyMDA'
    }))
  }

  getMovies(): MovieModel[] {
    return this.movies;
  }

}
