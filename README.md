# Remy Chiesa - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing design work, case studies, and professional experience. Features a clean dark/light theme design with smooth animations and mobile-first responsive layout.

## 🚀 Features

### Design & User Experience

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dark/Light Theme Support** - Automatic theme switching with smooth transitions
- **Mobile-First Approach** - Designed primarily for mobile devices, enhanced for larger screens
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Modern UI Components** - Clean, professional design with glassmorphism effects

### Sections & Components

- **Responsive Navigation** - Collapsible hamburger menu for mobile devices
- **Hero Section** - Introduction with profile image and call-to-action
- **Case Studies** - Alternating layout showcasing work with category badges
- **Testimonials** - Client feedback in elegant card layout
- **Recent Work** - Portfolio grid with hover effects
- **Contact Form** - Functional form with validation using React Hook Form & Zod
- **Comprehensive Footer** - Complete site navigation, social links, and contact info

### Technical Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hook Form** with Zod validation
- **Optimized Images** with Next.js Image component
- **SEO Optimized** with proper meta tags and semantic HTML
- **Performance Optimized** with lazy loading and code splitting

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Icons:** React Icons
- **UI Components:** Shadcn/ui
- **Notifications:** Sonner

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Chiesa14/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Add your content**

   - Replace images in `/public/images/` with your portfolio images
   - Update social media links in components
   - Customize content in each section component

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Breakpoints

The website uses a mobile-first approach with the following breakpoints:

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (sm to lg)
- **Desktop:** > 1024px (lg+)

### Key Responsive Features:

- Navigation collapses to hamburger menu on mobile
- Case studies stack vertically on smaller screens
- Testimonials adjust from 2 columns to 1 column
- Form fields optimize for touch interaction
- Images scale appropriately across devices

## 🎨 Customization

### Colors & Themes

The website supports dark/light themes. Main colors are defined in:

- Background: `#080808` (dark) / `white` (light)
- Navigation: `#1B1B1B`
- Text: `#9C9C9C` (secondary) / `black/white` (primary)
- Accent colors for categories: Blue, Green, Orange, Sky

### Adding New Case Studies

Update the `caseStudies` array in `ListCaseStudies.tsx`:

```typescript
{
  category: "YourCategory",
  title: "Project Title",
  description: "Project description...",
  coverImage: "/images/your-image.png",
}
```

### Modifying Contact Form

The contact form uses Zod for validation. Update the schema in `GetInTouch.tsx`:

```typescript
const contactSchema = z.object({
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});
```

## 🖼️ Image Optimization

- All images use Next.js `Image` component for optimization
- Images should be placed in `/public/images/`
- Recommended formats: WebP, JPEG, PNG
- The system includes fallbacks for failed image loads

## 📧 Contact Form Setup

The contact form is ready to use with client-side validation. To make it functional:

1. Set up a backend API endpoint
2. Update the `onSubmit` function in `GetInTouch.tsx`
3. Configure email service (NodeMailer, SendGrid, etc.)

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Deployment Options

- **Netlify:** Connect GitHub repository
- **AWS Amplify:** Follow AWS deployment guide
- **Self-hosted:** Build with `npm run build` and serve the `out` directory

## 📊 Performance Features

- **Image Optimization:** Automatic image optimization and lazy loading
- **Code Splitting:** Automatic code splitting with Next.js
- **Font Optimization:** Uses `next/font` for optimal font loading
- **SEO Optimized:** Semantic HTML and proper meta tags
- **Core Web Vitals:** Optimized for Google's Core Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Remy Chiesa - [@chiesa14](https://instagram.com/ti.sho.k)

Project Link: [https://github.com/Chiesa14/portfolio](https://github.com/Chiesa14/portfolio)

---

**Built with ❤️ using Next.js and Tailwind CSS**
