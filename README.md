# AWS S3 + CloudFront Portfolio Website

A personal portfolio website deployed on AWS using **Amazon S3 (Static Website Hosting)** and **Amazon CloudFront (CDN)**.

## Live Demo
- CloudFront: https://dc61g20ci9ox4.cloudfront.net/
- S3 Website Endpoint: http://jayveersinh-portfolio-2026.s3-website.ca-central-1.amazonaws.com

## Architecture
User Browser → CloudFront (CDN + HTTPS) → Amazon S3 (Static Website Hosting)

## AWS Services Used
- **Amazon S3** – hosts static files (HTML/CSS/JS)
- **Amazon CloudFront** – CDN distribution, caching, HTTPS delivery

## Key Learnings / Troubleshooting
- Resolved **504 Gateway Timeout** by setting CloudFront origin protocol to **HTTP only** when using the S3 **static website endpoint**.
- Used CloudFront invalidation (`/*`) to refresh cached content after updates.

## Project Files
- `myportfolio.html` – main website page
- `style.css` – website styling
- `script.js` – interactions (mobile nav + footer year)

## How to Deploy (High Level)
1. Create an S3 bucket and upload website files.
2. Enable **Static website hosting** and set `myportfolio.html` as the **Index document**.
3. Create a CloudFront distribution with the S3 website endpoint as origin.
4. Set CloudFront **Origin Protocol Policy = HTTP only** (for S3 website endpoints).
5. Set CloudFront **Default root object = myportfolio.html**.
6. (Optional) Create invalidation `/*` to refresh cache after updates.

## Future Improvements
- Make S3 private using **Origin Access Control (OAC)**
- Add a serverless contact form (**API Gateway + Lambda + DynamoDB**)
- Add custom domain + SSL (**Route 53 + ACM**)
