# Sprint 5 — Domain, SSL & Nginx Production Config

## Goal
Connect the `bitint.io` domain to the server, set up SSL/TLS certificates with Let's Encrypt, and finalize the Nginx production configuration.

---

## Prerequisites
- Sprint 4 completed (site accessible via server IP)
- Domain `bitint.io` registered and accessible via domain registrar
- Access to DNS management for `bitint.io`

---

## Tasks

### 5.1 — Configure DNS Records
In your domain registrar's DNS management panel (e.g., Namecheap, Cloudflare, GoDaddy):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | `<SERVER_IP>` | 300 |
| A | `www` | `<SERVER_IP>` | 300 |
| CNAME | `www` | `bitint.io` | 300 |

> **Note**: If using Cloudflare, initially set DNS-only (gray cloud) to allow Let's Encrypt HTTP validation. You can enable proxying later.

Wait for DNS propagation (5-30 minutes). Verify:
```bash
dig bitint.io +short
# Should return your server IP

dig www.bitint.io +short
# Should return your server IP or CNAME
```

### 5.2 — Install Certbot (Let's Encrypt)
```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 5.3 — Update Nginx Config for Domain
Update `/etc/nginx/sites-available/bitint.io`:

```nginx
server {
    listen 80;
    server_name bitint.io www.bitint.io;

    root /var/www/bitint.io;
    index index.html;

    # Handle SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets aggressively
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Verify: `http://bitint.io` loads the site.

### 5.4 — Obtain SSL Certificate
```bash
sudo certbot --nginx -d bitint.io -d www.bitint.io
```

Follow the prompts:
1. Enter email for renewal notifications
2. Agree to TOS
3. Choose whether to share email with EFF
4. Certbot will automatically modify the Nginx config to add SSL

### 5.5 — Finalize Nginx Production Config
After Certbot runs, update the config for production hardening:

```bash
sudo nano /etc/nginx/sites-available/bitint.io
```

```nginx
# Redirect HTTP → HTTPS
server {
    listen 80;
    server_name bitint.io www.bitint.io;
    return 301 https://$host$request_uri;
}

# Redirect www → non-www (canonical)
server {
    listen 443 ssl http2;
    server_name www.bitint.io;

    ssl_certificate /etc/letsencrypt/live/bitint.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bitint.io/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    return 301 https://bitint.io$request_uri;
}

# Main site
server {
    listen 443 ssl http2;
    server_name bitint.io;

    ssl_certificate /etc/letsencrypt/live/bitint.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bitint.io/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    root /var/www/bitint.io;
    index index.html;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/javascript
        application/javascript
        application/json
        application/xml
        application/xml+rss
        image/svg+xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://formspree.io;" always;

    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
```

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 5.6 — Set Up Auto-Renewal for SSL
```bash
# Test renewal
sudo certbot renew --dry-run

# Certbot installs a systemd timer automatically, verify:
sudo systemctl status certbot.timer
```

### 5.7 — Configure MX Records for Email (Optional)
If Bitint needs to receive email at `@bitint.io` (e.g., for security@bitint.io):

Add MX records via your email provider (e.g., Google Workspace, Fastmail, Zoho Mail):

| Type | Name | Value | Priority |
|------|------|-------|----------|
| MX | `@` | `<mail-provider>.com` | 10 |
| TXT | `@` | `v=spf1 include:<provider> ~all` | - |

---

## Verification Checklist
- [ ] `http://bitint.io` → redirects to `https://bitint.io`
- [ ] `http://www.bitint.io` → redirects to `https://bitint.io`
- [ ] `https://www.bitint.io` → redirects to `https://bitint.io`
- [ ] `https://bitint.io` → loads the site with valid SSL
- [ ] SSL certificate is valid (check with browser padlock or `curl -I https://bitint.io`)
- [ ] All pages load correctly via HTTPS
- [ ] SPA routing works on direct URL access (e.g., `https://bitint.io/platform`)
- [ ] Gzip compression active (check response headers for `Content-Encoding: gzip`)
- [ ] Security headers present (use https://securityheaders.com to verify)
- [ ] HSTS header is present
- [ ] Certificate auto-renewal test passes
- [ ] No mixed content warnings in browser console
- [ ] SSL Labs test (https://www.ssllabs.com/ssltest/) scores A or A+

---

## Agent Instructions

1. DNS changes require human action at the domain registrar — ask the human to set DNS records
2. Wait for DNS propagation before running Certbot
3. After Certbot, manually edit the Nginx config for the full production setup
4. Test all redirect scenarios (http→https, www→non-www)
5. The CSP header may need adjustments if external resources change

**Next**: Proceed to Sprint 6.
