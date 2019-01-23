const packager = require('electron-packager');
const path = require('path');

const options = {
  dir: '.',
  out: 'build',
  executableName: 'headset',
  icon: path.join(__dirname, '..', 'icons', 'Headset.ico'),
  platform: 'win32',
  arch: 'ia32',
  asar: true,
  prune: true,
  overwrite: true,
  ignore: [/^Procfile$/, /^\/sig$/, /^\/bin$/],
};

packager(options)
  .then(appPaths => console.log(`Successfully created package at ${appPaths}`))
  .catch((err) => {
    console.error('Error creating package');
    console.error(err, err.stack);
    process.exit(1);
  });
