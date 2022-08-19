//example marker
class Marker {
	//standard marker, pass in an image
	//url field is for linking to other pages
	constructor(data) {
		this.data = !!data.name ? data : null
		this.url = !!data.markerUrl ? data.markerUrl : data
		this.position = !!data.position
			? data.position
			: { lat: null, lng: null }

		if (this.url === null) {
			console.log(data)
		}
	}

	setPosition(position) {
		this.position = position
	}

	setIconSize(size) {
		this.size = { height: size.height, width: size.width }
	}

	setIcon(icon) {
		this.icon = icon
	}

	setLabel(label) {
		this.label = label
	}

	setRelated(obj) {
		this.relatedTo = obj
	}

	setColor(color) {
		this.color = color
	}

	createMarker() {
		// Check to see if the marker has a default size property
		let defaultMarkerSize = !!this.size ? this.size : null

		let marker = new google.maps.Marker({
			map: null,
			animation: google.maps.Animation.DROP, // Animation options - BOUNCE & DROP
			position: this.position,
			icon: {
				url: this.url || null,
				scaledSize: !!defaultMarkerSize
					? new google.maps.Size(
							defaultMarkerSize.height,
							defaultMarkerSize.width
					  )
					: new google.maps.Size(30, 33)
			},
			title: !!defaultMarkerSize ? 'Example' : null,
			data: this.data
		})

		marker.addListener('click', function () {
			// Close any open info windows before creating a new one
			if (window.infoWindow !== undefined) {
				window.infoWindow.close()
			}

			/**
			 * If the marker doesn't have data to show the user, do not open an info window
			 *
			 */
			if (marker.data != null) {
				// Set up the info window when clicked
				window.infoWindow = initInfoWindow(marker)
				window.infoWindow.open(map, marker)
			}
		})

		return marker
	}

	initInfoWindow(marker) {
		return new google.maps.InfoWindow({
			content: `<div id="infoWindow">
                        <div>
                            <h1 style="text-align:center;">${marker.data.name}</h1>
                        </div>
                    </div>`
		})
	}
}

export default Marker
