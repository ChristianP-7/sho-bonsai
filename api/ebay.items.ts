import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const ebayToken = process.env.EBAY_API_TOKEN; // Usamos la variable de entorno

  if (!ebayToken) {
    return res.status(500).json({ message: 'Token de eBay no configurado' });
  }

  const query = req.query.q || ''; // Parámetro de búsqueda

  try {
    const response = await fetch(
      `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=${query}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ebayToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: 'Error en la API de eBay' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error al hacer la solicitud a eBay:', error);
    res
      .status(500)
      .json({ message: 'Error al comunicarse con la API de eBay' });
  }
}
