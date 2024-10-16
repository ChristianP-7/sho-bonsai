import fetch from 'node-fetch';

async function refreshToken() {
  const clientId = process.env.EBAY_CLIENT_ID;
  const clientSecret = process.env.EBAY_CLIENT_SECRET;
  const refreshToken = process.env.EBAY_REFRESH_TOKEN;

  const url = 'https://api.ebay.com/identity/v1/oauth2/token';

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  const data = await response.json();
  if (data.access_token) {
    console.log('New Access Token:', data.access_token);
    return data.access_token;
  } else {
    throw new Error('Failed to refresh access token');
  }
}

refreshToken().catch(console.error);
