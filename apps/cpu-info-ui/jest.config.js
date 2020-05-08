module.exports = {
  name: 'cpu-info-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cpu-info-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
