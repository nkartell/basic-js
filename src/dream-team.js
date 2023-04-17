const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let nameTeam = '';

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') continue;

    let firstMember = members[i];
    for (let j = 0; j < members[i].length; j++) {
      if (typeof members[i][j] === null) continue;
      if (members[i][j] === ' ') continue;
      let firstLetter = firstMember[j];
      nameTeam += firstLetter;
      break;
    }
  }
  if (typeof nameTeam !== 'string') return false;

  return nameTeam.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
