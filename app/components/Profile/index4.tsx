
interface LocationCardProps {
    address?: string;
    mapImageUrl?: string;
    googleMapsUrl?: string;
}

function LocationCard({
    address = 'Kompleks Masjid Manarul Ilmi ITS, Keputih, Kec. Sukolilo, Surabaya',
    mapImageUrl = '/index/map.png',
    googleMapsUrl = 'https://maps.app.goo.gl/DLEhSXZrVVDa4tx29'
}: LocationCardProps) {
    return (
        <div className="w-full max-w-xl mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden bg-white shadow-lg mb-20">
            <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative group"
            >
                <div className="relative h-72 w-full overflow-hidden">
                    <img
                        src={mapImageUrl}
                        alt="Location Map"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-lg font-semibold bg-green-600 px-4 py-2 rounded-full">
                            Lihat di Google Maps
                        </span>
                    </div>
                </div>
            </a>
            <div className="p-6 space-y-3">
                <div className="font-bold text-2xl text-gray-800 mb-2">Lokasi Kantor YMI</div>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {address}
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">Kunjungi Lokasi</span>
                </div>
            </div>
        </div>
    );
}

export default LocationCard;