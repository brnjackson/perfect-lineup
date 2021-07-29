const validateLineup = (lineup) => {
  let newArray = []
  let newObj = {}

  lineup.forEach(salaries => {
    if (newObj[salaries.lineup]) {
      newArray.push(salaries.salary)
    } let sum = 0

    for (const [salary] of Object.entries(newObj)) if (lineup.hasOwnProperty(salary)) {
      sum += parseFloat(lineup[salary])
    }

    if (sum <= 45000) {
      return true
    }

    else return false
  })
}



module.exports = validateLineup
