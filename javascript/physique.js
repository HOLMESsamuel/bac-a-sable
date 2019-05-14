function corps(x,y,z,vx,vy,vz,masse,couleur,rayon) {
	this.position = [x,y,z];
	this.vitesse = [vx,vy,vz];
	this.acceleration = [];
	this.nxtPosition = [];
	this.nxtVitesse = [];
	this.nxtAcceleration = [];
	this.masse = masse;
	this.couleur = couleur;
	this.rayon = rayon;
}

var decalageH = document.getElementById('espace').width/2;
var decalageV = document.getElementById('espace').height/2;
var rayonTerre = Math.ceil(document.getElementById('espace').width * 10 / 600);

var Earth = new corps(3.331074501004356E-01,-9.590473020328814E-01,-1.294753571150237E-04,1.599432430885350E-02,5.523465906873589E-03,-8.315910541739975E-07,3.003379447E-6,'rgba(46,58,84,1)',rayonTerre);
var Jupiter = new corps(-5.434632513317845E+00,2.359895152065818E-01,1.205587152741575E-01,-4.148362697501519E-04,-7.182696765113621E-03,3.913415366203666E-05,9.547660356E-4,'rgba(226,162,54,1)',rayonTerre*20);

var objets = [Jupiter, Earth];

draw(objets);



function draw(objets) {
	var nbObjets = objets.length;

	ctx = document.getElementById('espace').getContext('2d');
	ctx.clearRect(0,0,document.getElementById('espace').width ,document.getElementById('espace').height); 

	for(var i=0; i<nbObjets; i++) {
		ctx.fillStyle = objets[i].couleur;
		ctx.beginPath(); 
		ctx.arc(objets[i].position[0]+decalageH,objets[i].position[1]+decalageV,Math.ceil(objets[i].rayon),0,2*Math.PI); 
		console.log(i);
		ctx.fill();
		ctx.closePath();
	}

}