import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: false,
  clean: true,
  dts: true,
  treeshake: true,
  minify: true,
  format: ['esm', 'cjs'],
  tsconfig: 'tsconfig.json',
});
