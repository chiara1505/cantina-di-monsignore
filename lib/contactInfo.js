export const CONTACT_ADDRESS = "Piazza Sant'Antonio n. 5, Castiglione di Sicilia (ME)";

export const CONTACT_MAP_COORDS = {
  lat: 37.8826811,
  lng: 15.1230643,
};

/** Pin fisso su Piazza Sant'Antonio (coordinate OpenStreetMap). */
export const CONTACT_MAP_EMBED_URL =
  `https://www.google.com/maps?q=${CONTACT_MAP_COORDS.lat},${CONTACT_MAP_COORDS.lng}+(${encodeURIComponent("Piazza Sant'Antonio 5, Castiglione di Sicilia")})&hl=it&z=18&output=embed`;

export const CONTACT_MAP_LINK_URL =
  `https://www.google.com/maps/search/?api=1&query=${CONTACT_MAP_COORDS.lat},${CONTACT_MAP_COORDS.lng}`;
