import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import GoogleApiWrapper from "@googlemaps/react-wrapper";
import Geocode from "react-geocode";
import "./style.css";
import { useState } from "react";
// import { useState, useRef, useMemo, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {user_address, user_location} from './store/orderSlice'



// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAP_API_KEY);

const MapTest = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries: ["places"],
    fields: ["place_id", "geometry", "name", "formatted_address"],
  });
  if (!isLoaded) return <h1> Map still loading...</h1>;
  return <Map></Map>;
};
function Map() {
  const [map, setMap] = useState(/** @type google.maps.map*/ null);
  const [autocomplete, setAutoComplete] = useState(null);
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({ lat: 25.197351, lng: 55.273647 });

  const ordering = useSelector((state) => state.Ordering.ordering_process)
  const dispatch = useDispatch();

  /**
   * todo: storing the place, lat and lng while selecting the place
   * !: SetAdress for storing the address
   * !: setLocation for storing lat and lng object
   */
  const onPlaceChanged = () => {
    const location = {};
    location.lat = autocomplete?.getPlace()?.geometry.location.lat();
    location.lng = autocomplete?.getPlace()?.geometry.location.lng();

    setAddress(autocomplete.getPlace().formatted_address ?? "");
    setLocation(location);

    // set location and address to ordering store
    dispatch(user_address(autocomplete.getPlace().formatted_address ?? ""))
    dispatch(user_location(location))
  };

  const hanldeInputClear = ()=>{
    console.log("clicked")
  }
  /**
   *
   * @param {*} autocomplete  object of the place
   * !: setAutoComplete for storing the autocomplete object
   */
  const onLoad = (autocomplete) => {
    setAutoComplete(autocomplete);
  };

  /**
   *
   * @param {*} autocomplete getting the object of placeId, lat and lng
   * todo: storing the location and get the address from the getAddress function
   * !: setLocation for storing the lat and lng obj
   * !: getAddress function for get the places by lat and lng
   */
  const onHandleClick = (autocomplete) => {
    setLocation({
      lat: autocomplete.latLng.lat(),
      lng: autocomplete.latLng.lng(),
    });
    getAddress(autocomplete.latLng.lat(), autocomplete.latLng.lng());
  };

  /**
   *
   * @param {*} latitude for latitune in floating value
   * @param {*} longitude for longitude in floating value
   * todo: get the selected and located place address by Geocode package
   * !: setAddress for storing the address of resulted address
   */
  const getAddress = (latitude, longitude) => {
    // tslint:disable-next-line: new-parens
    // Get address from latitude & longitude.
    Geocode.fromLatLng(latitude, longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        
        setAddress(address);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  /**
   * todo: for get the current allocation lat and lng by navigator
   * !: getAddress for storing the result of current lat and lng
   * !: setLocation for making the maker on that position
   */
  const onHandleLocateMe = () => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          getAddress(pos.lat, pos.lng);
          setLocation(pos);
          // set location and address
          dispatch(user_address(address))
          dispatch(user_location(location))
          map && map.setCenter(pos);
        },
        () => {
          console.log("error");
        }
      );
    }
  };

  /**
   * 
   * @param {*} map value of map on load of map
   * todo: getting the current position by onHandleLocateMe function
   * todo: and storing the map value in setMap
   */
  const mapLoad = (map) => {
    setMap(map);
    // onHandleLocateMe();
  };

  return (
    <div className="container">
      <GoogleMap
        zoom={16}
        center={location}
        mapContainerClassName="map"
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={mapLoad}
        onClick={onHandleClick}
      >
        <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Search locations..."
            />
            {/* <span onClick={hanldeInputClear} className="input-group-text rounded-0 btn btn-danger">X</span> */}

            <button
              className="btn btn-primary bg rounded-0"
              onClick={() => map.panTo(location)}>
              <i className="bi bi-geo"></i>
            </button>
          </div>
        </Autocomplete>
        <Marker position={location} />
        {location?.lng && (
          <Marker
            position={location}
            onLoad={() => map?.panTo(location)}
          ></Marker>
        )}
      </GoogleMap>
      <div className="row">
        <p>{address}</p>
        <div className="col-sm-12 col-md-3"></div>
        <div className="col-sm-12 col-md-6">
          <div className="row p-1">
            <button className="btn btn-success btn-lg" onClick={onHandleLocateMe}>
              Locate Me
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-md-3"></div>
      </div>
    </div>
  );
}

export default MapTest;
