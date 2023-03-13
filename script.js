btnSubmitplayes = () => {

    // team a player list
    let teamAplayer1 = document.getElementById("teamAp1").value
    let teamAplayer2 = document.getElementById("teamAp2").value
    let teamAplayer3 = document.getElementById("teamAp3").value
    let teamAplayer4 = document.getElementById("teamAp4").value

    let teamAPN1 = document.getElementById("teamAPN1").innerHTML = teamAplayer1
    let teamAPN2 = document.getElementById("teamAPN2").innerHTML = teamAplayer2
    let teamAPN3 = document.getElementById("teamAPN3").innerHTML = teamAplayer3
    let teamAPN4 = document.getElementById("teamAPN4").innerHTML = teamAplayer4

    console.log(teamAPN1, teamAPN2, teamAPN3, teamAPN4)


    // team b player list
    let teamBplayer1 = document.getElementById("teamBp1").value
    let teamBplayer2 = document.getElementById("teamBp2").value
    let teamBplayer3 = document.getElementById("teamBp3").value
    let teamBplayer4 = document.getElementById("teamBp4").value

    let teamBPN1 = document.getElementById("teamBPN1").innerHTML = teamBplayer1
    let teamBPN2 = document.getElementById("teamBPN2").innerHTML = teamBplayer2
    let teamBPN3 = document.getElementById("teamBPN3").innerHTML = teamBplayer3
    let teamBPN4 = document.getElementById("teamBPN4").innerHTML = teamBplayer4
    console.log(teamBPN1, teamBPN2, teamBPN3, teamBPN4);

    document.getElementById("addPlayers").style.display = "none"
    document.getElementById("teamList").style.display = "block"
}

tossFnc = () => {
    let teamList = ['Team A', 'Team B'];

    let winnerTeamName = Math.floor(Math.random() * teamList.length)
    console.log(winnerTeamName);

    let teamName = teamList[winnerTeamName];
    console.log(teamName);

    document.getElementById("btn_toss").style.display = "none"
    document.getElementById("teamList").style.display = "none"
    document.getElementById("winnerTeamName").innerHTML = "Toss win by " + teamName
    document.getElementById("letsPlay").style.display = "block"


}
