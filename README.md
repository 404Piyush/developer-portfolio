# 🚀 Developer Portfolio - Piyush Utkar

A high-impact, modern portfolio website built with React, Vite, and Tailwind CSS to showcase full-stack development skills and attract potential clients and opportunities.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Interactive**: Smooth scrolling, hover effects, and engaging transitions
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Dark Mode**: Toggle between light and dark themes
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Dynamic project filtering and detailed case studies
- **Skills Display**: Comprehensive technical skills with proficiency levels

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Deployment**: Vercel/Netlify ready

## 📧 EmailJS Setup Guide

To make the contact form functional, you need to set up EmailJS (free):

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. Go to Email Services in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Note your **Service ID**

### Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note your **Template ID**

### Step 4: Get Public Key
1. Go to Account > General
2. Copy your **Public Key**

### Step 5: Update the Code
Open `src/components/Contact.jsx` and update these lines:

```javascript
const EMAILJS_SERVICE_ID = "your_service_id_here"
const EMAILJS_TEMPLATE_ID = "your_template_id_here" 
const EMAILJS_PUBLIC_KEY = "your_public_key_here"
```

Replace with your actual EmailJS credentials.

## 🚀 Getting Started

### Installation

   ```bash
# Clone the repository
git clone https://github.com/404Piyush/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
   npm install

# Start development server
npm run dev
   ```

### Available Scripts

   ```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Customization

### Personal Information
Update your details in these files:
- `src/components/Hero.jsx` - Name, title, description
- `src/components/Contact.jsx` - Contact methods and social links
- `src/components/Footer.jsx` - Social links and personal info

### Projects
Edit `src/components/Projects.jsx` to add your actual projects:
- Replace placeholder projects with your real work
- Update GitHub links, live demo links
- Add actual project descriptions and technologies

### Skills
Modify `src/components/Skills.jsx`:
- Update technical skills and proficiency levels
- Add/remove skill categories
- Update featured specializations

## 📱 Contact Information

- **Email**: piyushutkar@outlook.com
- **LinkedIn**: [Piyush Utkar](https://www.linkedin.com/in/piyush-utkar-0489b12b2/)
- **GitHub**: [@404Piyush](https://github.com/404Piyush)
- **Calendly**: [Schedule a Call](https://calendly.com/piyushutkar)

## 🔧 Deployment

This project is configured for easy deployment on both Vercel and Netlify with proper build optimization.

### Netlify (Recommended)

The project includes a `netlify.toml` configuration file for optimal deployment:

**Option 1: Git Integration (Recommended)**
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select the repository
5. Netlify will automatically detect the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node.js version: 18
6. Click "Deploy site"

**Option 2: Manual Upload**
1. Build the project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)
3. Configure custom domain if needed

### Vercel
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy with default settings (Vercel auto-detects Vite projects)

### Pre-Deployment Checklist
- ✅ `.gitignore` configured to exclude `node_modules` and build files
- ✅ `netlify.toml` configured with proper redirects for SPA routing
- ✅ Build command tested locally (`npm run build`)
- ✅ All environment variables configured (EmailJS credentials)
- ✅ Contact form functionality verified

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements, pull requests are welcome.

---

**Built with ❤️ by Piyush Utkar** 