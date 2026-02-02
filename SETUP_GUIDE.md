# Valentine's Day Proposal App - Setup & Launch Guide

## 📋 Quick Start

### Step 1: Navigate to Project Directory

```bash
cd c:\Users\user\Documents\GitHub\velentine-project
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:

- Next.js 14
- React 18
- Tailwind CSS
- PostCSS & Autoprefixer
- Nodemailer (for email functionality)

### Step 3: Verify Environment Variables

The `.env` file is already set up with:

```
EMAIL_USERNAME="pro.portfolio.dev@gmail.com"
MAIL_DEFAULT_SENDER_PASSWORD="mzkt iyso svjx lzrm"
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:3000
```

## 🎯 Features Included

### 1. **Beautiful Proposal Page**

- Elegant gradient background (purple to pink)
- Animated heart emoji
- Smooth transitions and hover effects
- Floating hearts in background

### 2. **Interactive Responses**

#### YES Response

- Confetti animation (50 pieces falling with random colors)
- Heartbeat animation on large heart emoji
- Loading state while sending email
- Success confirmation screen

#### NO Response

- Shake animation on heart
- Optional reason textarea
- "Go Back" button to reconsider
- Loading state while sending

### 3. **Email System**

- Sends HTML-formatted emails
- YES response: Celebratory email with emoji
- NO response: Includes optional reason text
- Both emails sent to: utojiubachidera2@gmail.com
- Uses Gmail's SMTP via Nodemailer

### 4. **Responsive Design**

#### Mobile First (< 480px)

- Single column layout
- Large touch-friendly buttons
- Adjusted font sizes
- No floating background elements

#### Tablet (480px - 640px)

- Optimized spacing
- Button group adjustments
- Responsive typography

#### Desktop (> 640px)

- Full width utilization
- Side-by-side buttons
- Floating heart animations

### 5. **Animations**

- Heartbeat effect (initial proposal)
- Confetti falling (yes response)
- Shake animation (no response)
- Fade in transitions
- Floating hearts background
- Pulse glow on buttons
- Smooth slide up entries

## 📁 Project Structure

```
valentine-project/
│
├── pages/
│   ├── api/
│   │   └── send-response.js      ← Email API endpoint
│   ├── index.js                   ← Main proposal page
│   └── _document.js               ← HTML document structure
│
├── styles/
│   ├── globals.css                ← Global styles & animations
│   └── Home.module.css            ← Component-specific styles
│
├── lib/
│   └── mailer.js                  ← Nodemailer configuration
│
├── package.json                   ← Dependencies
├── next.config.js                 ← Next.js configuration
├── tailwind.config.js             ← Tailwind CSS config
├── postcss.config.js              ← PostCSS config
├── tsconfig.json                  ← TypeScript config
├── .babelrc                       ← Babel config
├── .env                           ← Environment variables
├── .gitignore                     ← Git ignore rules
└── README.md                      ← Documentation
```

## 🎨 Customization Options

### Change Email Recipient

In `pages/api/send-response.js` (line 13), change:

```javascript
sendEmail(subject, htmlContent, "utojiubachidera2@gmail.com");
```

### Change Colors/Gradients

Edit gradient in `styles/Home.module.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Text

Edit text in `pages/index.js`:

- Title: "Will You Be My Valentine?"
- Description: "You mean the world to me..."
- Buttons: "Yes! 💖" / "No 😔"

### Change Button Text

In `pages/index.js`, update button labels:

```javascript
<button className={styles.yesBtn}>Yes! 💖</button>
<button className={styles.noBtn}>No 😔</button>
```

## 🧪 Testing the App

1. **Test YES Response**
   - Click "Yes! 💖" button
   - Watch confetti animation
   - Check your email for celebratory message

2. **Test NO Response**
   - Click "No 😔" button
   - Optionally enter a reason
   - Click "Send Response"
   - Check email with your response

3. **Test Responsiveness**
   - Press F12 to open DevTools
   - Toggle device toolbar (Ctrl+Shift+M)
   - Test on mobile, tablet, desktop sizes

## 📧 Email Configuration

### Gmail Setup (Required)

1. Enable 2-Factor Authentication on Gmail
2. Generate an "App Password" (not regular password)
3. The current `.env` already has this configured

### Email Template Features

- HTML formatted with inline styles
- Gradient background matching app theme
- Emoji decorations
- Responsive email design
- Clear messaging

## 🚀 Production Build

```bash
npm run build
npm start
```

## 🔧 Troubleshooting

### Issue: "Email failed to send"

**Solution:**

- Verify `.env` credentials are correct
- Ensure using Gmail App Password (not account password)
- Check 2FA is enabled on Gmail
- Allow less secure apps if needed

### Issue: Styles not loading

**Solution:**

- Clear `node_modules` and reinstall: `npm install`
- Delete `.next` folder: `rm -r .next`
- Restart dev server

### Issue: Animations not smooth

**Solution:**

- Check browser supports CSS animations
- Update browser to latest version
- Check that hardware acceleration is enabled

### Issue: Port 3000 already in use

**Solution:**

```bash
npm run dev -- -p 3001
```

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎭 Animation Details

### Heartbeat (Initial)

- 0.6s duration
- Scales from 1 → 1.3 → 1 → 1.15 → 1
- Applied to main heart emoji

### Confetti Fall

- 3s duration
- Falls from top to bottom of screen
- 360-degree rotation
- Random colors and left positions

### Shake (No Response)

- 0.5s duration
- Translates left/right
- Applied to sad heart emoji

### Floating Hearts

- 6s duration
- Varies by position
- Different animation delays

## 📊 Performance

- Lightweight (~50KB gzip)
- Fast initial load
- Optimized images/emojis
- CSS animations (hardware accelerated)
- No external libraries for animations

## 📝 Notes

- All animations use CSS for better performance
- Email sending is asynchronous
- No database required
- Fully static generation compatible
- Can be deployed on Vercel, Netlify, etc.

Enjoy your Valentine's Day proposal app! 💕
