function footballTeams(teamName, championshipName, placeTeam) {

    var name = teamName
    var championship = championshipName
    var place = placeTeam 
    
    
    this.name = function () {
        return name
    }

    this.championship = function () {
        return championship
    }

    this.place = function () {
        return place
    }
    return function () {
        console.log('Team name : ' + name)
        console.log('Name championship : ' + championship)
        console.log('Place team : ' + place)
    }
}

var footballTeams = new footballTeams('Dynamo Kyiv', 'Ukrainian Premier League', '2')
footballTeams()




