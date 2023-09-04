export default function getLatLng(placeId) {
    // Get the place ID from the user.
    // const placeId = document.getElementById("place-id").value;
    let newCoordinate = 'oops!'
    const geocoder = { current: null };

    if (typeof window !== 'undefined') {
        if (!document.querySelector('#google-maps')) {
          loadScript(
            `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
            document.querySelector('head'),
            'google-maps',
          );
        }
          }


    const getLatLngAsync = async (placeId) => {
        console.log('1')
        if (!geocoder.current && window.google) {
          geocoder.current = new window.google.maps.Geocoder();
        }
      
        try {
            console.log('2')
            const results = await geocoder.current.geocode({placeId: placeId})
            console.log('results')
            if (results['results'].length > 0)
            {
                const latLng = results['results'][0].geometry.location;
                return  `${latLng.lat()} ${latLng.lng()}`;
            }
            
            // if (status === google.maps.GeocoderStatus.OK) {
            //     return results[0].geometry.location;
            // }
            // else
            // {
            //     throw new Error("Place not found");
            // }

          console.log('3')
        //   const newCoordinate = `${latLng.lat()} ${latLng.lng()}`;
        //   console.log(newCoordinate);
          return 123
        } catch (error) {
          console.log('error!');
          console.log(error);
        }
      };
      
      // Call the asynchronous function
      newCoordinate = getLatLngAsync(placeId);
      console.log('After asynchromous')
      console.log(newCoordinate)

    return newCoordinate
  }