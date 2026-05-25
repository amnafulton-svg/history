# Archive Remotion Renderer

GitHub Actions renderer for zip packages created by Archive Remotion Factory.

## Use

1. Build one or more archive zip files from the Python app.
2. Create a GitHub release, for example `v1`.
3. Upload the generated zip files to that release.
4. Run **Render Archive Release Zips** from the Actions tab.

Recommended workflow inputs:

- `release_tag`: `v1`
- `workers_per_video`: `4`
- `max_total_render_jobs`: `10`

The workflow renders each zip in chunks, stitches the chunks, adds the voice-over and planned SFX, then uploads one final `rendered-archive-videos` artifact.
