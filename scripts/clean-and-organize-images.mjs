import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// 1. Organizar imagens únicas em cada categoria
const categories = [
  { folder: 'assets/images/mezanino', prefix: 'mezanino' },
  { folder: 'assets/images/pergolados', prefix: 'pergolado' },
  { folder: 'assets/images/gradil', prefix: 'gradil' },
  { folder: 'assets/images/alambrados', prefix: 'alambrado' },
  { folder: 'assets/images/escadas', prefix: 'escada' }
];

categories.forEach(({ folder, prefix }) => {
  if (!fs.existsSync(folder)) return;
  const files = fs.readdirSync(folder).filter(f => !fs.statSync(path.join(folder, f)).isDirectory());
  const hashMap = new Map();

  // Agrupar por hash
  files.forEach(file => {
    const fullPath = path.join(folder, file);
    const buf = fs.readFileSync(fullPath);
    const hash = crypto.createHash('md5').update(buf).digest('hex');
    if (!hashMap.has(hash)) {
      hashMap.set(hash, { buf, originalFile: file });
    }
  });

  console.log(`\nOrganizando ${prefix}: ${hashMap.size} imagens únicas encontradas.`);

  // Criar pasta temporária para salvar imagens únicas
  const tempDir = path.join(folder, '_temp_unique');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  let index = 1;
  hashMap.forEach(({ buf, originalFile }) => {
    const targetFile = `${prefix}-${index}.jpg`;
    fs.writeFileSync(path.join(tempDir, targetFile), buf);
    console.log(`  Foto única #${index} salva a partir de [${originalFile}] -> ${targetFile}`);
    index++;
  });

  // Limpar pasta original de arquivos antigos e mover os novos
  files.forEach(f => {
    fs.unlinkSync(path.join(folder, f));
  });

  const uniqueFiles = fs.readdirSync(tempDir);
  uniqueFiles.forEach(f => {
    fs.copyFileSync(path.join(tempDir, f), path.join(folder, f));
  });

  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log(`Concluído para ${prefix}: ${uniqueFiles.length} arquivos no total.`);
});

// 2. Garantir cópias da Logo e Favicon
const possibleLogoSrc = [
  'public/assets/images/logo 01.png',
  'public/assets/images/logo-01.png',
  'public/assets/logo principal.png',
  'public/assets/images/logo.png',
  'assets/images/favicon.png'
];

let logoBuffer = null;
for (const src of possibleLogoSrc) {
  if (fs.existsSync(src)) {
    logoBuffer = fs.readFileSync(src);
    console.log(`Logo encontrada em: ${src} (${logoBuffer.length} bytes)`);
    break;
  }
}

if (logoBuffer) {
  const targetLogoFiles = [
    'assets/images/logo-01.png',
    'assets/images/logo 01.png',
    'assets/images/logo.png',
    'assets/images/favicon.png',
    'assets/images/favicon.ico'
  ];

  targetLogoFiles.forEach(target => {
    const targetPath = path.resolve(target);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, logoBuffer);
    console.log(`Salvo: ${target}`);
  });
}
