# KWM Consulting Website

A modern, responsive website for KWM Consulting - Strategic Advisory for Gas Detection & Industrial Safety Markets.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/kwm-consulting.git
cd kwm-consulting

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The build output will be in the `dist/` folder.

## 📁 Project Structure

```
kwm-consulting/
├── public/                 # Static assets
│   └── logo.png           # Company logo (add your logo here)
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Card.jsx
│   │   ├── Card.css
│   │   ├── CTA.jsx
│   │   ├── CTA.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Icons.jsx
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   └── index.js
│   ├── App.jsx            # Main app component
│   ├── App.css            # App-level styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # This file
```

## 🖼️ Adding Your Logo

Place your logo file at:
```
public/logo.png
```

The logo will automatically be used in the header, footer, and as the favicon.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🌐 Deployment

This project is configured for easy deployment to popular hosting services:

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 🎨 Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --forest: #2d5016;
  --forest-dark: #1f3a0f;
  --sage: #6b8e4e;
  --mint: #a8c896;
  --cream: #faf9f5;
  --gold: #c4a35a;
  /* ... */
}
```

### Fonts

Fonts are loaded from Google Fonts in `index.html`. To change:
1. Update the Google Fonts link in `index.html`
2. Update the font-family declarations in the CSS files

### Content

- Edit component files in `src/components/` to update text content
- Service cards are defined in `src/components/Services.jsx`
- Experience cards are defined in `src/components/Experience.jsx`
- Contact email is in `src/components/ContactModal.jsx`

## 📧 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) for form submissions (free, no backend required).

### Setup Steps:

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email and get a free access key
3. Open `src/components/ContactModal.jsx`
4. Replace `YOUR_ACCESS_KEY` with your actual key:

```javascript
access_key: 'your-actual-key-here',
```

### Features:
- **Form validation** - Required fields with error messages
- **Inquiry types** - Dropdown for Product Strategy, M&A, Market Expansion, etc.
- **Fallback** - If the API fails, it falls back to mailto: link
- **Success state** - Animated confirmation message
- **Accessibility** - Keyboard navigation, focus trap, ESC to close

## 📄 License

MIT License - feel free to use this template for your own projects.

---

**KWM Consulting** - Gas Detection • Safety Instrumentation • Strategy • M&A

