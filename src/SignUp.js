import React from 'react'
import {Map, TileLayer, GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import './SignUp.css'
import wards from '../data/wards.json'

class SignUp extends React.Component {
  render () {
    const mapCenter = [39.9528, -75.1638]
    const mapZoom = 11
    const tileUrl = 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png'
    const tileAttribution = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    return (
      <div className='row columns'>
        <h3>Sign up to upload a sample ballot on election day</h3>
        <Map center={mapCenter} zoom={mapZoom}>
          <TileLayer url={tileUrl} attribution={tileAttribution} />
          <GeoJSON data={wards} onEachFeature={this.onEachFeature} />
        </Map>
      </div>
    )
  }
  
  onEachFeature (feature, layer) {
    const ward = feature.properties.WARD_NUM
    layer.bindPopup(ward)
  }
}

export default SignUp