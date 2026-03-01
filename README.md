
# 🌐 AWS Static Portfolio Website – S3 + CloudFront Deployment

## 🚀 Live Demo

- **CloudFront URL:** https://dc61g20ci9ox4.cloudfront.net/ 
- **S3 Website Endpoint:** http://jayveersinh-portfolio-2026.s3-website.ca-central-1.amazonaws.com  

---

## 📌 Project Overview

This project demonstrates how to host a secure, globally distributed static website using **Amazon S3** and **Amazon CloudFront**.

The goal of this project was to:

- Deploy a static HTML/CSS portfolio website
- Configure CloudFront for global content delivery
- Resolve real-world HTTPS and caching issues
- Understand TTL and cache invalidation behavior

This simulates a production-ready static website deployment architecture.

---

## 🏗️ Architecture

### Architecture Flow

1. User requests the website  
2. The request is routed to **CloudFront**  
3. CloudFront fetches content from the **S3 static website endpoint**  
4. Content is cached at global edge locations  
5. HTTPS is handled by CloudFront  

---

## 🛠️ AWS Services Used

- **Amazon S3** – Static website hosting  
- **Amazon CloudFront** – Content Delivery Network (CDN)  
- **IAM** – Access management  
- **Route 53** (Future improvement)  
- **AWS Certificate Manager (ACM)** (Future improvement)  

---

## ⚙️ S3 Configuration

- Enabled static website hosting  
- Configured index document: `myportfolio.html`  
- Applied bucket policy for public read access  

---

## ⚙️ CloudFront Configuration

- Origin domain: **S3 website endpoint (HTTP only)**  
- Viewer Protocol Policy: Redirect HTTP to HTTPS  
- Default Root Object: `myportfolio.html`  
- Configured cache behavior with optimized TTL  

---

## 🧠 Real-World Issue Solved

### ❌ Problem: 504 Gateway Timeout

Initially, CloudFront origin protocol policy was set to:

However, **S3 static website endpoints do NOT support HTTPS**.

### ✅ Solution

Changed the origin protocol policy to:


This resolved the 504 Gateway Timeout error immediately.

---

## 🔄 Cache & Invalidation Learning

After updating files in S3, changes were not reflecting immediately due to CloudFront caching.

### Why?

CloudFront caches content based on **TTL (Time To Live)**.

### Solution

Created a CloudFront invalidation:


This forced CloudFront to fetch updated files from S3.

### Key Learning

- TTL controls how long content remains cached  
- Invalidation forces immediate refresh  
- Asset versioning is a better long-term solution than frequent invalidations  

---

## 🔮 Future Improvements

- Add custom domain using Route 53  
- Enable SSL certificate via AWS Certificate Manager  
- Implement CI/CD pipeline using GitHub Actions  
- Add backend contact form using AWS Lambda + API Gateway  
- Secure S3 using Origin Access Control (OAC) instead of public bucket access  

---

## 🎯 Key Takeaways

- Gained hands-on experience with CloudFront origin behavior  
- Understood HTTPS limitations of S3 website endpoints  
- Learned caching mechanisms and TTL behavior  
- Built a production-style static deployment architecture  

---

## 👨‍💻 Author

**Jayveersinh Vihol**  
AWS Cloud Practitioner  
Aspiring Cloud Engineer  

- GitHub: https://github.com/Vjayveersinh  
- LinkedIn: https://www.linkedin.com/in/jayveersinh-vihol-4855a31b7/ 

