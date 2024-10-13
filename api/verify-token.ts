import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const verificationToken = process.env.VERIFICATION_TOKEN; // Token de verificación de eBay

  if (req.method === 'GET') {
    const queryToken = req.query['verification-token'];

    if (queryToken === verificationToken) {
      return res.status(200).send(queryToken); // Devuelve el token si es correcto
    } else {
      return res
        .status(400)
        .json({ message: 'Token de verificación inválido' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
