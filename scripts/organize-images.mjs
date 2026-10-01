import fs from 'fs';
import path from 'path';

const categories = [
  { dir: 'assets/images/galpoes', prefix: 'galpao' },
  { dir: 'assets/images/alambrados', prefix: 'alambrado' },
  { dir: 'assets/images/escadas', prefix: 'escada' },
  { dir: 'assets/images/gradil', prefix: 'gradil' },
  { dir: 'assets/images/mezanino', prefix: 'mezanino' },
  { dir: 'assets/images/pergolados', prefix: 'pergolado' }
];

categories.forEach(({ dir, prefix }) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg'));
  let index = 1;
  files.forEach(file => {
    const src = path.join(dir, file);
    const dest = path.join(dir, `${prefix}-${index}.jpg`);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> ${prefix}-${index}.jpg`);
    index++;
  });
});
