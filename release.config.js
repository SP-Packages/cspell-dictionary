export default {
  branches: ['main'],
  repositoryUrl: 'https://github.com/SP-Packages/cspell-dictionary.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          {
            type: 'build',
            release: 'patch'
          }
        ]
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits'
      }
    ],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        // Regenerating package-lock.json
        prepareCmd: 'npm install --package-lock-only'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        message:
          'chore(release): v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github'
  ]
};
