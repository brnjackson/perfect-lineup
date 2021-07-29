function validateLineup(lineup) {
  let newObj = {}
  let newArray = []

  if (lineup.salary === lineup.salary) {
    newObj.push(lineup.salary)

    let sum = 0

    for (let value of Object.values(obj)) {
      sum += value
    }

    return sum
  }
  console.log(newObj)

  return newObj
}


// run through each key seperatley


/* [salary - add salaries for all players,
      position - count how many of each position in full lineup,
      game id - make sure there are only 0, 1, 2, 3 players w same gameid
      team id - make sure there are only 0, 1, 2 players w same team id]
      */
// if total salaries are <= 45000 return true
// if there are 2 players or less same teamid return true
// if there are 3 players or less same gameid return true
// if there are exactly 3 OF players return true
// if there are exactly 1 of each player P, C, 1B, 2B, 3B, SS return true

// if all requirements not met return false


module.exports = validateLineup
