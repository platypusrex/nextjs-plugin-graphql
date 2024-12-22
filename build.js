import esbuild from 'esbuild';

const sharedOptions = {
  entryPoints: ['src/index.js'],
  outdir: './dist',
  bundle: false,
  target: ['esnext'],
}

esbuild.buildSync({
  ...sharedOptions,
  format: 'esm',
});

esbuild.buildSync({
  ...sharedOptions,
  format: 'cjs',
  footer: {
    js: 'module.exports = module.exports.default'
  },
  outExtension: { ".js": ".cjs" }
});
