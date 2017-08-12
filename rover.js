var myRover = {
  position: [0,0],
  direction: 'E'
};


var rows = 10;
var columns = 10;


function createGrid() {
  var tbl = document.createElement("TABLE");
for (var y = 0; y < rows; y++) {
  var tr = document.createElement("tr");
	for (var x = 0; x < columns; x++) {
		var td = document.createElement("td");
		td.setAttribute("id", x + "," + y)
		tr.appendChild(td);
	}
	tbl.appendChild(tr);
}
document.getElementById("table").appendChild(tbl);
}


function goForward(rover) {
  document.getElementById((rover.position[0])+ "," + rover.position[1]).removeChild(document.getElementById("rover"));
  
  switch(rover.direction) {
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]++
      break;
    case 'W':
      rover.position[0]--
      break;
    case 'N':
      rover.position[1]--
      break;
  }
  
  wrap();
  moveArrow();
  tracker();
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBackward(rover) {
  document.getElementById((rover.position[0])+ "," + rover.position[1]).removeChild(document.getElementById("rover"));
  
  switch(rover.direction) {
    case 'W':
      rover.position[0]++
      break;
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]--
      break;
    case 'S':
      rover.position[1]--
      break;
  }
  
  wrap();
  moveArrow();
  tracker();
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }

  document.getElementById("rover").style.transform += "rotate(270deg)";
  tracker();
  console.log("New Rover Direction: [" + rover.direction + "]");
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  }
  
  document.getElementById("rover").style.transform += "rotate(90deg)";
  tracker();
  console.log("New Rover Direction: [" + rover.direction + "]");
}

var arrowNorth = document.createElement("IMG");
arrowNorth.setAttribute("src", "https://github.com/willjthorp/ih-prework-mars-rover/blob/master/East.jpg?raw=true");
arrowNorth.setAttribute("id", "rover");

function initialise() {
	document.getElementById("0,0").appendChild(arrowNorth);
	document.getElementById("startButton").style.display = "none";
	document.getElementById("postracker").style.display = "block";
	document.getElementById("dirtracker").style.display = "block";
	document.getElementById("commands").style.display = "block";
	tracker();
}


function moveArrow() {
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < columns; x++) {
      if (myRover.position[0] + "," + myRover.position[1] == document.getElementById(x + "," + y).id) {
        document.getElementById(x + "," + y).appendChild(arrowNorth);
      }
    }
  }
}

function wrap() {
  if (myRover.position[0] == 10) {
    myRover.position[0] = 0;
  } else if (myRover.position[0] == -1) {
    myRover.position[0] = 9;
  } else if (myRover.position[1] == 10) {
    myRover.position[1] = 0;
  } else if (myRover.position[1] == -1) {
    myRover.position[1] = 9;
  }
}

function tracker() {
  document.getElementById("dirtracker").innerHTML = "Current Direction: " + myRover.direction;
  document.getElementById("postracker").innerHTML = "Current Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]"
}


function command() {
  var commandList = document.getElementById("textField").value;
  for (i = 0; i < commandList.length; i++)
    switch (commandList[i]) {
      case "f":
        goForward(myRover);
        break;
      case "b":
        goBackwards(myRover);
        break;
      case "l":
        turnLeft(myRover);
        break;
      case "r":
        turnRight(myRover);
        break
      default:
        alert("Command(s) not recognised!");
        break;
    }
  commandList = null;
}