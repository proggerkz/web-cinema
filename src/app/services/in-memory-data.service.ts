import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../movie';
import { Genre } from '../genre';
import { Comment } from '../comment';
import { CommentSet } from '../commentSet';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies: Movie[] = [
      {
        title: 'Peter Rabbit 2',
        background: 'assets/1.jpg',
        poster: 'assets/poster1.jpg',
        id: 1,
        releaseDate: '27th Mar 2020',
        director: 'Will Gluck',
        cast: 'James Corden, Margot Robbie, Rose Byrne, Domhnall Gleeson',
        synopsis: 'Peter Rabbit and his bunny buddies are back, along with Bea and new husband Thomas McGregor.' +
          ' But Peter is tired of his reputation for mischief and runs away from the countryside where he bumps into an old, ' +
          'adventure-loving friend of his father’s. ' +
          'James Corden, Rose Byrne, Margot Robbie, and Domhnall Gleeson reprise their roles in this funny new part-animated adventure, ' +
          'directed by Will Gluck, based on the stories by Beatrix Potter.',
        genres: ['Family', 'Action', 'Adventure', 'Animation', 'Fantasy'],
        pageId: 1
      },
      {
        title: 'Mulan',
        background: 'assets/2.jpg',
        poster: 'assets/poster2.jpg',
        id: 2,
        releaseDate: '27th Mar 2020',
        director: 'Niki Caro',
        cast: 'Yifei Liu',
        synopsis: 'When the Emperor of China issues a decree that one man per family must' +
          ' serve in the Imperial Army to defend the country from Northern invaders, Hua Mulan,' +
          ' the eldest daughter of an honored warrior, steps in to take the place of her ailing father.' +
          ' Masquerading as a man, Hua Jun, she is tested every step of the way and must harness her ' +
          'inner-strength and embrace her true potential. It is an epic journey that will ' +
          'transform her into an honored warrior and earn her the respect of a grateful nation...' +
          ' and a proud father. "Mulan" features a celebrated international cast that ' +
          'includes: Yifei Liu as Mulan; Donnie Yen as Commander Tung; Jason Scott Lee as Bori' +
          ' Khan; Yoson An as Cheng Honghui; with Gong Li as Xianniang and Jet Li as the Emperor. The film ' +
          'is directed by Niki Caro from a screenplay by Rick Jaffa & Amanda Silver and Elizabeth Martin &' +
          ' Lauren Hynek based on the narrative poem "The Ballad of Mulan.',
        genres: ['Animation', 'War', 'Family', 'Drama'],
        pageId: 2
      },
      {
        title: 'Black Widow',
        background: 'assets/3.jpg',
        poster: 'assets/poster3.jpg',
        id: 3,
        releaseDate: '1st May 2020',
        director: 'Cate Shortland',
        cast: 'Scarlett Johansson, Rachel Weisz, FLorence Pugh, David Harbour',
        synopsis: 'Black Widow follows Natasha Romanoff in her quests between the films Civil War and Infinity War.',
        genres: ['Action', 'Superhero', 'Science fiction', 'Fantasy', 'Adventure'],
        pageId: 3
      },
      {
        title: 'Wonder Woman 1984',
        background: 'assets/4.jpg',
        poster: 'assets/poster4.jpg',
        id: 4,
        releaseDate: '13th Aug 2020',
        director: 'Patty Jenkins', cast: 'Gal Gadot, Chris Pine, Connie Nielsen, Kristen Wiig, Pedro Pascal',
        synopsis: 'Fast forward to the 1980s as Wonder Woman’s next big screen adventure finds her facing an all-new foe: The Cheetah. “Wonder Woman 1984” will be helmed by acclaimed director Patty Jenkins, and star Gal Gadot in the title role. As previously announced, the film also stars Kristen Wiig in the role of the Super-Villain The Cheetah, as well as Pedro Pascal. And Chris Pine returns as Steve Trevor.',
        genres: ['Action', 'Superhero', 'Fantasy', 'Adventure'],
        pageId: 4
      },
      {
        title: 'Soul',
        background: 'assets/5.jpg',
        poster: '',
        id: 5,
        releaseDate: '19th Jun 2020',
        director: 'Pete Docter',
        cast: 'Jamie Foxx, Tina Fey, Questlove, Phylicia Rashad',
        synopsis: 'Just when Joe thinks his dream might be in reach, a single unexpected step sends him to a fantastical place where he is forced to think again about what it truly means to have soul. That is where he meets and ultimately teams up with 22, a soul who does not think life on Earth is all it is cracked up to be.',
        genres: ['Animation', 'Comedy', 'Drama', 'Adventure', 'Fantasy'],
        pageId: 5
      },
      {
        title: 'No time to die',
        background: 'assets/6.jpg',
        poster: 'assets/poster6.jpg',
        id: 6,
        releaseDate: '12th Nov 2020',
        director: 'Cary Joji Fukunaga',
        cast: 'Daniel Craig, Lashana Lynch, Ana de Armas, Rami Malek, Jeffrey Wright, Naomie Harris, ' +
          'Lea Seydoux, Ben Whishaw, Ralph Fiennes',
        synopsis: 'Universal Pictures International have confirmed that No Time To Die will now be released in the UK in November 2020. All customers who have bought tickets with Vue will be refunded. We are currently processing refunds and aim to refund all tickets as quickly as possible.    Retirement doesn’t suit James Bond. When an old friend turns up to his Jamaican retreat in need of help, the spy is taken on a mission far more treacherous than even he could have expected. Léa Seydoux, Daniel Craig, Ralph Fiennes and Rami Malek star in the 25th film in the Bond series.      Having left active service, James Bond (Daniel Craig) spends his retirement feeling the weight of separation from Madeleine (Léa Seydoux). His solitude is fleeting, though, when Felix Leiter (Jeffrey Wright), an old friend from the CIA, shows up unexpectedly.        ',
        genres: ['Action', 'Thriller', 'Adventure', 'Spy', 'Mystery'],
        pageId: 6
      },
      {
        title: 'Minions 2: the rise of gru',
        background: 'assets/7.jpg',
        poster: 'assets/poster7.jpg',
        id: 7,
        releaseDate: '2nd Jul 2021',
        director: 'Kyle Balda',
        cast: 'Steve Carell',
        synopsis: 'This summer, from the biggest animated franchise in history and global cultural phenomenon, comes the untold story of one 12-year-old s dream to become the world s greatest supervillain, in Minions: The Rise of Gru. In the heart of the 1970s, amid a flurry of feathered hair and flared jeans, Gru (Oscar nominee Steve Carell) is growing up in the suburbs. A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them. Luckily, he gets some mayhem-making backup from his loyal followers, the Minions. Together, Kevin, Stuart, Bob, and Otto - a new Minion sporting braces and a desperate need to please - deploy their skills as they and Gru build their first lair, experiment with their first weapons and pull off their first missions. When the Vicious 6 oust their leader, legendary fighter Wild Knuckles (Oscar winner Alan Arkin), Gru interviews to become their newest member. It doesn t go well (to say the least), and only gets worse after Gru outsmarts them and suddenly finds himself the mortal enemy of the apex of evil. On the run, Gru will turn to an unlikely source for guidance, Wild Knuckles himself, and discover that even bad guys need a little help from their friends.        ',
        genres: ['Animation', 'Comedy', 'Family'],
        pageId: 7
      },
      {
        title: 'Tenet',
        background: 'assets/8.jpg',
        poster: '',
        id: 8,
        releaseDate: '17th Jul 2020',
        director: 'Christopher Nolan',
        cast: 'Robert Pattinson, John David Washington, Elizabeth Debicki, Aaron Taylor-Johnson',
        synopsis: 'He died instead of giving up his colleagues. He passed the test. Now our hero’s needed to help prevent a dangerous threat – something worse than nuclear holocaust. Brought to us by Christopher Nolan, Tenet is a mind-bending action-packed epic starring John David Washington, Elizabeth Debicki and Robert Pattinson.  The passage of time isn’t linear anymore for our hero (John David Washington). He chose to die instead of give up his colleagues. Except he’s not dead anymore and, it appears, he has been recruited into a unit where he’s needed to help save the world. That world, however, isn’t quite how it was before. Things that appear to have happened haven’t at all. Things that seem final are undone. One thing he does know is a word: tenet. It’ll open the right doors and also some wrong ones. Either way, he’ll have to start looking at the world in a new way.         ',
        genres: ['Thriller', 'Adventure', 'Action'],
        pageId: 8
      }
    ];

    const genres: Genre[] = [
      {
        name: 'Adventure',
        id: 1
      },
      {
        name: 'Action',
        id: 2
      },
      {
        name: 'Animation',
        id: 3
      },
      {
        name: 'Comedy',
        id: 4
      },
      {
        name: 'Drama',
        id: 5
      },
      {
        name: 'Fantasy',
        id: 6
      },
      {
        name: 'Family',
        id: 7
      },
      {
        name: 'Science fiction',
        id: 8
      },
      {
        name: 'Spy',
        id: 9
      },
      {
        name: 'Superhero',
        id: 10
      },
      {
        name: 'Mystery',
        id: 11
      },
      {
        name: 'Thriller',
        id: 12
      }
      ];
    const commentPages: CommentSet[] =
    [
    {
      id: 1,
      comments: [
        {
          username: 'Unknown1',
          message: 'From a technical perspective, This movie is extremely potent for long stretches. However, in aspiring to be relevant to current affairs, the film eschews effective simplicity for confused complexity.',
          datePosted: '29 mar 2020',
          score: 0
        },
        {
          username: 'Unknown2',
          message: 'Eddie Marsan makes this radio thriller worth staying tuned into -- his face giving away terror, rage, cunning and panic, often in the same scene.',
          datePosted: '30 mar 2020',
          score: 0
        }
      ]
    },
    {
      id: 2,
      comments: [
        {
          username: 'Unknown1',
          message: 'From a technical perspective, This movie is extremely potent for long stretches. However, in aspiring to be relevant to current affairs, the film eschews effective simplicity for confused complexity.',
          datePosted: '29 mar 2020',
          score: 0
        },
        {
          username: 'Unknown2',
          message: 'Eddie Marsan makes this radio thriller worth staying tuned into -- his face giving away terror, rage, cunning and panic, often in the same scene.',
          datePosted: '30 mar 2020',
          score: 0
        }
      ]
    },
    {
      id: 3,
      comments: [
        {
          username: 'Unknown1',
          message: 'From a technical perspective, This movie is extremely potent for long stretches. However, in aspiring to be relevant to current affairs, the film eschews effective simplicity for confused complexity.',
          datePosted: '29 mar 2020',
          score: 0
        },
        {
          username: 'Unknown2',
          message: 'Eddie Marsan makes this radio thriller worth staying tuned into -- his face giving away terror, rage, cunning and panic, often in the same scene.',
          datePosted: '30 mar 2020',
          score: 0
        }
      ]
    },
    
    {
      id: 4,
      comments: [
        {
          username: 'Unknown1',
          message: 'From a technical perspective, This movie is extremely potent for long stretches. However, in aspiring to be relevant to current affairs, the film eschews effective simplicity for confused complexity.',
          datePosted: '29 mar 2020',
          score: 0
        },
        {
          username: 'Unknown2',
          message: 'Eddie Marsan makes this radio thriller worth staying tuned into -- his face giving away terror, rage, cunning and panic, often in the same scene.',
          datePosted: '30 mar 2020',
          score: 0
        }
      ]
    },
    
    {
      id: 5,
      comments: [
        {
          username: 'Unknown1',
          message: 'From a technical perspective, This movie is extremely potent for long stretches. However, in aspiring to be relevant to current affairs, the film eschews effective simplicity for confused complexity.',
          datePosted: '29 mar 2020',
          score: 0
        },
        {
          username: 'Unknown2',
          message: 'Eddie Marsan makes this radio thriller worth staying tuned into -- his face giving away terror, rage, cunning and panic, often in the same scene.',
          datePosted: '30 mar 2020',
          score: 0
        }
      ]
    },
    
    {
      id: 6,
      comments: [
        {
          username: 'Unknown1',
          message: 'From a technical perspective, This movie is extremely potent for long stretches. However, in aspiring to be relevant to current affairs, the film eschews effective simplicity for confused complexity.',
          datePosted: '29 mar 2020',
          score: 0
        },
        {
          username: 'Unknown2',
          message: 'Eddie Marsan makes this radio thriller worth staying tuned into -- his face giving away terror, rage, cunning and panic, often in the same scene.',
          datePosted: '30 mar 2020',
          score: 0
        }
      ]
    },
    
    {
      id: 7,
      comments: [
        {
          username: 'Unknown1',
          message: 'From a technical perspective, This movie is extremely potent for long stretches. However, in aspiring to be relevant to current affairs, the film eschews effective simplicity for confused complexity.',
          datePosted: '29 mar 2020',
          score: 0
        },
        {
          username: 'Unknown2',
          message: 'Eddie Marsan makes this radio thriller worth staying tuned into -- his face giving away terror, rage, cunning and panic, often in the same scene.',
          datePosted: '30 mar 2020',
          score: 0
        }
      ]
    },
    
    {
      id: 8,
      comments: [
        {
          username: 'Unknown1',
          message: 'From a technical perspective, This movie is extremely potent for long stretches. However, in aspiring to be relevant to current affairs, the film eschews effective simplicity for confused complexity.',
          datePosted: '29 mar 2020',
          score: 0
        },
        {
          username: 'Unknown2',
          message: 'Eddie Marsan makes this radio thriller worth staying tuned into -- his face giving away terror, rage, cunning and panic, often in the same scene.',
          datePosted: '30 mar 2020',
          score: 0
        }
      ]
    },
    ];
    return { movies, genres, commentPages };
  }

  constructor() { }
}
