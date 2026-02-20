# Sprint 4 — Ubuntu Server Setup & Initial Deployment

## Goal
Set up the Ubuntu remote server, deploy the built static site, and verify it's accessible via the server's IP address.

---

## Prerequisites
- Sprint 1 completed (project builds with `npm run build`)
- Ubuntu server provisioned (e.g., from DigitalOcean, Hetzner, AWS Lightsail, Linode, etc.)
- SSH access to the server with a sudo-capable user
- Server IP address known

---

## Tasks

### 4.1 — Initial Server Hardening
SSH into the server and run:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Set timezone
sudo timedatectl set-timezone UTC

# Create deploy user (avoid using root)
sudo adduser deploy
sudo usermod -aG sudo deploy

# Set up SSH key for deploy user
sudo mkdir -p /home/deploy/.ssh
# Copy your public key to /home/deploy/.ssh/authorized_keys
sudo chown -R deploy:deploy /home/deploy/.ssh
sudo chmod 700 /home/deploy/.ssh
sudo chmod 600 /home/deploy/.ssh/authorized_keys

# Disable root SSH login and password auth
sudo nano /etc/ssh/sshd_config
# Set: PermitRootLogin no
# Set: PasswordAuthentication no
sudo systemctl restart sshd
```

### 4.2 — Install Firewall (UFW)
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh       # Port 22
sudo ufw allow http      # Port 80
sudo ufw allow https     # Port 443
sudo ufw enable
sudo ufw status
```

### 4.3 — Install Node.js (for building on server)
```bash
# Install Node 20 LTS via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node --version    # Should be v20.x
npm --version
```

### 4.4 — Install Nginx
```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
```
Verify: Visit `http://<SERVER_IP>` in browser → see Nginx welcome page.

### 4.5 — Create Deployment Directory
```bash
sudo mkdir -p /var/www/bitint.io
sudo chown deploy:deploy /var/www/bitint.io
```

### 4.6 — Build & Transfer the Static Site
**On your local machine (Windows):**
```powershell
# Build the production bundle
cd "c:\Users\User\Downloads\Georgia\Projects\Bitint\Bitint Website (AI-Google-Studio Originally)"
npm run build

# Transfer dist/ to server via SCP
scp -r dist/* deploy@<SERVER_IP>:/var/www/bitint.io/
```

**Alternative: Build on the server**
```bash
# On the server, clone or transfer the source code
cd /var/www
git clone <repo-url> bitint-source
cd bitint-source
npm install
npm run build
cp -r dist/* /var/www/bitint.io/
```

### 4.7 — Configure Nginx for Static Site
Create a minimal Nginx config to test:

```bash
sudo nano /etc/nginx/sites-available/bitint.io
```

```nginx
server {
    listen 80;
    server_name _;  # Accept any hostname for now

    root /var/www/bitint.io;
    index index.html;

    # Handle SPA routing — all routes serve index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/bitint.io /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Remove default site
sudo nginx -t                              # Test config
sudo systemctl reload nginx
```

### 4.8 — Verify Deployment
1. Visit `http://<SERVER_IP>` in browser → Home page should load
2. Navigate to `/platform` → Page should load (not 404)
3. Navigate to `/solutions/investigations` → Page should load
4. Refresh on any route → Page should reload correctly (not Nginx 404)
5. Check that CSS is applied and fonts load
6. Check browser console for errors

---

## Verification Checklist
- [ ] SSH access works with `deploy` user
- [ ] UFW firewall is active with HTTP/HTTPS/SSH allowed
- [ ] Node.js and npm are installed
- [ ] Nginx is installed and running
- [ ] `/var/www/bitint.io/` contains `index.html` and `assets/`
- [ ] Site loads at `http://<SERVER_IP>`
- [ ] SPA routing works (direct access to `/platform`, `/solutions`, etc.)
- [ ] Page refresh on any route works (no 404)
- [ ] Static assets (JS, CSS, images) load correctly
- [ ] Security headers present in response

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Nginx shows 403 | Check file permissions: `sudo chown -R www-data:www-data /var/www/bitint.io` |
| Routes return 404 | Ensure `try_files $uri $uri/ /index.html;` is in the config |
| CSS/JS not loading | Check build output paths match the served paths |
| Fonts not loading | Google Fonts are CDN-served, check internet connectivity |

---

## Agent Instructions

1. This sprint requires SSH access to a remote server — the human must provide server IP and credentials
2. Follow tasks in order: security first, then Nginx, then deploy
3. After deploying, visit the site via browser and verify all pages load
4. If building on the server, ensure `node_modules` is not served by Nginx

**Next**: Proceed to Sprint 5.
