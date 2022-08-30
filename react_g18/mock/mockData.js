
// Task 1
// change the LifecycleFuncComponent and LifecycleClassComponent
// to receive a property called incrementor that increments the value
// to counter + incrementor instead of counter + 1


// Task 2
// movies shoud be in App.js
const movies = [
    {name:'Back to the Future',genre:'Sci-fi',plot:'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
    year: 1985,imdbLink:'https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0',imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Back_to_the_Future_Part_II.jpg/220px-Back_to_the_Future_Part_II.jpg'},
    {name:'The Dark Knight',genre:'Crime',plot:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
    ,year:2008,imdbLink:'https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0',imageUrl: 'https://variety.com/wp-content/uploads/2022/03/dark-knight-batman-split.jpg?w=1000'},
    {name:'Star Wars',genre:'Sci-fi',plot: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
    year:1977,imdbLink:'https://www.imdb.com/title/tt0076759/?ref_=nv_sr_srsg_9',imageUrl:'https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755'}
  ]

// print movies into class and functional components 
// cards or whatever, where imdbLink is mapped to <a>
// and  imageUrl is mapped to <img>