const validateLineup = (lineup) => {
  for (let i = 0; i < lineup.length; i++) {
    let count = lineup[i]
    const salaries = lineup.reduce((totalSum, lineup) => {
      return lineup.salary + totalSum
    }, 0)
    let validSalary = true
    let validPosition = true
    let validTeam = true
    let validGame = true
    let completeLineup = true

    if (count.position['OF'] > 3 && count.position['P', 'C', '1B', '2B', 'SS'] !== 1) {
      validPosition = false
    }
    if (count.teamid < 2) {
      validTeam = false }

    if (count.gameid < 3) {
      validGame = false
    }

    if (salaries > 45000) {
      validSalary = true }

    if (validGame === true && validSalary === true && validTeam === true &&
        validPosition === true) { completeLineup = true }

    return completeLineup
  }
}

module.exports = validateLineup
