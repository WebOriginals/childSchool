if(document.querySelector("#map")){
	const map = L.map('map')
		.setView({
			lat: 59.96831,
			lng: 30.31748,
		}, 16);

	L.tileLayer(
		'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	).addTo(map);

	const mainPinIcon = L.icon({
		iconUrl: '/img/svg/point-map.svg',
		iconSize: [70, 70],
		iconAnchor: [37, 65],
	});

	const mainPinMarker = L.marker(
		{
			lat: 59.96831,
			lng: 30.31748,
		},
		{
			icon: mainPinIcon,
		},
	);

	mainPinMarker.addTo(map);

	mainPinMarker.on('moveend', (evt) => {
		console.log(evt.target.getLatLng());
	});
}

