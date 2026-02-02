# Valentine's App - Architecture Overview

## 🏗️ Project Structure

```
valentine-project/
│
├─ 📄 Configuration Files
│  ├─ package.json              Dependencies & scripts
│  ├─ next.config.js            Next.js settings
│  ├─ tailwind.config.js        Tailwind CSS configuration
│  ├─ postcss.config.js         PostCSS plugins
│  ├─ tsconfig.json             TypeScript settings
│  ├─ .babelrc                  Babel configuration
│  ├─ .env                      Environment variables (CREDENTIALS)
│  └─ .gitignore                Git ignore rules
│
├─ 📁 pages/
│  ├─ index.js                  ⭐ Main proposal UI component
│  ├─ _document.js              HTML document wrapper
│  └─ api/
│     └─ send-response.js       📧 Email sending API endpoint
│
├─ 📁 styles/
│  ├─ globals.css               🎨 Global styles + animations
│  └─ Home.module.css           💫 Component-specific styles
│
├─ 📁 lib/
│  └─ mailer.js                 📨 Nodemailer configuration
│
└─ 📁 Documentation
   ├─ README.md                 Full documentation
   ├─ SETUP_GUIDE.md            Detailed setup instructions
   ├─ FEATURES.md               Feature list & breakdown
   ├─ QUICK_REFERENCE.md        Quick commands & tips
   └─ ARCHITECTURE.md           This file
```

## 🔄 Application Flow

```
                    ┌──────────────────┐
                    │   User Opens     │
                    │   http://localhost
                    │   :3000          │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  pages/index.js  │
                    │  Main Component  │
                    └────────┬─────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
                ▼                         ▼
        ┌──────────────────┐    ┌──────────────────┐
        │  Initial Screen  │    │   Yes/No State   │
        │  - Title         │    │   - Yes Response │
        │  - Buttons       │    │   - No Response  │
        └────────┬─────────┘    └──────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
    ┌─────────┐    ┌─────────┐
    │ Click   │    │ Click   │
    │ "Yes"   │    │ "No"    │
    └────┬────┘    └────┬────┘
         │              │
         ▼              ▼
    ┌─────────────┐  ┌──────────────┐
    │ YES STATE   │  │ NO STATE     │
    │ - Confetti  │  │ - Reason Box │
    │ - Heartbeat │  │ - Textarea   │
    │ - Send API  │  │ - Send API   │
    └────┬────────┘  └──────┬───────┘
         │                  │
         └────────┬─────────┘
                  │
                  ▼
         ┌─────────────────────┐
         │ pages/api/          │
         │ send-response.js    │
         │                     │
         │ POST Request        │
         │ ├─ response: "yes"  │
         │ └─ reason: string   │
         └────────┬────────────┘
                  │
                  ▼
         ┌─────────────────────┐
         │ lib/mailer.js       │
         │ Nodemailer Config   │
         │                     │
         │ Creates transporter │
         │ with Gmail SMTP     │
         └────────┬────────────┘
                  │
                  ▼
         ┌─────────────────────┐
         │ Gmail SMTP Server   │
         │                     │
         │ Sends HTML email to:│
         │ utojiubachidera2@   │
         │ gmail.com           │
         └─────────────────────┘
```

## 📊 Component Hierarchy

```
                        App
                        │
                    pages/index.js
                        │
          ┌─────────────┼─────────────┐
          │             │             │
      Initial State   Yes State    No State
          │             │             │
    ┌─────────────┐ ┌──────────┐ ┌──────────┐
    │ Title       │ │ Confetti │ │ Reason   │
    │ Description │ │ Animation│ │ Input    │
    │ Buttons     │ │ Heartbeat│ │ Submit   │
    │ Background  │ │ Loading  │ │ Go Back  │
    └─────────────┘ └──────────┘ └──────────┘
          │             │             │
          └─────────────┼─────────────┘
                        │
            ┌───────────┴───────────┐
            │                       │
      Success State         Error State
            │                       │
        Confirmation            Error Message
        Checkmark               Retry Option
        Thank You
```

## 🎯 State Management

```
State Transitions:

┌──────────────────────────────────────────────┐
│                   States                     │
├──────────────────────────────────────────────┤
│ stage: 'initial'  → Initial proposal screen  │
│ stage: 'yes'      → Yes response screen      │
│ stage: 'no'       → No response screen       │
│ stage: 'submitted'→ Confirmation screen      │
└──────────────────────────────────────────────┘

Additional State:
├─ reason: string          ← User input
├─ loading: boolean        ← API call status
├─ error: string          ← Error message
└─ confetti: array        ← Confetti particles

Transitions:
initial → yes → submitted
initial → no → submitted
any → initial (reset)
```

## 🎨 Styling Architecture

