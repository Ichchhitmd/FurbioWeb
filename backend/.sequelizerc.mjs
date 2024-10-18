import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  config: path.resolve(__dirname, 'src', 'config', 'config.mjs'),
  'models-path': path.resolve(__dirname, 'src', 'models'),
  'seeders-path': path.resolve(__dirname, 'src', 'seeders'),
  'migrations-path': path.resolve(__dirname, 'migrations'),
};
