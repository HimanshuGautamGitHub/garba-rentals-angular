# Laxmi Dresses 👗

Angular 17 + Bootstrap 5 website for **Traditional Indian Dress Rentals**.

## 🚀 Features
- Angular 17 (pinned) + TypeScript 5.3
- Bootstrap 5 styling
- Pages: Home, Collections, Booking, FAQ, Contact, How It Works
- Shared components: Navbar, Footer, WhatsApp Button
- Mock data services for collections, booking, FAQ
- Responsive design
- Docker + Nginx for deployment
- Netlify-ready with redirects

## ▶️ Run Locally
```bash
npm install
npm start
```
Visit: http://localhost:4200

## 🏗️ Build for Production
```bash
ng build --configuration production
```

## 🐳 Docker
```bash
docker build -t laxmi-dresses .
docker run -p 8080:80 laxmi-dresses
```

Visit: http://localhost:8080
