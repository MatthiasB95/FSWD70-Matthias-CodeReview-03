var mydata = teamMembers;

console.log(mydata);

for (i = 0; i < mydata.length; i++) {

	document.getElementById("team").innerHTML += "My name is " + mydata[i].name + " and my email adress is " + mydata[i].email + "<img src = \"" + mydata[i].image +"\"" + "<chr><br>";
}