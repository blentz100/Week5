/* Week 5 Assignment - Menu App - Hikes
 * Use at least two classes, at least one array, menu 
 * with the option to create, view and delete element */

class Hikes{
	constructor(name, distance, elevation){
		this.name = name;
		this.distance = distance;
		this.elevation = elevation;
	}
	hikeStats(){
		return `${this.name} is ${this.distance} miles long and has ${this.elevation} feet of elevation gain.`;
	}
}

class Menu{
	constructor(){
		this.hikes = [];
		this.selectedHike = null;
	}
	start(){
		let choice = this.showMenu();
		while (choice != 0){
			switch (choice){
				case '1':
		 			this.addHike();
					break;
				case '2':
					this.viewHike();
					break;
				case '3':
					this.deleteHike();
					break;
				case '4':
					this.viewHikeList();
					break;
				default:
					choice = 0;
			}
		choice = this.showMenu();
		}
	}
	showMenu(){
		return prompt(`Choose one of the following options:
		0) quit
		1) Add a Hike
		2) View a Hike in Detail
		3) Remove a Hike
		4) View All Hikes`);
	}	
	addHike(){
		let hikeName = prompt('Enter the hike name');
		let hikeDistance = prompt('What is the hike distance (in miles)?');
		let hikeElevation = prompt('What is the hike elevation gain (in feet)?');
		this.hikes.push(new Hikes(hikeName,hikeDistance,hikeElevation));
	}
	viewHike(){
		let index = prompt("Enter the index of the hike you'd like to view: ");
		if (index > -1 && index < this.hikes.length){
			this.selectedHike = this.hikes[index];
			window.alert(`${this.selectedHike.name} is ${this.selectedHike.distance} miles long and has ${this.selectedHike.elevation} feet of elevation gain.`);
		}
	}
	viewHikeList(){
		let hikeList = "";
		for (let x = 0; x < this.hikes.length; x++){
			hikeList += x + ')' + this.hikes[x].hikeStats() + "\n";
		}
		alert(hikeList);
	}
	deleteHike(){
		let index = prompt('Enter the index of the hike you would like to remove');
		if (index > -1 && index < this.hikes.length){
			this.hikes.splice(index,1);
		}
	}
}

let menu = new Menu();
menu.start();