```
styles/
│
├─ globals.css (Main styling)
│  ├─ Reset styles (margin, padding, box-sizing)
│  ├─ Font imports (Playfair Display, Poppins)
│  ├─ Tailwind directives (@tailwind)
│  ├─ Keyframe animations
│  │  ├─ @keyframes heartbeat
│  │  ├─ @keyframes fall (confetti)
│  │  ├─ @keyframes spin
│  │  ├─ @keyframes shake
│  │  ├─ @keyframes fadeIn
│  │  ├─ @keyframes slideUp
│  │  ├─ @keyframes pulseGlow
│  │  └─ @keyframes float
│  └─ Global button transitions
│
└─ Home.module.css (Component styles)
   ├─ .container (flex, gradient bg)
   ├─ .card (white bg, rounded)
   ├─ .content (layout wrapper)
   ├─ .buttonGroup (flex layout)
   ├─ .yesBtn, .noBtn (button styles)
   ├─ .responseCard (response screen)
   ├─ .reasonInput (textarea)
   ├─ .confetti (animation particle)
   ├─ .floatingHearts (background)
   ├─ .checkmark (success icon)
   ├─ .loader (loading spinner)
   └─ @media queries (responsive)
      ├─ 640px (tablets)
      ├─ 480px (mobile)
      └─ 480px-640px (small devices)
```

## 📧 Email API Flow

```
Frontend Request:
POST /api/send-response
{
  "response": "yes" | "no",
  "reason": "optional text"
}
    │
    ▼
Backend Processing (send-response.js):
    │
    ├─ Check HTTP method (POST)
    │
    ├─ Parse request body
    │
    ├─ Build email template
    │  ├─ If "yes": celebratory HTML
    │  └─ If "no": feedback HTML with reason
    │
    ├─ Call sendEmail() from lib/mailer.js
    │  │
    │  ├─ Configure Nodemailer transport
    │  │  └─ Service: gmail
    │  │  └─ Auth: from .env credentials
    │  │
    │  ├─ Set mail options
    │  │  ├─ from: EMAIL_USERNAME
    │  │  ├─ to: utojiubachidera2@gmail.com
    │  │  ├─ subject: "💕 She Said YES!" | "💔 Valentine Response"
    │  │  └─ html: formatted email
    │  │
    │  └─ Send via Gmail SMTP
    │
    └─ Return response
       ├─ success: true
       ├─ message: "Email sent successfully"
       └─ HTTP 200

Frontend Response Handler:
    │
    ├─ Check if response.ok
    │
    ├─ Update stage to 'submitted'
    │
    └─ Show confirmation screen
```

## 🔐 Security Architecture

```
Credentials:
┌─────────────────────────┐
│  .env File (Protected)  │
├─────────────────────────┤
│ EMAIL_USERNAME          │
│ MAIL_DEFAULT_SENDER_    │
│ PASSWORD                │
└─────────────────────────┘
         │
         │ Never exposed to client
         │ Only used server-side
         │
         ▼
    lib/mailer.js
         │
         │ Nodemailer Config
         │
         ▼
    Gmail SMTP
    (Encrypted Connection)
         │
         ▼
    Email Sent
```

## 🎨 Animation Timing

```
Initial Screen Load:
├─ .card: slideUp 0.8s ease-out
├─ .heart: heartbeat 0.6s ease-in-out
└─ .floatingHearts: float 6s ease-in-out (infinite)

Yes Response:
├─ .confetti × 50: fall 3s ease-in (staggered)
├─ .largeHeart: heartbeat 0.6s ease-in-out
└─ Load spinner: spin 1s linear (infinite)

No Response:
├─ .responseCard: slideUp 0.6s ease-out
├─ .sadHeart: shake 0.5s ease-in-out
└─ .reasonInput: appears with card

Success:
└─ .checkmark: slideUp 0.6s ease-out

Background Effects:
├─ Button hover: translateY(-2px) 0.3s
├─ Button active: translateY(0) instant
└─ Card glow: pulseGlow 2s ease-in-out (infinite)
```

## 🚀 Deployment Paths

```
Local Development:
  npm run dev → http://localhost:3000

Production Build:
  npm run build → npm start

Vercel Deployment:
  vercel → Automatic deployment

Netlify Deployment:
  npm run build → Deploy 'out' folder

Docker:
  Build image → Run container → Port 3000

Environment:
  Development: .env.local
  Production: Set env vars in platform
```

## 📱 Responsive Breakpoints

```
Mobile First Approach:

Mobile < 480px
├─ Stack buttons vertically
├─ Single column layout
├─ Larger touch targets (44px+ height)
├─ Hide floating elements
└─ Reduced font sizes

Small 480-640px
├─ Adjusted spacing
├─ Optimized padding
└─ Responsive typography

Tablet 640-1024px
├─ Normal layout
├─ Side-by-side buttons
├─ Full animations
└─ Desktop experience

Desktop > 1024px
├─ Full width utilization
├─ Floating background
├─ All animations enabled
└─ Optimal spacing
```

---

**Architecture designed for scalability, performance, and maintainability** 🚀
