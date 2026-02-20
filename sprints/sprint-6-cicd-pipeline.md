# Sprint 6 — CI/CD Pipeline & Git Setup

## Goal
Set up a Git repository and automated deployment so that pushing code to the `main` branch automatically builds and deploys to the production server.

---

## Prerequisites
- Sprint 5 completed (site live at `https://bitint.io`)
- GitHub account (or GitLab/Bitbucket)
- SSH access to production server

---

## Tasks

### 6.1 — Initialize Git Repository
On local machine:
```bash
cd "c:\Users\User\Downloads\Georgia\Projects\Bitint\Bitint Website (AI-Google-Studio Originally)"
git init
```

Update `.gitignore`:
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Dependencies
node_modules

# Build output
dist
dist-ssr

# Environment variables
*.local
.env
.env.*

# Editor files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Unneeded
metadata.json
sprints/
```

```bash
git add .
git commit -m "Initial commit: Bitint website production-ready"
```

### 6.2 — Create GitHub Repository
```bash
# Create a private repo on GitHub (via CLI or web interface)
gh repo create bitint/bitint-website --private --source=. --push
# Or manually:
git remote add origin git@github.com:bitint/bitint-website.git
git push -u origin main
```

### 6.3 — Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to server
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          source: "dist/*"
          target: "/var/www/bitint.io"
          strip_components: 1

      - name: Reload Nginx
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: sudo systemctl reload nginx
```

### 6.4 — Configure GitHub Secrets
In the GitHub repository settings → Secrets and variables → Actions, add:

| Secret | Value |
|--------|-------|
| `SERVER_HOST` | Your server IP address |
| `SERVER_USER` | `deploy` |
| `SSH_PRIVATE_KEY` | Contents of deploy user's SSH private key |

### 6.5 — Allow Deploy User to Reload Nginx Without Password
On the server:
```bash
sudo visudo
# Add at the bottom:
deploy ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx
```

### 6.6 — Test the Pipeline
1. Make a small change (e.g., update a text string in `Home.tsx`)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test CI/CD pipeline"
   git push origin main
   ```
3. Go to GitHub → Actions tab → watch the workflow run
4. After completion, visit `https://bitint.io` and verify the change is live

### 6.7 — Add Branch Protection (Optional)
In GitHub → Settings → Branches → Add rule for `main`:
- Require pull request reviews
- Require status checks to pass before merging
- Require branches to be up to date before merging

---

## Alternative: Simple Deploy Script (No GitHub Actions)
If you prefer a simpler approach without CI/CD:

Create `deploy.sh` on the server:
```bash
#!/bin/bash
set -e

DEPLOY_DIR="/var/www/bitint.io"
SOURCE_DIR="/home/deploy/bitint-source"

cd "$SOURCE_DIR"
git pull origin main
npm ci
npm run build
rsync -avz --delete dist/ "$DEPLOY_DIR/"
sudo systemctl reload nginx

echo "✅ Deployed successfully at $(date)"
```

Then just SSH in and run `./deploy.sh`, or set up a webhook to trigger it.

---

## Verification Checklist
- [ ] Git repository initialized with clean `.gitignore`
- [ ] Code pushed to GitHub (private repo)
- [ ] GitHub Actions workflow file exists
- [ ] GitHub Secrets configured (SERVER_HOST, SERVER_USER, SSH_PRIVATE_KEY)
- [ ] Push to `main` triggers automated build
- [ ] Build step succeeds (npm ci + npm run build)
- [ ] Deploy step copies files to server
- [ ] Nginx reload step completes
- [ ] Site at `https://bitint.io` reflects the latest changes
- [ ] No secrets or `.env` files in the repository

---

## Agent Instructions

1. The human must provide GitHub credentials and server SSH keys
2. Ensure `.env.local` is in `.gitignore` before pushing
3. Test the workflow with a small, non-breaking change first
4. If GitHub Actions is not desired, offer the simple deploy script alternative

**Next**: Proceed to Sprint 7.
