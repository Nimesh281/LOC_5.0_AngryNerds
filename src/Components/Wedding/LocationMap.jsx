import React, { Component } from 'react';

class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapsLoaded: false
    };
    this.loadMap = this.loadMap.bind(this);
  }

  componentDidMount() {
    if (!this.state.mapsLoaded) {
      this.loadMap();
      this.setState({ mapsLoaded: true });
    }
  }

  loadMap() {
    const { locations } = this.props;
    const mapsScript = document.createElement('script');
    mapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    window.document.body.appendChild(mapsScript);
    mapsScript.addEventListener('load', () => {
      const mapOptions = {
        zoom: 12,
        center: { lat: 37.7749, lng: -122.4194 } // Default to San Francisco
      };
      const maps = new window.google.maps.Map(document.getElementById('map'), mapOptions);
      locations.forEach(location => {
        const marker = new window.google.maps.Marker({
          position: location.coordinates,
          map: maps,
          title: location.name
        });
      });
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default LocationMap;
