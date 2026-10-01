import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// 1. Processar pasta de galpões se existir em public ou assets
const sourceGalpoes = 'public/assets/images/Gslpoes metalicos';
const targetGalpoesAssets = 'assets/images/galpoes';
const targetGalpoesPublic = 'public/assets/images/galpoes';

if (fs.existsSync(sourceGalpoes)) {
  fs.mkdirSync(targetGalpoesAssets, { recursive: true });
  fs.mkdirSync(targetGalpoesPublic, { recursive: true });

  const rawFiles = fs.readdirSync(sourceGalpoes).filter(f => fs.statSync(path.join(sourceGalpoes, f)).isFile());
  
  // Organizar e renomear galpoes de 1 a N
  let index = 1;
  rawFiles.forEach(file => {
    const srcPath = path.join(sourceGalpoes, file);
    const buf = fs.readFileSync(srcPath);
    const destFileName = `galpao-${index}.jpg`;

    fs.writeFileSync(path.join(targetGalpoesAssets, destFileName), buf);
    fs.writeFileSync(path.join(targetGalpoesPublic, destFileName), buf);
    console.log(`[Galpões] ${file} -> ${destFileName}`);
    index++;
  });

  // Remover a pasta com nome antigo
  fs.rmSync(sourceGalpoes, { recursive: true, force: true });
  console.log(`Pasta antiga [${sourceGalpoes}] removida com sucesso.`);
}

// 2. Sincronizar todas as categorias entre assets/images e public/assets/images
const categories = [
  { folder: 'assets/images/galpoes', prefix: 'galpao' },
  { folder: 'assets/images/mezanino', prefix: 'mezanino' },
  { folder: 'assets/images/pergolados', prefix: 'pergolado' },
  { folder: 'assets/images/gradil', prefix: 'gradil' },
  { folder: 'assets/images/alambrados', prefix: 'alambrado' },
  { folder: 'assets/images/escadas', prefix: 'escada' }
];

categories.forEach(({ folder, prefix }) => {
  const publicFolder = folder.replace('assets/', 'public/assets/');
  fs.mkdirSync(folder, { recursive: true });
  fs.mkdirSync(publicFolder, { recursive: true });

  // Coletar arquivos de ambas as pastas
  const allFiles = new Map();

  [folder, publicFolder].forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach(file => {
        const full = path.join(dir, file);
        if (fs.statSync(full).isFile()) {
          const buf = fs.readFileSync(full);
          const hash = crypto.createHash('md5').update(buf).digest('hex');
          if (!allFiles.has(hash)) {
            allFiles.set(hash, { buf, originalName: file });
          }
        }
      });
    }
  });

  console.log(`\nProcessando categoria: ${prefix} (${allFiles.size} imagens únicas)`);

  // Limpar ambas as pastas
  [folder, publicFolder].forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach(f => fs.unlinkSync(path.join(dir, f)));
    }
  });

  // Gravar ordenado
  let idx = 1;
  allFiles.forEach(({ buf }) => {
    const filename = `${prefix}-${idx}.jpg`;
    fs.writeFileSync(path.join(folder, filename), buf);
    fs.writeFileSync(path.join(publicFolder, filename), buf);
    idx++;
  });
  console.log(`  -> Sincronizadas ${idx - 1} fotos em ${folder} e ${publicFolder}`);
});

// 3. Sincronizar Logos e Favicons
const logoFiles = [
  'logo.png',
  'logo-01.png',
  'logo 01.png',
  'logo.svg',
  'favicon.png',
  'favicon.ico',
  'favicon.svg',
  'favicon.jpeg'
];

logoFiles.forEach(file => {
  const assetFile = path.join('assets/images', file);
  const publicFile = path.join('public/assets/images', file);

  let buf = null;
  if (fs.existsSync(assetFile)) {
    buf = fs.readFileSync(assetFile);
  } else if (fs.existsSync(publicFile)) {
    buf = fs.readFileSync(publicFile);
  }

  if (buf) {
    fs.writeFileSync(assetFile, buf);
    fs.writeFileSync(publicFile, buf);
  }
});

console.log('\nSincronização e organização de imagens concluída com sucesso!');
