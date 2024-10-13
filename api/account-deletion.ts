import { VercelRequest, VercelResponse } from '@vercel/node';
import { logAccountDeletion } from '../lib/logger';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Cargar el verification token desde las variables de entorno
  const verificationToken = process.env.EBAY_VERIFICATION_TOKEN;

  if (req.method === 'POST') {
    const body = req.body;

    if (!body.deletionReason) {
      return res
        .status(400)
        .json({ message: 'Faltan datos requeridos en la solicitud' });
    }

    try {
      // Registrar la razón de eliminación de cuenta
      await logAccountDeletion(body.deletionReason);
      console.log(
        `Notificación de eliminación recibida: ${body.deletionReason}`
      );

      // Responder con el token de verificación en la cabecera
      res.setHeader('x-ebay-verification-token', verificationToken);

      // Responder con éxito
      res.status(200).json({ message: 'Notificación procesada correctamente' });
    } catch (error) {
      console.error('Error al procesar la notificación de eliminación:', error);
      res.status(500).json({
        message: 'Error interno del servidor al procesar la solicitud',
      });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
