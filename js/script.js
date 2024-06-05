const userInfo = {
    firstName: 'Avi',
    lastName: 'Flombaum',
    companyName: 'Flatbook Labs',
    jobTitle: 'Developer Apprentice',
    friend1firstName: 'Joe',
    friend1lastName: 'Burgess',
    friend1companyName: 'Flatbook Labs',
    friend1jobTitle: 'Developer Apprentice',
    friend2firstName: 'Gabe',
    friend2lastName: 'Jackson',
    friend2companyName: 'Flatbook Labs',
    friend2jobTitle: 'Senior Developer',
    project1title: 'Flatbook',
    project1description: 'The premier Flatiron School-based social network in the world.',
    project2title: 'Scuber',
    project2description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
  };
  
  function shallowIterator (target) {
    for (const key in target) {
      console.log(target[key]);
      document.getElementById('container').innerHTML += `<div>${target[key]}</div>`;
    }
  }
  
  shallowIterator(userInfo);