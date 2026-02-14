# Branching and Merging Sample Data

## Standard Branch Naming Patterns

Use clear, descriptive branch names with prefixes:

- `feature/<short-description>` for new features
- `bugfix/<short-description>` for bug fixes
- `hotfix/<short-description>` for urgent production fixes
- `chore/<short-description>` for maintenance tasks
- `release/<version>` for release preparation

### Examples

- `feature/user-login`
- `bugfix/fix-navbar-overlap`
- `hotfix/payment-timeout`
- `chore/update-dependencies`
- `release/v1.2.0`

## Sample Branching Workflow

```bash
# 1) Create and switch to a new branch
git checkout -b feature/branching-merging-sample

# 2) Make your changes
git add .
git commit -m "Add branching and merging sample document"

# 3) Push branch to remote
git push -u origin feature/branching-merging-sample
```

## Sample Merging Workflow

```bash
# 1) Switch to target branch (usually main)
git checkout main

# 2) Update local main
git pull origin main

# 3) Merge feature branch
git merge feature/branching-merging-sample

# 4) Push merged changes
git push origin main
```

## Notes

- Keep branch names lowercase.
- Use hyphens (`-`) between words.
- Keep one purpose per branch for easier review.
