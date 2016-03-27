var resume = [];

resume.push({
  catagoryName: 'contact',
  catagoryHeading: 'This is my contact',
  data: {
    firstName: 'Way',
    lastName: 'Huang',
    linkedin: 'some linkedin'
  }
});

resume.push({
  catagoryName: 'projects',
  catagoryHeading: 'here are some of my projects',
  projects: [
  {
      name: 'minsweeper',
      description: 'aksf aufhjk jdhjk hajhj adjfhajkh  sjkh asjhk sdajkh sdakhjsf',
      pic: 'link to pic'
  },
  {
      name: 'persona',
      description: 'aksf aufhjk jdhjk hajhj adjfhajkh  sjkh asjhk sdajkh sdakhjsf',
      pic: 'link to pic'
  },
  {
      name: 'snapcast',
      description: 'aksf aufhjk jdhjk hajhj adjfhajkh  sjkh asjhk sdajkh sdakhjsf',
      pic: 'link to pic'
  }
  ]
});

resume.push({
  catagoryName: 'myTech',
  catagoryHeading: 'some of the technologies that I work with',
  strong: {
    es6: 'link to icon' 
  },
  experienced: {
    chai: 'link to icon'
  }
});


// algorithm/code sample
resume.push({
  catagoryName: 'codeSample',
  catagoryHeading: 'code sample, how I code:',
  code:[
  {
    description: 'these are some popular sorting algorithm that I implemented',
    link: 'gitHub liknk right here'
  }
  ]
  //underscore.js data structure...
});

resume.push({
  catagoryName: 'education',
  catagoryHeading: 'education',
  school: [
  {
    schoolName: 'University of Potsdam',
    education: 'certificate for...',
    year: '2011 to 2011'
  }
  ]
});

resume.push({
  catagoryName: 'personal',
  catagoryHeading: 'some fun facts about me'
});

module.exports = resume;
