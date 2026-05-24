# Contributing to LendSphere

Thank you for your interest in contributing! LendSphere is an open-source peer-to-peer lending platform and we welcome contributions of all kinds.

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/lendsphere.git
   cd lendsphere
   ```
3. **Set up the project** (see [README](README.md) for full setup instructions).
4. **Create a branch** for your change:
   ```bash
   git checkout -b feature/my-feature
   # or
   git checkout -b fix/issue-123
   ```

## Development Workflow

### Backend (Rails)
```bash
bundle install
rails db:create db:migrate db:seed
rails s -p 3000
```

### Frontend (React)
```bash
cd client
npm install
npm start   # runs on port 4000
```

## Submitting a Pull Request

1. Make sure your branch is up to date with `main`:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. Write clear commit messages that explain *why*, not just *what*.
3. Open a PR against `main` and fill out the PR template.
4. A maintainer will review within a few days. Be prepared for feedback.

## Code Standards

- **Ruby:** Follow the [Ruby Style Guide](https://rubystyle.guide/). Run `rubocop` before pushing.
- **JavaScript/React:** Follow the project's ESLint config. Run `npm run lint` before pushing.
- **No commented-out code** in PRs — delete it or open a separate issue.
- **Tests:** Add tests for new features or bug fixes where possible.

## Reporting Bugs

Open a GitHub Issue with:
- A clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Ruby version, Node version)

## Feature Requests

Open a GitHub Issue tagged `enhancement`. Describe the use case and the proposed solution. Discussion is welcome before any implementation work starts.

## Code of Conduct

By participating, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).
