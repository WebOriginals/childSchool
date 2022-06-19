if(document.querySelector("#map")){
	const map = L.map('map')
		.setView({
			lat: 45.063196,
			lng: 38.963716,
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
			lat: 45.063196,
			lng: 38.963716,
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

