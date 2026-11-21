# Time tracking

Use a timer, countdowns, and alarms alongside note time tracking, summaries, and auditable session exports.

This is an optional [Denote](https://github.com/denote-io/denote) plugin. Its
user guide is [guide.md](guide.md); Denote shows the same guide in
**Settings → Plugins**.

## Install

Enable **Time tracking** from **Settings → Plugins** in Denote. Denote
downloads the release archive pinned in its built-in catalog, verifies its size
and SHA-256 digest, and only then loads the plugin in an isolated worker.

## Development

Use the Node.js version in `.node-version`.

```bash
npm ci
npm run typecheck
npm test
npm run check     # manifest, guide, and import boundaries
npm run package   # build, verify, and write .plugin-artifacts/denote.time-tracking-<version>.tgz
```

`npm run dev` rebuilds `.plugin-dev/denote.time-tracking.tgz` on every change. Load it
in Denote Development from **Settings → Plugins → Load local plugin archive**.
Disable the local plugin before loading rebuilt bytes with the same ID.

The build uses the [Denote plugin SDK](https://github.com/denote-io/denote-plugin-sdk)
and its `denote-plugin` command. It produces a single self-contained worker
bundle and a reproducible archive with fixed file modes, no timestamps, and LF
text. The pinned Vite and Rolldown versions keep archive bytes stable.

## Release

Published versions are immutable. To release a change:

1. Bump `version` in both `plugin.json` and `package.json`.
2. Merge to `main` with CI passing.
3. Run the **Release** workflow. It builds, verifies, and publishes
   `denote.time-tracking-<version>.tgz` as the `v<version>` release asset.
4. Update the plugin's entry in Denote's catalog to the new release so the
   application offers it.

## History

This plugin was developed in `plugins/time-tracking` of
[mbianchidev/denote](https://github.com/mbianchidev/denote), whose history for
this directory is preserved here. `releases.json` records every version
published from that repository, with its source commit there, original asset
URL, size, and SHA-256 digest.

[v0.2.1](https://github.com/denote-io/denote-time-tracking/releases/tag/v0.2.1) republishes the identical archive Denote
already offers (`02d515c52ab0e72071a62cbad74e16ca4868ddbad19711418598cfbfa5b29cfd`, 26903 bytes),
built from source commit `75937a627d157f7698703485a5cb686cab9bb576` in
mbianchidev/denote. The source in this repository is unchanged from that commit.

CI rebuilds that version and checks it matches the published archive byte for
byte, so a source change cannot ship without a version bump.

## License

[MIT](LICENSE)
