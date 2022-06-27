import { GoogleMap, useLoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import './style.css';
import {useState,useRef, useMemo} from 'react';


export default function MapTest(){
    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
        libraries:['places'],
    })
    if (!isLoaded) return <h1>still loading...</h1>
    return <Map></Map>
}


function Map(){
    const center = useMemo(()=> ({ lat: 25.197351, lng: 55.273647 }), []) 
    const [map, setMap] = useState(/** @type google.maps.map*/ null);
    const [autocomplete, setAutocomplate] = useState(null)
    const [onload, setOnload] = useState(null)

    let address = '';
    let location = { lat:'', lng:''}

    try{
        onload.getPlace().address_components.map((i, key)=> {address += " "+i.long_name;})
        location.lat = onload.getPlace().geometry.location.lat()
        location.lng = onload.getPlace().geometry.location.lng()

        console.log("load: ",onload)
        console.log("add: ",address)
        console.log("location: ",location)

        console.log(autocomplete)
    }catch(err){
        console.log(err)
    }
    
    // /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()

    const clearInput =()=>{
        console.log(map)
    }
    return (
        <div className='container'>

            <GoogleMap zoom={16} center={center} mapContainerClassName='map'
            options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl:false,
            }}
            onLoad={(map) => setMap(map)}
            >
            <Autocomplete 
                onPlaceChanged={setAutocomplate} 
                onLoad={setOnload}>
                <div className="input-group">
                    <input type="text" ref={originRef}  
                        className="form-control rounded-0"  
                        placeholder="Search locations..."/>
                        <span className="input-group-text rounded-0 btn btn-danger" onClick={clearInput}>X</span>

                        <button className='btn btn-primary' 
                            onClick={()=> map.panTo(center)}>
                                <i class="bi bi-geo"></i>
                        </button>
                </div>
            </Autocomplete>
            <Marker position={center}/>
            {location.lng !=='' && <Marker position={location} onLoad={()=> map.panTo(location)}></Marker>}
            </GoogleMap>
            <p>{address}</p>
        </div>
    )
}

