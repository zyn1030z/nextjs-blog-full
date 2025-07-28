# HungPham.dev - Personal Blog

A modern personal blog built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful design with animations and responsive layout.

## 🚀 Features

- **Modern Design**: Beautiful UI with glass morphism effects
- **Responsive**: Works perfectly on all devices
- **Animations**: Smooth animations and hover effects
- **Blog Ready**: Structured for blog content about programming and technology
- **Tech Stack**: Next.js, TypeScript, Tailwind CSS, Golang content

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel (recommended) or GitHub Pages
- **Content**: Programming, Golang, Full-stack development

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nextjs_frontend.git

# Navigate to the project directory
cd nextjs_frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🚀 Deployment

### Method 1: Vercel (Recommended)

1. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

2. **Automatic Deployment**:

   - Every push to `main` branch will trigger deployment
   - Vercel handles all build configuration automatically

3. **Custom Domain**:
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings

### Method 2: GitHub Pages

1. **Switch to GitHub Pages config**:

   ```bash
   # Rename config files
   mv next.config.ts next.config.vercel.ts
   mv next.config.github-pages.ts next.config.ts
   ```

2. **Build and Deploy**:

   ```bash
   npm run build
   # Upload contents of 'out' directory to GitHub Pages
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

## 📁 Project Structure

```
nextjs_frontend/
├── src/
│   ├── app/
│   │   └── page.tsx          # Home page
│   └── ...
├── public/
│   └── background.jpg         # Background image
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow
├── next.config.ts             # Next.js configuration (Vercel)
├── next.config.github-pages.ts # Config for GitHub Pages
├── vercel.json                # Vercel configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json
```

## 🎨 Customization

### Colors and Themes

- Edit `tailwind.config.js` to change color schemes
- Modify animations in the config file

### Content

- Update content in `src/app/page.tsx`
- Add new pages in `src/app/` directory
- Replace `public/background.jpg` with your own image

### Styling

- All styles use Tailwind CSS classes
- Custom animations defined in `tailwind.config.js`

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## 🚀 Quick Deploy

### Vercel (One-click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextjs_frontend)

### Manual Steps

1. Fork this repository
2. Connect to Vercel
3. Deploy automatically

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Website**: [HungPham.dev](https://yourusername.vercel.app)
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

Built with ❤️ using Next.js and Tailwind CSS
