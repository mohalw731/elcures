'use client'

import { Clock, Mail, MapPin, Phone } from "lucide-react"
import 'ol/ol.css'
import { Map, View } from 'ol'
import { Tile as TileLayer } from 'ol/layer'
import { OSM } from 'ol/source'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import { Icon, Style } from 'ol/style'
import { Vector as VectorLayer } from 'ol/layer'
import { Vector as VectorSource } from 'ol/source'
import { fromLonLat } from 'ol/proj'
import { Overlay } from 'ol'

export default function Contact() {
  const position = [18.206330, 59.254260] // Longitude, Latitude (OSM expects Lon, Lat)

  const initializeMap = (mapElement) => {
    // Initialize the map
    const map = new Map({
      target: mapElement,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat(position)),
              }),
            ],
          }),
          style: new Style({
            image: new Icon({
              src: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
              scale: 0.5,
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat(position),
        zoom: 13,
      }),
    })
  }

  return (
    <div className="bg-transparent text-white max-w-7xl mx-auto px-5 py-20">
      <div className="bg-transparent border-none">
        <h2 className="md:text-5xl text-3xl mb-6 text-white">Kom i kontakt med oss</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-base">
              Behöver du hjälpa med installationer? Du når oss genom telefon på vardagar mellan 07:00 - 16:00. Helt du kontaktar oss genom mail så återkopplar vi så snart vi kan.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>08-933 147 50</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>info@leucos.se</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <div>
                  <div>Glustastigenvägen 14</div>
                  <div>138 40 Älta</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <div>Måndag - Fredag:</div>
                  <div>7:00 - 16:00</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] rounded-lg overflow-hidden" ref={(el) => initializeMap(el)} />
        </div>
      </div>
    </div>
  )
}
