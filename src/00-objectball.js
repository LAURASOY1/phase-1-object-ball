
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 11,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}


console.log(gameObject());

function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  
  console.log(homeTeamName());


  function numPointsScored(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            const players = gameData[team].players;
            if (players.hasOwnProperty(playerName)) {
                return players[playerName].points;
            }
        }
    }
    return "Player not found";
}

function shoeSize(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            const players = gameData[team].players;
            if (players.hasOwnProperty(playerName)) {
                return players[playerName].shoe;
            }
        }
    }
    return "Player not found";
}

function teamColors(teamName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            if (gameData[team].teamName === teamName) {
                return gameData[team].colors;
            }
        }
    }
    return "Team not found";
}

function teamNames() {
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.away.teamName];
}

function playerNumbers(teamName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            if (gameData[team].teamName === teamName) {
                const players = gameData[team].players;
                return Object.values(players).map(player => player.number);
            }
        }
    }
    return "Team not found";
}

function playerStats(playerName) {
    const gameData = gameObject();
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            const players = gameData[team].players;
            if (players.hasOwnProperty(playerName)) {
                return players[playerName];
            }
        }
    }
    return "Player not found";
}

function bigShoeRebounds() {
    const gameData = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            const players = gameData[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player)) {
                    if (players[player].shoe > largestShoeSize) {
                        largestShoeSize = players[player].shoe;
                        rebounds = players[player].rebounds;
                    }
                }
            }
        }
    }
    return rebounds;
}

// Bonus Questions

function mostPointsScored() {
    const gameData = gameObject();
    let maxPoints = 0;
    let playerName = "";
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            const players = gameData[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player)) {
                    if (players[player].points > maxPoints) {
                        maxPoints = players[player].points;
                        playerName = player;
                    }
                }
            }
        }
    }
    return playerName;
}

function winningTeam() {
    const gameData = gameObject();
    let maxPoints = 0;
    let winningTeam = "";
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            let totalPoints = 0;
            const players = gameData[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player)) {
                    totalPoints += players[player].points;
                }
            }
            if (totalPoints > maxPoints) {
                maxPoints = totalPoints;
                winningTeam = gameData[team].teamName;
            }
        }
    }
    return winningTeam;
}

function playerWithLongestName() {
    const gameData = gameObject();
    let longestName = "";
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            const players = gameData[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player)) {
                    if (player.length > longestName.length) {
                        longestName = player;
                    }
                }
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    const longName = playerWithLongestName();
    const gameData = gameObject();
    let maxSteals = 0;
    let playerNameWithMaxSteals = "";
    for (const team in gameData) {
        if (gameData.hasOwnProperty(team)) {
            const players = gameData[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player)) {
                    if (players[player].steals > maxSteals) {
                        maxSteals = players[player].steals;
                        playerNameWithMaxSteals = player;
                    }
                }
            }
        }
    }
    return playerNameWithMaxSteals === longName;
}



console.log(playerNumbers("Brooklyn Nets")); 
console.log(playerStats("Alan Anderson")); 
console.log(bigShoeRebounds()); 
console.log(mostPointsScored());
console.log(winningTeam()); 
console.log(playerWithLongestName()); 
console.log(doesLongNameStealATon()); 
