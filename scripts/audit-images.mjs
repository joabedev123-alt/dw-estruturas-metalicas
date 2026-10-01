import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// 1. Coletar todas as referências no HTML e scripts
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const scriptFiles = fs.readdirSync('scripts').filter(f => f.endsWith('.mjs')).map(f => 'scripts/' + f);
const allCodeFiles = [...htmlFiles, ...scriptFiles];

const refs = new Map();
allCodeFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/assets\/images\/[^"'`\s>\)]+/g) || [];
  matches.forEach(m => {
    // limpar caracteres extras no final como ; ou ?
    const clean = m.replace(/[;,?]+$/, '');
    if (!refs.has(clean)) refs.set(clean, []);
    refs.get(clean).push(file);
  });
});

console.log('=== REFERÊNCIAS A IMAGENS NO PROJETO ===');
for (const [ref, files] of refs.entries()) {
  const existsAssets = fs.existsSync(ref);
  const existsPublic = fs.existsSync('public/' + ref);
  const status = existsAssets && existsPublic ? 'OK (ambos)' : (existsAssets ? 'OK (assets)' : (existsPublic ? 'OK (public)' : 'FALTANDO'));
  console.log(`[${status}] ${ref} (${files.length} ocorrências)`);
}
