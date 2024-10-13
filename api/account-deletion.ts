import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const ebayVerificationToken = process.env.EBAY_VERIFICATION_TOKEN;

  if (!ebayVerificationToken) {
    return res
      .status(500)
      .json({ message: 'Verification token no configurado' });
  }

  if (req.method === 'GET') {
    try {
      // Verifica que el query parameter tenga el token correcto de eBay
      const token = req.query.verification_token;

      if (token !== ebayVerificationToken) {
        return res
          .status(400)
          .json({ message: 'Token de verificación incorrecto' });
      }

      // Responder con un código de estado 200 si la verificación es correcta
      res.status(200).json({ message: 'Token de verificación válido' });
    } catch (error) {
      console.error('Error al verificar el token:', error);
      res.status(500).json({ message: 'Error al procesar la verificación' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
