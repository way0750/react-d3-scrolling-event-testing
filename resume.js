var resume = [];

resume.push({
  catagoryName: 'contact',
  catagoryHeading: 'This is my contact',
  data: [
    {source: 'Github', link: 'https://github.com/way0750'},
    {source: 'Linkedin', link: 'https://www.linkedin.com/in/way0750'}
  ]
});

resume.push({
  catagoryName: 'projects',
  catagoryHeading: 'Some of my projects',
  projects: [
  {
      name: 'Minesweeper',
      description: 'Solo project, built with React. Redux, D3.js',
      techPicName: 'minsweeper.jpg',
      bottomPic: 'minesweeperBottom.jpg',
      hoverPic: 'minesweeperHover.jpg',
      linkToProject: 'https://landminesweeper.herokuapp.com/'
  },
  {
      name: 'Persona',
      description: 'Personality Evaluation Platform. I was a full stack developer with the emphasis on the front-end',
      techPicName: 'personaTech.jpg',
      bottomPic: 'personaBottom.jpg',
      hoverPic: 'personaHover.gif',
      linkToProject: 'https://whatispersona.herokuapp.com/'
  },
  {
      name: 'Snapcast',
      description: 'Screen sharing App with white board function. I was a full stack developer with the emphasis on the front-end',
      techPicName: 'snapCastTech.jpg',
      bottomPic: 'snapcastBottom.jpg',
      hoverPic: 'snapcastHover.jpg',
      linkToProject: 'https://www.snapcast.xyz/'
  },
  {
      name: 'GitRadio',
      description: 'UI layout over GitHub notification. I was a full stack developer with the emphasis on the front-end',
      techPicName: 'gitradioTech.jpg',
      bottomPic: 'gitradioBottom.jpg',
      hoverPic: 'gitradioHover.jpg',
      linkToProject: 'https://github.com/way0750/kindlingicicle'
  }
  ]
});

resume.push({
  catagoryName: 'myTech',
  catagoryHeading: 'Tech Stack',
  techStackPic: 'allMyTech.png'
});

// algorithm/code sample
// 
// resume.push({
//   catagoryName: 'codeSample',
//   catagoryHeading: 'some of my code sample:',
//   code:[
//   {
//     description: 'these are some popular sorting algorithm that I implemented',
//     link: 'gitHub link right here'
//   },
//   {
//     description: 'there are some popular data structure that I implemented',
//     link: 'gitHub link right here'
//   }
//   ]
//   //underscore.js data structure...
// });

resume.push({
  catagoryName: 'education',
  catagoryHeading: 'Education',
  school: [
  {
    schoolName: 'University of Potsdam in Germany',
    education: 'Certificate for German Language and Culture',
    year: '2011 to 2011',
    schoolPic: 'up.jpg'
  },
  {
    schoolName: 'University of California at Santa Barbara',
    education: 'B.A. Sociology',
    year: '2008 to 2011',
    schoolPic: 'ucsb.jpg'
  }
  ]
});

resume.push({
  catagoryName: 'personal',
  catagoryHeading: 'Some Fun Stuffs',
  factList: [
    {
      fact: "► Grew up in a Souther Chinese village, like the ones you would see in National Graphic Documentaries.",
      pic: 'village.jpg'
    },
    {
      fact: "► Used to do a lot of ball room dance: salsa and swing. Might go back to them in the future",
      pic: 'dance.jpg'
    },
    {
      fact: '► Got my US citizenship back in 2006',
      pic: 'america.jpg'
    },
    {
      fact: "► Studied in Germany and that really changed my life!",
      pic: 'germany.jpg'
    }
  ]
});

module.exports = resume;
