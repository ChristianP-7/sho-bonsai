import fs from 'fs';
import path from 'path';

export async function logAccountDeletion(deletionReason: string) {
  const logMessage = `Eliminación de cuenta - Motivo: ${deletionReason} - Fecha: ${new Date().toISOString()}\n`;
  const logFilePath = path.resolve('logs/deletion-log.txt');

  fs.appendFileSync(logFilePath, logMessage);
}
