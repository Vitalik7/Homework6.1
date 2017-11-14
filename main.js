

function footballTeams(teamName, championshipName, placeTeam) {

    var name = teamName
    var championship = championshipName
    var place = placeTeam 
    
    
    this.getName = function () {
        console.log(name)
    }

    this.getChampionship = function () {
        console.log(championship)
    }

    this.getPlace = function () {
        console.log(place)
    }
    return function () {
        console.log('Team name : ' + name)
        console.log('Name championship : ' + championship)
        console.log('Place team : ' + place)
    }

}

var footballTeams = new footballTeams('Dynamo Kyiv', 'Ukrainian Premier League', '2')
footballTeams()




