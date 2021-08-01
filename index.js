const validateLineup = (lineup) => {
  const salaries = lineup.reduce((totalSum, lineup) => {
    return lineup.salary + totalSum
  }, 0)

  for (let i = 0; i < lineup.length; i++) {
    let count = lineup[i]

    if (count.position['OF'] <= 3 && count.position['P', 'C', '1B', '2B', 'SS'] === 1) {
      return true
    }
    if (count.teamid >= 2 || count.gameid >= 3) {
      return true
    }
    if (salaries <= 45000) {
      return true }

    else { return false }
  }
}

module.exports = validateLineup
