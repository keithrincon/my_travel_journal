export default function Entry({
  title,
  img,
  country,
  googleMapsLink,
  dates,
  text,
}) {
  return (
    <article className='journal-entry'>
      <div className='main-image-container'>
        <img className='main-image' src={img.src} alt={img.alt} />
      </div>
      <div className='info-container'>
        <img
          className='marker'
          src='/assets/Marker.png'
          alt='Map Marker Icon'
        />
        <span className='country'>{country}</span>
        <a href={googleMapsLink}>View on Google Maps</a>
        <h2 className='entry-title'>{title}</h2>
        <p className='trip-dates'>{dates}</p>
        <p className='entry-text'>{text}</p>
      </div>
    </article>
  );
}
// title:
// Mount Fuji

// country:
// Japan

// googleMapsLink:
// https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu

// dates:
// 12 Jan, 2021 - 24 Jan, 2021

// text:
// Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.

// Location:
// Japan

// Google Maps Link:
// https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu

// Dates:
// 12 Jan, 2021 - 24 Jan, 2021

// Text:
// Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
