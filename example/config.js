const mapKey = Keys.mapKey;

const ocdlaInfoWindow = {
  content: `
        <h1>OCDLA</h1>
    `,
};

// Starting/default position for the center of the map (Vancouver, WA)
const startingMapPosition = {
  latitude: 44.04457,
  longitude: -123.09078,
};

// Set up a MapConfiguration object
const config = {
  apiKey: mapKey,
  target: "map",
  //repository: repository, // Where to get data consumed by the Map.
  mapOptions: {
    zoom: 6,
    center: {
      lat: startingMapPosition.latitude,
      lng: startingMapPosition.longitude,
    },
    //styles: startTheme.getTheme(),
    defaultMarkerStyles: {
      icon: {
        scaledSize: {
          height: 70,
          width: 80,
        },
      },
    },
    ocdlaInfoWindow: ocdlaInfoWindow,
  },
  enableHighAccuracy: true,
};

/*
	  memberTypes = "null", A", "N", "R", "S", "L", "LL",
	null = Academic Members (typically law students),
	A = Admin/Exec/Private Investigator (licensed)
	N = NonLawyer (Professional Member)
	R = Regular Members (practicing lawyers)
	S = Sustaining Members (paid extra fee for annual perks)
	L = Lifetime Members (paid extra fee for lifetime membership)
	LL = Law Library (could have a membership)
*/
// This config is used to assist sorting all members into each perspective feature (feature.name.data)
const featureLabelConfig = {
  null: "academic",
  N: "nonlawyer",
  R: "regular",
  S: "sustaining",
  L: "lifetime",
  H: "honored",
  W: "expertWitness",
};

const cache = [];

//By placing document.getElementById("toolbarOptions").style.display="block"; in the last fetch call you will not load the filters until the data is loaded
const mapinit = [
  function() {
    cache["examples"] = Promise.resolve({ "hello": "world", "foo": "bar" });
  },
];


//populates features with data
function populateData()
{
  $examples = cache["examples"];

    return $examples;
}

//custom datasources
const features = {
  example: {
    name: "example",
    label: "example",
    markerLabel: "E",
    data: [],
    status: "E",
    markerStyle: "./marker.png",
    datasource: populateData,
  },
};