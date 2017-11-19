function footballTeams() {

    var name = 'Dynamo Kyiv'
    var championship = 'Ukrainian Preimer League'
    var point = 0  
    var goal = 0  
    
    // private functions
    function matchWin (nameTeam) {
        name = nameTeam
        return point + 3
    }

    function matchLose (nameTeam, nameChempionship) {
        name = nameTeam
        championship = nameChempionship
        return goal + 5
    }
    // public functions
    this.getPoint = function (name) {
        nameTeam = name
        return matchWin(nameTeam)
    }
    this.getGoal = function (name, championship) {
        nameTeam = name
        nameChempionship = championship
        return matchLose(nameTeam, nameChempionship)
    }

    this.getResult = function () {
         return 'Team name : ' + name + '\n'
            + 'Name championship : ' + championship + '\n'
            + 'Points team : ' + point + '\n'
            + 'Goal team : ' + goal
        
    }
    return this
}
var team = new footballTeams()
team.getResult()