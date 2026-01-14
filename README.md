# 🌥️ Node-Contact-App-with-RDSF
```
A simple **Cloud Contact App** built using **Node.js + Express**, containerized with **Docker**, deployed on **AWS EC2**, and connected to **AWS RDS MySQL** database.  
It allows users to submit a username through UI which gets stored in the cloud database.

This project is perfect for **Cloud Computing / DevOps internships** and demonstrates real-world deployment.

---

## 🚀 Features

✔ Node.js + Express backend  
✔ Simple UI (HTML + CSS + JS)  
✔ Stores data in AWS RDS MySQL  
✔ Fully Dockerized  
✔ Deployment on AWS EC2  
✔ Docker image published on Docker Hub  
✔ Auto database create (my_app_db)  
✔ Auto table create (contacts)  

---

## 🛠 Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- AWS RDS (MySQL 8.0)

**Cloud**
- AWS EC2 (Ubuntu)

**Container**
- Docker

**Frontend**
- HTML, CSS, JavaScript

---
```
```
## 📦 Folder Structure

contact-app/
├── server.js
├── package.json
├── Dockerfile
└── public/
├── index.html
├── style.css
└── script.js
```
```
+---------------------+
| User Browser |
+----------+----------+
|
HTTP (80)
|
+----------v----------+
| AWS EC2 Instance |
| (Docker Container) |
| Node.js App |
+----------+----------+
|
3306 Port
|
+----------v----------+
| AWS RDS MySQL |
+---------------------+
```
```
# 🧰 HOW TO RUN
```
```

You can run this project in **three different ways**:
```
```
---

# 🟦 1️⃣ Run Locally (Without Docker)

### Clone Repository

```bash
1 => git clone https://github.com/DevopsbyLalit/Node-Contact-App-with-RDS.git
cd contact-app


2 => Install Dependencies
npm install


3 => Set Environment Variables
export DB_HOST="your-rds-endpoint"
export DB_USER="admin"
export DB_PASSWORD="yourpassword"

4 => Start App
node server.js

5 => Open:

http://localhost:3000
```

```
🐳 2️⃣ Run with Docker (Local Machine)

Build Docker Image

docker build -t yourname/contact-app:1.0 .

``
Run Container
docker run -d -p 80:3000 \
-e DB_HOST="your-rds-endpoint" \
-e DB_USER="admin" \
-e DB_PASSWORD="yourpassword" \
yourname/contact-app:1.0

Open:

http://localhost
```

```
🗃 AWS RDS Setup
Create RDS Database

Go to AWS → RDS

Create Database

Engine: MySQL 8.0

Template: Free-tier

DB Instance: db.t3.micro

Username: admin

Password: ********

Public Access: No

VPC Security Group:

Inbound: MySQL(3306) FROM EC2 Security Group

Database Name: my_app_db

```


```
☁ 3️⃣ Deploy on AWS (Production)
Step 1 — Launch EC2 (Ubuntu)

Region: ap-south-1 (Mumbai)

Instance: t2.micro

Allow:

SSH: 22

HTTP: 80

Connect:

ssh -i key.pem ubuntu@<EC2-Public-IP>

Step 2 — Install Docker on EC2

sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu

Step 3 — Pull Image from Docker Hub

docker pull lalit25/contact-app:1.0

Step 4 — Run Container on EC2

docker run -d -p 80:3000 \
-e DB_HOST="database-1.xxxxxx.ap-south-1.rds.amazonaws.com" \
-e DB_USER="admin" \
-e DB_PASSWORD="yourpassword" \
lalit25/contact-app:1.0

Open in browser:

http://<EC2-Public-IP>
```
```
how to chack data base
```
```
1 > =docker run -it --rm mysql:8.0 \
mysql -h <RDS-ENDPOINT> -u admin -p

2 > = SHOW DATABASES;

3 > = USE my_app_db;

4 > = SHOW TABLES;

5 > = SELECT * FROM contacts;

Output:

+----+--------------+
| id | username     |
+----+--------------+
|  1 | lalit        |
|  2 | admin        |
|  3 | test         |
+----+--------------+
```
```
out-put

```

<img width="736" height="573" alt="Screenshot 2025-12-10 162832" src="https://github.com/user-attachments/assets/0dc180d2-40d8-4e31-8e2e-811951988ef2" />

```


```
<img width="1874" height="916" alt="Screenshot 2025-12-10 165418" src="https://github.com/user-attachments/assets/aa638a2e-e20c-4873-a8aa-9b1a1bc5103f" />

```
```

```

```
<img width="1683" height="191" alt="AWS" src="https://github.com/user-attachments/assets/5d7aa049-49c0-45de-839c-8a6d9291a6d2" />

## 👨‍💻 Author

**Lalit Patil**  
Cloud & DevOps Enthusiast  
Docker Hub: https://hub.docker.com/u/lalit25  
GitHub: https://github.com/DevopsbyLalit

```





