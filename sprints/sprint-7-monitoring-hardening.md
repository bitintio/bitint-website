# Sprint 7 — Monitoring, Analytics & Production Hardening

## Goal
Add monitoring, error tracking, analytics, and apply final production hardening to ensure the site is reliable, performant, and observable.

---

## Prerequisites
- Sprint 5 completed (SSL and domain configured)
- Sprint 6 completed (CI/CD pipeline working)

---

## Tasks

### 7.1 — Add Google Analytics (GA4)
1. Create a GA4 property at https://analytics.google.com
2. Get the Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add the GA4 script to `index.html` in the `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Alternative (privacy-friendly)**: Use Plausible Analytics or Umami instead.

### 7.2 — Add Uptime Monitoring
Set up a free uptime monitor to get alerts if the site goes down:

**Option A — UptimeRobot (Free)**:
1. Sign up at https://uptimerobot.com
2. Add monitor: HTTPS → `https://bitint.io`
3. Check interval: 5 minutes
4. Alert contacts: Email, Telegram, or Slack

**Option B — Better Stack (Free tier)**:
1. Sign up at https://betterstack.com
2. Add monitor for the homepage and key pages

### 7.3 — Configure Nginx Access & Error Logging
Ensure logs are configured for debugging:

```nginx
# In the main server block
access_log /var/log/nginx/bitint.io.access.log;
error_log /var/log/nginx/bitint.io.error.log;
```

Set up log rotation:
```bash
sudo nano /etc/logrotate.d/nginx
```
```
/var/log/nginx/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        [ -f /var/run/nginx.pid ] && kill -USR1 $(cat /var/run/nginx.pid)
    endscript
}
```

### 7.4 — Server Hardening
```bash
# Install fail2ban to prevent brute force attacks
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# Configure fail2ban for Nginx
sudo nano /etc/fail2ban/jail.local
```
```ini
[nginx-req-limit]
enabled = true
filter = nginx-req-limit
action = iptables-multiport[name=ReqLimit, port="http,https", protocol=tcp]
logpath = /var/log/nginx/bitint.io.error.log
findtime = 600
maxretry = 10
bantime = 7200
```

```bash
sudo systemctl restart fail2ban
```

### 7.5 — Add Rate Limiting in Nginx
Add rate limiting to protect against DDoS and abuse:

```nginx
# At the http level (/etc/nginx/nginx.conf inside the http block)
limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=api:10m rate=5r/s;

# In the server block for bitint.io
location / {
    limit_req zone=general burst=20 nodelay;
    try_files $uri $uri/ /index.html;
}
```

### 7.6 — Performance Optimization
Run a Lighthouse audit and fix any issues:

```bash
# Install Lighthouse CLI (optional, can also use Chrome DevTools)
npx lighthouse https://bitint.io --output=html --output-path=./lighthouse-report.html
```

Common optimizations:
1. **Preload key fonts**: Add to `index.html`:
   ```html
   <link rel="preload" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" as="style">
   ```

2. **Add `loading="lazy"` to below-fold images** (if any are added).

3. **Verify Gzip is working**:
   ```bash
   curl -H "Accept-Encoding: gzip" -I https://bitint.io
   # Should see: Content-Encoding: gzip
   ```

### 7.7 — Automatic Server Updates
```bash
# Install unattended-upgrades for security patches
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

### 7.8 — Backup Strategy
Set up basic backup for server configuration:

```bash
# Create a backup script
sudo nano /home/deploy/backup.sh
```
```bash
#!/bin/bash
BACKUP_DIR="/home/deploy/backups"
DATE=$(date +%Y%m%d)

mkdir -p $BACKUP_DIR

# Backup Nginx config
tar -czf $BACKUP_DIR/nginx-$DATE.tar.gz /etc/nginx/

# Backup site files
tar -czf $BACKUP_DIR/site-$DATE.tar.gz /var/www/bitint.io/

# Backup SSL certs
sudo tar -czf $BACKUP_DIR/ssl-$DATE.tar.gz /etc/letsencrypt/

# Cleanup old backups (keep 30 days)
find $BACKUP_DIR -type f -mtime +30 -delete

echo "Backup completed: $DATE"
```
```bash
chmod +x /home/deploy/backup.sh

# Add to crontab for weekly backups
crontab -e
# Add: 0 3 * * 0 /home/deploy/backup.sh
```

---

## Verification Checklist
- [ ] Google Analytics (or alternative) is tracking pageviews
- [ ] Uptime monitor is active and sends alerts on downtime
- [ ] Nginx access and error logs are being written
- [ ] Log rotation is configured
- [ ] fail2ban is running and configured
- [ ] Rate limiting is active
- [ ] Lighthouse score > 90 for Performance
- [ ] Lighthouse score > 90 for Accessibility
- [ ] Lighthouse score > 90 for SEO
- [ ] Lighthouse score > 90 for Best Practices
- [ ] Unattended upgrades configured
- [ ] Backup script is running via cron
- [ ] SSL Labs test scores A+
- [ ] SecurityHeaders.com test scores A+

---

## Agent Instructions

1. GA4 setup requires the human to create a Google Analytics property
2. Uptime monitoring can be set up independently by the agent if using free services
3. Server hardening (fail2ban, rate limiting) should be tested carefully to avoid locking out legitimate users
4. Run Lighthouse audit as a final step
5. This sprint can be done incrementally — analytics first, monitoring second, hardening third

**This is the final sprint.** After completion, the site is fully deployed, secured, monitored, and maintainable.
