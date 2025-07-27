// next.config.js
import { loadConfig } from 'next/dist/server/config';
import { register } from 'esbuild-register/dist/node';

register();

// eslint-disable-next-line @typescript-eslint/no-require-imports
export default require('./next.config.ts').default;
