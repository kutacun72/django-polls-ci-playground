module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "python publish/bump_version.py \"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "VERSION"],
        message: "chore(release): \ [skip ci]\n\n\"
      }
    ],
    "@semantic-release/github"
  ]
};
