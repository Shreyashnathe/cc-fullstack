# ============================================
# MERN STACK DEPLOYMENT WITH NGINX REVERSE PROXY
# UBUNTU EC2
# ============================================


# --------------------------------
# STEP 1 — Update Ubuntu
# --------------------------------

sudo apt update


# --------------------------------
# STEP 2 — Install Node.js, NPM and Git
# --------------------------------

sudo apt install -y nodejs npm git


# --------------------------------
# STEP 3 — Clone GitHub Repository
# --------------------------------

git clone https://github.com/Shreyashnathe/cc-fullstack.git


# --------------------------------
# STEP 4 — Go To Project Folder
# --------------------------------

cd cc-fullstack/task-manager-fullstack


# --------------------------------
# STEP 5 — Backend Setup
# --------------------------------

cd backend


# Create/Edit .env file
nano .env


# Add inside .env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


# Save:
# Ctrl + O
# Enter
# Ctrl + X


# --------------------------------
# STEP 6 — Install Backend Packages
# --------------------------------

npm install


# --------------------------------
# STEP 7 — Test Backend
# --------------------------------

node server.js


# Expected:
# Connected to MongoDB
# Server running on port 5000


# Stop server:
# Ctrl + C


# --------------------------------
# STEP 8 — Frontend Setup
# --------------------------------

cd ../frontend


# Install frontend packages
npm install


# Build frontend
npm run build


# --------------------------------
# STEP 9 — Install PM2
# --------------------------------

sudo npm install -g pm2


# --------------------------------
# STEP 10 — Start Backend With PM2
# --------------------------------

cd ../backend

pm2 start server.js --name task-manager-backend


# Check process
pm2 list


# Save PM2
pm2 save


# Enable auto-start after reboot
pm2 startup

# Run the generated command

pm2 save


# --------------------------------
# STEP 11 — Install NGINX
# --------------------------------

sudo apt install -y nginx


# Start nginx
sudo systemctl start nginx


# Enable nginx after reboot
sudo systemctl enable nginx


# --------------------------------
# STEP 12 — Configure Reverse Proxy
# --------------------------------

sudo nano /etc/nginx/sites-available/default


# Remove all existing content
# Paste this:


server {

    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:5000;

        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';

        proxy_set_header Host $host;

        proxy_cache_bypass $http_upgrade;
    }
}


# Save:
# Ctrl + O
# Enter
# Ctrl + X


# --------------------------------
# STEP 13 — Test NGINX Configuration
# --------------------------------

sudo nginx -t


# Expected:
# syntax is ok
# test is successful


# --------------------------------
# STEP 14 — Restart NGINX
# --------------------------------

sudo systemctl restart nginx


# --------------------------------
# STEP 15 — Open AWS Security Group Ports
# --------------------------------

# Add inbound rules:

# SSH     -> 22
# HTTP    -> 80
# HTTPS   -> 443

# Source:
# 0.0.0.0/0


# --------------------------------
# STEP 16 — Check Backend Logs
# --------------------------------

pm2 logs


# Exit:
# Ctrl + C


# --------------------------------
# STEP 17 — Access Application
# --------------------------------

# Instead of:

# http://100.31.154.39:5000

# Now use:

http://100.31.154.39


# ============================================
# USEFUL COMMANDS
# ============================================

# Check PM2 apps
pm2 list

# Restart backend
pm2 restart task-manager-backend

# Stop backend
pm2 stop task-manager-backend

# Delete backend
pm2 delete task-manager-backend

# View backend logs
pm2 logs

# Restart nginx
sudo systemctl restart nginx

# Check nginx status
sudo systemctl status nginx
