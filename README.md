# Kalakadian English Hub

A modern, responsive React website for Kalakadian English Hub with premium animations and professional design.

## Features

- **Modern Design**: Professional UI with premium animations
- **Responsive**: Fully responsive design for all devices
- **Animations**: Smooth fade-in, hover effects using AOS library
- **Premium Styling**: Gradient backgrounds, glass morphism effects
- **Mobile Optimized**: Touch-friendly navigation and layouts

## Tech Stack

- React 19.1.1
- React Router DOM 7.8.2
- AOS (Animate On Scroll) 2.3.4
- CSS3 with modern features
- Responsive Design

## Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd kalakadian-english-hub
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Build for Production

```bash
npm run build
```

## Deployment to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

Or simply connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
src/
├── components/
│   └── Navbar.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Courses.js
│   └── Contact.js
├── styles/
│   ├── Navbar.css
│   ├── Home.css
│   ├── About.css
│   ├── Courses.css
│   └── Contact.css
├── assets/
│   ├── sample-video.mp4
│   ├── staff1.jpg
│   └── staff2.jpg
├── App.js
├── index.js
└── index.css
```

## Pages

- **Home**: Hero section with CTA button and auto-playing video
- **Courses**: 4 course cards (Foundation, Essential, Evolution, Mastery)
- **About**: Staff information with professional cards
- **Contact**: Contact information and form with WhatsApp integration

## Animations

- Fade-in animations on scroll using AOS
- Hover effects on buttons and cards
- Smooth page transitions
- Premium glass morphism effects
- Gradient animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Private project for Kalakadian English Hub