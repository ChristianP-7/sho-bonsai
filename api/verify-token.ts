import { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const verificationToken = process.env.VERIFICATION_TOKEN; // Token de eBay
  const endpoint = process.env.ENDPOINT_URL; // URL completa del endpoint

  if (req.method === 'GET') {
    const challengeCode = req.query.challenge_code as string;

    if (!challengeCode || !verificationToken || !endpoint) {
      return res.status(400).json({ message: 'Faltan parámetros' });
    }

    // Crea el hash con SHA-256
    const hash = crypto.createHash('sha256');
    hash.update(challengeCode);
    hash.update(verificationToken);
    const result = hash.digest(endpoint);

    // Devuelve el hash como respuesta
    return res.status(200).send(result.toString('hex'));
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
