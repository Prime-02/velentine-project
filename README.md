# Valentine's Day Proposal App

A beautiful, responsive Next.js application to ask someone to be your Valentine! 💕

## Features

✨ **Beautiful UI** - Modern gradient design with smooth animations
💖 **Interactive Responses** - Yes/No with confetti and animations
📧 **Email Integration** - Automatically sends responses to your email via Gmail
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
✨ **Custom Animations** - Smooth CSS animations for different responses
🎨 **Tailwind CSS** - Responsive design with utility-first styling

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling and responsive design
- **CSS Modules** - Component-specific styling with animations
- **Nodemailer** - Email sending
- **JavaScript** - Native animations for refined effects

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

The `.env` file is already configured with:

- `EMAIL_USERNAME` - Gmail address for sending emails
- `MAIL_DEFAULT_SENDER_PASSWORD` - Gmail App Password

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## How It Works

1. **Initial Screen** - Beautiful proposal message with Yes/No buttons
2. **Yes Response** - Confetti animation, heartbeat effect, and email sent
3. **No Response** - Optional reason field, email with feedback sent
4. **Confirmation** - Thank you screen with option to start over

## Email Features

When someone responds:

- **Yes**: Sends a celebratory email to `utojiubachidera2@gmail.com`
- **No**: Sends a response with optional reason to `utojiubachidera2@gmail.com`

Both emails use beautiful HTML templates with styling.

## Responsive Design

The app is fully responsive with custom breakpoints:

- 📱 Mobile (< 480px)
- 📱 Small devices (≤ 640px)
- 💻 Tablet and Desktop (> 640px)

## Animations

- **Heartbeat** - Initial heart animation
- **Confetti Fall** - Celebration effect on "Yes"
- **Shake** - Sad heart on "No" response
- **Fade In** - Smooth content transitions
- **Floating Hearts** - Background animation on initial screen
- **Pulse Glow** - Button hover effects

## File Structure

```
valentine-project/
├── pages/
│   ├── api/
│   │   └── send-response.js    # Email sending API
│   ├── index.js                 # Main app component
│   └── _document.js             # Document wrapper
├── styles/
│   ├── globals.css              # Global styles & animations
│   └── Home.module.css          # Component styles
├── lib/
│   └── mailer.js                # Email configuration
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .babelrc
├── .env                         # Environment variables
└── README.md
```

## Customization

### Change Email Recipient

Edit the recipient email in [pages/api/send-response.js](pages/api/send-response.js#L13)

### Change Colors

Update the Tailwind config in [tailwind.config.js](tailwind.config.js) or gradient colors in CSS files

### Change Messages

Edit text in [pages/index.js](pages/index.js)

## Troubleshooting

**"Failed to send email"** error:

- Verify `.env` credentials are correct
- Ensure Gmail App Password is generated (not regular password)
- Check that 2FA is enabled on Gmail account

**Animations not working:**

- Clear browser cache
- Check that `styles/globals.css` is imported
- Verify CSS module is linked correctly

## License

MIT
