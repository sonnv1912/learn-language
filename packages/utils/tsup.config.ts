import { defineConfig } from 'tsup';

export default defineConfig((options) => {
   return {
      entry: ['src/index.ts'],
      splitting: false,
      dts: true,
      sourcemap: true,
      clean: true,
      tsconfig: 'tsconfig.json',
      loader: {
         '.json': 'copy',
      },
      minify: !options.watch,
   };
});
