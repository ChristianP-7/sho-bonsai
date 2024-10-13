import { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const verificationToken = process.env.VERIFICATION_TOKEN; // Token de verificación de eBay
  const endpoint = process.env.ENDPOINT_URL || ''; // URL completa del endpoint

  if (req.method === 'GET') {
    const challengeCode = req.query.challenge_code as string;

    if (!challengeCode || !verificationToken || !endpoint) {
      return res.status(400).json({ message: 'Faltan parámetros' });
    }

    try {
      // Crea el hash con SHA-256
      const hash = crypto.createHash('sha256');
      hash.update(challengeCode);
      hash.update(verificationToken);
      hash.update(Buffer.from(endpoint, 'utf-8')); // Convertir endpoint a Buffer

      // Obtiene el hash y lo convierte en formato hexadecimal
      const result = hash.digest('hex');

      // Devuelve el hash como respuesta
      return res.status(200).send(result);
    } catch (error) {
      console.error('Error al generar el hash:', error);
      return res
        .status(500)
        .json({ message: 'Error al procesar la solicitud' });
    }
  } else {
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
