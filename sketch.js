//https://data.brla.gov/Housing-and-Development/Apartment/wtig-th7z/about_data 

let apartments; 
let citizenTable;

let minlat = 30.32379644486961;
let maxlat = 30.559260561666104;
let minlon = -91.22161341694176;
let maxlon = -91.00110703360933;
//(30.32,-91.22)(30.32,-91.0)(30.56,-91.22)(30.56,-91.0)

function preload() {

  citizenTable = loadTable('apartmentsbr.csv', 'header');
  brmap = loadImage('brmap.png');

}

function setup() {
  createCanvas(800, 800);
  imageMode(CORNER);

  image(brmap, 0, 0, width, height); 

  textSize(25);
  textFont('Courier New');
  textStyle(BOLD);
  text("Apartments in Baton Rouge",10,25);
  noStroke();

  apartments = citizenTable.getRows();

  for (let i = 0; i < apartments.length; i++) {
    //coordinates
    let geometry = apartments[i].getString('GEOMETRY');

    // Parse longitude and latitude from the geometry string
    geometry = geometry.replace('POINT (', '').replace(')', '');
    let coords = geometry.split(' '); 
    let longitude = parseFloat(coords[0]);
    let latitude = parseFloat(coords[1]);

    let x = map(longitude, minlon, maxlon, 0, width);
    let y = map(latitude, minlat, maxlat, 0, height);

    fill(250, 185, 279,100); 
    ellipse(x, y, 20, 20);
  }
}
