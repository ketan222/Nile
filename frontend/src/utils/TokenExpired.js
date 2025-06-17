function isTokenExpired(token) {
  try {
    const base64Payload = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(base64Payload));
    const exp = decodedPayload.exp;

    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    return exp < now; // true if expired
  } catch (err) {
    return true; // Treat as expired if parsing fails
  }
}

export default isTokenExpired;
