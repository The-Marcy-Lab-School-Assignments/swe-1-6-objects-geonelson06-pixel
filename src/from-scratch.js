const coolGreeting = (person) => {
  if (person.isCool) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  } else {
    return `Greetings ${person.name}, how have you been lately?`;
  }

};

const haveBirthday = (person) => {
  person.age += 1;

};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.name = spyHandle;

};

const carMaker = (name, maker, year) => {
  return {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false
  };

};

const weAreNotFriends = (person) => {
  return person.friends.pop();

};

const listHobbies = (person) => {
  for (let hobby of person.hobbies) {
    console.log(`${person.name} likes ${hobby}.`);
  }

};

const getNextOpponent = (team) => {
  if (team.matches.length === 0) return null;
  return team.matches[0].teamName;

};

const listAllKeys = (obj) => {
  return Object.keys(obj);

};

const listAllValues = (obj) => {
  return Object.values(obj);

};

const convertToMatrix = (arrOfObjects) => {
  if (arrOfObjects.length === 0) return [];

  const keys = Object.keys(arrOfObjects[0]);
  const matrix = [keys];

  for (let obj of arrOfObjects) {
    const values = keys.map(key => obj[key]);
    matrix.push(values);
  }

  return matrix;

};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
