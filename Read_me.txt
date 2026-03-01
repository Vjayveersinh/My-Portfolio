# AWS S3 + CloudFront Portfolio Website

This project is a personal portfolio website deployed on AWS using **Amazon S3 (Static Website Hosting)** and **Amazon CloudFront (CDN)**.

## Live Demo
- CloudFront URL: https://YOUR_CLOUDFRONT_DOMAIN.cloudfront.net  
- S3 Website Endpoint (optional): http://YOUR_BUCKET_WEBSITE_ENDPOINT

## Architecture
User Browser → CloudFront (CDN + HTTPS) → Amazon S3 (Static Website Hosting)

## AWS Services Used
- **Amazon S3** – host static files (HTML/CSS/JS)
- **Amazon CloudFront** – CDN distribution, caching, HTTPS delivery

## Key Learnings / Troubleshooting
- Configured CloudFront origin to use **HTTP** when using the S3 static website endpoint.
- Resolved **504 Gateway Timeout** caused by an origin protocol mismatch (HTTPS → HTTP).

## Project Files
- `index.html` – main website page
- `style.css` – website styling
- `script.js` – optional interactions
- `assets/` – images (if used)

## How to Deploy (High Level)
1. Create an S3 bucket and upload website files.
2. Enable **Static website hosting** and set `index.html` as the entry file.
3. Create a CloudFront distribution with the S3 website endpoint as origin.
4. Set CloudFront **Origin Protocol Policy = HTTP only** (for S3 website endpoints).
5. (Optional) Create invalidation `/*` to refresh cache after updates.

## Future Improvements
- Make S3 private using **Origin Access Control (OAC)**
- Add a **serverless contact form** (API Gateway + Lambda + DynamoDB)
- Add custom domain + SSL (Route 53 + ACM)