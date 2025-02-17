## This is a workflow testing project

Keywords for the project:
 - Pre-building a testbed
 - SvelteKit
 - Linting
 - TS type checking
 - Vitest unit testing
 - Playwright E2E testing

### On PR to main, we run a check_and_test GitHub Action workflow job:
For testing, a pre-built Docker image with playwright and all needed dependencies are used. This image is created the first time, and then cached on subsequent runs until dependencies change. Then you just bump the version and it re-builds automatically.

The speedup associated with caching is immense. From 5min 56sec without caching to 46sec with caching.

I also tested out parallellizing jobs in the testing phase; running type checking, linting, unit tests, playwright tests and a production build test in separate jobs. It was a lot slower, and took around 2minutes (vs. 46sec in series).

### On push to main (in pratice a merge of a PR)
We build and release. Buildinging, publishing the image and generating release notes is only done after testing has passed and the PR is merged.

