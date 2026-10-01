import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function getHash(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(buf).digest('hex');
}

const allFolders = [
  'assets/images/alambrados',
  'assets/images/escadas',
  'assets/images/gradil',
  'assets/images/mezanino',
  'assets/images/pergolados',
  'public/assets/images/Gslpoes metalicos'
];

const globalHashes = new Map();

allFolders.forEach(folder => {
  if (!fs.existsSync(folder)) return;
  const files = fs.readdirSync(folder);
  files.forEach(f => {
    const full = path.join(folder, f);
    if (!fs.statSync(full).isFile()) return;
    const h = getHash(full);
    if (globalHashes.has(h)) {
      console.log(`[DUPLICATA ENTRE PASTAS] ${full} é idêntica a ${globalHashes.get(h)}`);
    } else {
      globalHashes.set(h, full);
    }
  });
});

console.log(`Verificação global concluída. Total de imagens únicas no projeto: ${globalHashes.size}`);
