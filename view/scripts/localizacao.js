const botaoBuscar = document.getElementById("botaoBuscar");

var center = [-7.17823297640175, -38.77776149398453];
var map = L.map("map").setView(center, 13);
var icone = L.icon({
  iconUrl: "https://cdn-icons-png.freepik.com/256/3661/3661280.png",
  iconSize: [24, 24],
});
var marker = L.marker(center, {
  draggable: true,
  icon: icone,
}).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

map.on("click", (evt) => {
  marker.setLatLng(evt.latlng);
  map.setView(evt.latlng);
});

map.locate();

map.on("locationfound", (evt) => {
  map.setView(evt.latlng);
  marker.setLatLng(evt.latlng);
});

map.on("dblclick", (evt) => {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${evt.latlng.lat}&lon=${evt.latlng.lng}&format=jsonv2`
  )
    .then((data) => data.json())
    .then((local) => console.log(local.address));
});

botaoBuscar.addEventListener("click", () => {
  const local = document.getElementById("local").value;

  fetch(`https://nominatim.openstreetmap.org/search?q=${local}&format=jsonv2`)
    .then((result) => result.json())
    .then((locais) => {
      if (locais) {
        const ponto = [locais[0].lat, locais[0].lon];
        map.setView(ponto);
        marker.setLatLng(ponto);
      }
    });
  botaoBuscar.addEventListener("click", async () => {
    const local = document.getElementById("local").value;

    try {
      const result = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${local}&format=jsonv2`
      );
      const locais = await result.json();

      if (locais && locais.length > 0) {
        const ponto = [locais[0].lat, locais[0].lon];
        map.setView(ponto);
        marker.setLatLng(ponto);
      } else {
        alert("Local não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar o local:", error);
      alert("Ocorreu um erro ao tentar buscar o local.");
    }
  });
  
});

