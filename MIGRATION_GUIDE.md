# Valentine's Day Proposal App - Updated

A modern Next.js 15 application for sending Valentine's Day proposals with email integration.

## 🎯 Latest Updates

This codebase has been fully updated to run on the latest versions:

### Package Versions

- **Next.js**: 15.0.3 (upgraded from 14.0.0)
- **React**: 19.0.0 (upgraded from 18.2.0)
- **React DOM**: 19.0.0 (upgraded from 18.2.0)
- **TypeScript**: 5.3.3 (added for type safety)
- **TailwindCSS**: 3.4.1 (upgraded from 3.3.6)
- **Nodemailer**: 6.9.13 (upgraded from 6.9.7)

### Architecture Changes

#### Migration to App Router

- **Old Structure**: `pages/` directory (Pages Router)
- **New Structure**: `src/app/` directory (App Router)

This is the modern Next.js 13+ architecture that provides:

- Better performance
- Improved file organization
- Server components by default
- Simplified routing

#### Directory Structure

```
src/
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   ├── page.jsx            # Home page component (client component)
│   └── api/
│       └── send-response/
│           └── route.js    # API endpoint (server function)
├── lib/
│   └── mailer.js           # Email utility functions
└── styles/
    ├── globals.css         # Global styles with fonts
    └── Home.module.css     # Component styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd valentine-project
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local and add your email credentials
# EMAIL_USERNAME=your_email@gmail.com
# MAIL_DEFAULT_SENDER_PASSWORD=your_app_password
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Configuration

### Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Add to `.env.local`:
   ```
   EMAIL_USERNAME=your_email@gmail.com
   MAIL_DEFAULT_SENDER_PASSWORD=your_16_character_app_password
   ```

## 🏗️ Key Changes from Previous Version

### Code Quality Improvements

- ✅ Strict TypeScript checking enabled (`strict: true`)
- ✅ Server-side API routes with `route.js` (App Router pattern)
- ✅ Client directive (`'use client'`) for client components
- ✅ Proper error handling with type safety
- ✅ Updated package imports for React 19 compatibility

### File Changes

**New Files Created:**

- `src/app/layout.jsx` - Root layout with metadata API
- `src/app/page.jsx` - Home page component (migrated from `pages/index.js`)
- `src/app/api/send-response/route.js` - API endpoint (migrated from `pages/api/send-response.js`)
- `src/lib/mailer.js` - Email utility (moved from `lib/mailer.js`)
- `src/styles/globals.css` - Global styles
- `src/styles/Home.module.css` - Component styles
- `.env.example` - Environment variables template

**Updated Files:**

- `package.json` - All dependencies updated to latest versions
- `tsconfig.json` - Updated path aliases (`@/*` points to `./src/*`)
- `next.config.js` - Added `swcMinify: true` for better optimization
- `tailwind.config.js` - Updated content paths for `src/app` structure

**Deprecated Directories:**

- `pages/` - No longer used (use `src/app/` instead)
- Old `lib/` and `styles/` - Files moved to `src/` structure

## 📦 Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🔧 Modern React 19 Features

The codebase now supports React 19 features:

- Improved useCallback and useMemo optimization
- Better TypeScript inference
- Enhanced error boundaries
- Automatic batching improvements

## 📱 Responsive Design

The app includes comprehensive responsive design:

- Mobile-first approach
- Breakpoints: 480px, 640px
- Touch-friendly buttons
- Optimized for all screen sizes

## 🎨 Styling

- CSS Modules for component scoping
- Google Fonts (Playfair Display, Poppins)
- Gradient backgrounds and animations
- Confetti animation on "Yes" response
- Smooth transitions and hover effects

## 🔐 Environment Variables

Required variables:

- `EMAIL_USERNAME` - Your Gmail address
- `MAIL_DEFAULT_SENDER_PASSWORD` - App password from Google

## 📧 Email Templates

Customizable email templates for:

- ✅ Positive response (celebrating the "Yes!")
- ❌ Negative response (with optional reason from user)

## 🐛 Troubleshooting

### Email not sending?

1. Verify EMAIL_USERNAME and MAIL_DEFAULT_SENDER_PASSWORD in `.env.local`
2. Check Gmail allows "Less secure app access" or use App Passwords
3. Check server logs in terminal for detailed errors

### TypeScript errors?

1. Ensure TypeScript is installed: `npm install typescript`
2. Run type checking: `npx tsc --noEmit`

### Port already in use?

```bash
# Use different port
npm run dev -- -p 3001
```

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Features

- Beautiful Valentine's Day proposal UI
- Interactive yes/no buttons
- Confetti animation on "Yes"
- Email notifications
- Optional reason textarea for "No" responses
- Loading states and error handling
- Mobile responsive design
- Modern animations and transitions

## 📞 Support

For issues or questions, please check the logs or open an issue in the repository.

---

**Last Updated**: February 2, 2026
**Next.js Version**: 15.0.3
**React Version**: 19.0.0
