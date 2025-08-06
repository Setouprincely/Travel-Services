# Patrick Travel Services Website

A modern, bilingual travel services website built with Next.js, featuring comprehensive travel solutions including visa assistance, study abroad programs, flight booking, housing solutions, and job placement services.

## 🌟 Features

### 🎨 Modern Design
- **Glassmorphism UI** with frosted glass effects
- **Gradient backgrounds** and animated elements
- **Responsive design** that works on all devices
- **Professional typography** with Inter and DM Sans fonts
- **Smooth animations** powered by Framer Motion

### 🌍 Internationalization
- **Bilingual support** (English & French)
- **Dynamic language switching** with persistent preferences
- **Professional translations** for travel industry terminology
- **Seamless language transitions** across all pages

### 🚀 Enhanced User Experience
- **Interactive slideshow** with real travel images
- **Enhanced buttons** with gradient effects and animations
- **Smooth scrolling navigation** with progress indicator
- **WhatsApp integration** for instant communication
- **Functional Google Maps** for office location

### 📱 Service Pages
- **Visa Assistance** - Complete visa application support
- **Study Abroad** - University placement and scholarship guidance
- **Flight Booking** - International flight search and booking
- **Housing Solutions** - Accommodation finder for students and professionals
- **Jobs & Internships** - Global career opportunities

### 🎯 Interactive Elements
- **Animated counters** for statistics
- **Floating particles** and dynamic backgrounds
- **Hover effects** and micro-interactions
- **Form validation** with real-time feedback
- **Loading states** and success animations

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Custom SVG icon library
- **Fonts**: Inter & DM Sans (Google Fonts)
- **Internationalization**: Custom i18n implementation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Setouprincely/Travel-Services.git
   cd Travel-Services
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
patrick-travel-website/
├── public/
│   └── images/           # Static images and assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── visa-assistance/
│   │   ├── study-abroad/
│   │   ├── flight-booking/
│   │   ├── housing/
│   │   └── jobs/
│   ├── components/      # Reusable components
│   │   ├── layout/      # Navigation, footer
│   │   ├── sections/    # Page sections
│   │   └── ui/          # UI components
│   ├── contexts/        # React contexts
│   └── lib/            # Utilities and configurations
```

## 🎨 Key Components

### Enhanced Buttons
- **PrimaryButton** - Blue gradient with hover effects
- **SecondaryButton** - Purple gradient variant
- **OutlineButton** - Border style with hover fill
- **GradientButton** - Multi-color gradient effect

### Language System
- **LanguageProvider** - Context for language management
- **LanguageSwitcher** - Toggle between EN/FR
- **Translation files** - Comprehensive text translations

### Interactive Elements
- **Hero Slideshow** - Dynamic image carousel
- **Animated Counters** - Statistics with count-up animation
- **WhatsApp Widget** - Floating chat integration
- **Google Maps** - Interactive location display

## 🌐 Internationalization

The website supports English and French with:
- **Complete translations** for all UI text
- **Professional terminology** for travel industry
- **Persistent language selection** (localStorage)
- **Easy extensibility** for additional languages

### Adding New Languages
1. Add language code to `Language` type in `src/lib/i18n.ts`
2. Add translations to the `translations` object
3. Update the language switcher component

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoint optimization** for all screen sizes
- **Touch-friendly interactions** for mobile devices
- **Adaptive layouts** that scale beautifully

## 🎯 Performance Features

- **Optimized images** with Next.js Image component
- **Lazy loading** for better performance
- **Smooth 60fps animations** with Framer Motion
- **Efficient bundle splitting** with Next.js

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy with Git integration
- **Traditional hosting**: Build with `npm run build`

## 📞 Contact Integration

- **WhatsApp**: Direct messaging integration
- **Phone calls**: Click-to-call functionality
- **Email forms**: Contact form with validation
- **Google Maps**: Interactive office location

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js` and component files.

### Content
Modify translations in `src/lib/i18n.ts` for text content.

### Images
Replace images in `public/images/` directory.

### Styling
Customize components in `src/components/` directory.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

For support and inquiries:
- **Email**: info@patricktravel.cm
- **WhatsApp**: +237 123 456 789
- **Website**: [Patrick Travel Services](https://your-domain.com)

---

**Built with ❤️ for Patrick Travel Services**
