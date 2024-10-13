import { VercelRequest, VercelResponse } from '@vercel/node';
import { logAccountDeletion } from '../lib/logger'; // Asumiendo que tienes un logger implementado

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const verificationToken = process.env.VERIFICATION_TOKEN; // Token de verificación de eBay

  if (req.method === 'GET') {
    const queryToken = req.query['verification-token'];

    if (queryToken === verificationToken) {
      return res.status(200).send(queryToken); // Verifica que el token es válido
    } else {
      return res
        .status(400)
        .json({ message: 'Token de verificación inválido' });
    }
  }

  if (req.method === 'POST') {
    const body = req.body;

    if (!body.deletionReason) {
      return res
        .status(400)
        .json({ message: 'Faltan datos requeridos en la solicitud' });
    }

    try {
      await logAccountDeletion(body.deletionReason); // Lógica para registrar la eliminación de la cuenta
      console.log(
        `Notificación de eliminación recibida: ${body.deletionReason}`
      );

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
