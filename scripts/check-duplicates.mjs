import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function getHash(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(buf).digest('hex');
}

console.log('--- VERIFICANDO GSLPOES METALICOS EM PUBLIC ---');
const galpoesDir = 'public/assets/images/Gslpoes metalicos';
if (fs.existsSync(galpoesDir)) {
  const files = fs.readdirSync(galpoesDir);
  console.log(`Encontrados ${files.length} arquivos em ${galpoesDir}:`);
  const hashes = new Map();
  files.forEach(f => {
    const full = path.join(galpoesDir, f);
    if (!fs.statSync(full).isFile()) return;
    const h = getHash(full);
    if (hashes.has(h)) {
      console.log(`DUPLICATA ENCONTRADA: ${f} é idêntica a ${hashes.get(h)}`);
    } else {
      hashes.set(h, f);
    }
  });
  console.log(`Total de fotos únicas de galpões: ${hashes.size}`);
}

console.log('\n--- VERIFICANDO TODAS AS PASTAS EM ASSETS/IMAGES ---');
const assetDirs = fs.readdirSync('assets/images').filter(f => fs.statSync(path.join('assets/images', f)).isDirectory());
assetDirs.forEach(dir => {
  const p = path.join('assets/images', dir);
  const files = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isFile());
  const hashes = new Map();
  let dups = 0;
  files.forEach(f => {
    const full = path.join(p, f);
    const h = getHash(full);
    if (hashes.has(h)) {
      console.log(`[${dir}] DUPLICATA: ${f} é idêntico a ${hashes.get(h)}`);
      dups++;
    } else {
      hashes.set(h, f);
    }
  });
  console.log(`Categoria [${dir}]: ${files.length} arquivos no total, ${hashes.size} únicos (${dups} duplicatas).`);
});
