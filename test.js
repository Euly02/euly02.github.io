const fs = require('fs');
const html = fs.readFileSync('./index.html', 'utf8');

if (html.includes('<h1>Hola Mundo</h1>')) {
  console.log('✅ Prueba unitaria pasada');
  process.exit(0);
} else {
  console.error('❌ Prueba unitaria fallida');
  process.exit(1);
}