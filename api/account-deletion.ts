import { VercelRequest, VercelResponse } from '@vercel/node';
import { logAccountDeletion } from '../lib/logger';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const body = req.body;

    if (!body.deletionReason) {
      return res
        .status(400)
        .json({ message: 'Faltan datos requeridos en la solicitud' });
    }

    try {
      await logAccountDeletion(body.deletionReason);
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
