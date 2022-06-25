import { GoogleMap, useLoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import './map.css';
import {useState,useRef, useMemo} from 'react';


export default function MapTest(){
    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: 'AIzaSyAua8DSSTJuQlSM-eKdwQISs6sk_n_TXIw',
        libraries:['places'],
    })
    if (!isLoaded) return <h1>still loading...</h1>
    return <Map></Map>
}


function Map(){
    const center = useMemo(()=> ({ lat: 25.197351, lng: 55.273647 }), []) 
    const [map, setMap] = useState(/** @type google.maps.map*/ null);

    const [autocomplete, setAutocomplate] = useState(null)
    console.log(autocomplete)

    const [onload, setOnload] = useState(null)
    console.log(onload)
    
    // /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()


    return (
        <div className='container p-4'>
            <button className='btn btn-primary mb-2' onClick={()=> map.panTo(center)}>O</button>
            <Autocomplete 
                onPlaceChanged={setAutocomplate} 
                onLoad={setOnload}>
                <div className="input-group mb-2">
                    <input type="text" ref={originRef}  
                        className="form-control rounded-0"  
                        placeholder="Search locations..."/>
                    <span className="input-group-text rounded-0 ">X</span>
                </div>
            </Autocomplete>

            <GoogleMap zoom={16} center={center} mapContainerClassName='map'
            options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl:false,
            }}
            onLoad={(map) => setMap(map)}
            >
            <Marker position={center}/>
            
            </GoogleMap>
        </div>
    )
}