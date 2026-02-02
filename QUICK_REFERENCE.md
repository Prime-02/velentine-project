# Quick Reference - Valentine's App Commands

## 🚀 Getting Started

### First Time Setup

```bash
cd c:\Users\user\Documents\GitHub\velentine-project
npm install
npm run dev
```

Then open: **http://localhost:3000**

## 🎮 Available Scripts

### Development

```bash
npm run dev              # Start dev server (auto-reload)
npm run build            # Build for production
npm start                # Run production build
npm run lint             # Run ESLint
```

### Development Server Info

- **URL**: http://localhost:3000
- **Auto-reload**: Enabled
- **Port**: 3000 (configurable)

## 📝 Project Files Quick Access

```
Main Application:
├── pages/index.js           Main proposal UI
├── pages/api/send-response.js API for emails
└── styles/                  All styling

Configuration:
├── package.json             Dependencies
├── tailwind.config.js       Tailwind config
├── next.config.js           Next.js config
└── .env                     Email credentials

Documentation:
├── README.md                Full documentation
├── SETUP_GUIDE.md           Detailed setup
├── FEATURES.md              Feature list
└── QUICK_REFERENCE.md       This file
```

## 🎨 Key Files to Customize

| Need              | File                         | Line            |
| ----------------- | ---------------------------- | --------------- |
| Change text       | `pages/index.js`             | Line 50+        |
| Change colors     | `styles/Home.module.css`     | Gradient values |
| Change recipient  | `pages/api/send-response.js` | Line 13         |
| Change animations | `styles/globals.css`         | Keyframes       |
| Change fonts      | `styles/globals.css`         | Line 8-10       |

## 🔧 Troubleshooting

### Port 3000 already in use

```bash
npm run dev -- -p 3001
```

### Clear cache and rebuild

```bash
rm -r .next node_modules
npm install
npm run dev
```

### Check if node_modules installed

```bash
npm list
```

### Install missing packages

```bash
npm install
```

## 📧 Email Configuration

**Current Setup:**

- From: pro.portfolio.dev@gmail.com
- To: utojiubachidera2@gmail.com
- Service: Gmail SMTP

**To Change Recipients:**
Edit `pages/api/send-response.js` line 13

## 🌐 Deployment Options

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy 'out' or '.next' folder
```

### Docker

```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD npm start
```

## 📱 Testing Responsiveness

1. Open DevTools: `F12`
2. Toggle device toolbar: `Ctrl+Shift+M`
3. Test breakpoints:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px

## 🐛 Debug Mode

### Check browser console

- F12 → Console tab
- Look for errors/warnings

### Check network requests

- F12 → Network tab
- Look for failed API calls

### Check network response

- F12 → Network tab
- Click on `send-response` request
- Check Response tab for email status

## 💡 Development Tips

### Hot reload not working

- Check terminal for errors
- Restart dev server (Ctrl+C, then `npm run dev`)

### Styles not updating

- Hard refresh: Ctrl+Shift+R
- Clear browser cache
- Check CSS Modules import

### Email not sending

- Check `.env` credentials
- Verify Gmail has App Password
- Check API response in Network tab

## 📚 Learning Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Nodemailer: https://nodemailer.com/
- React Hooks: https://react.dev/reference/react

## 🎯 Testing Checklist

- [ ] Yes button shows confetti
- [ ] No button shows reason input
- [ ] Email sent on Yes response
- [ ] Email sent on No response
- [ ] Mobile responsive (< 480px)
- [ ] Tablet responsive (640px)
- [ ] Desktop responsive (> 1024px)
- [ ] Animations smooth
- [ ] No console errors
- [ ] Buttons clickable on mobile

## 📂 Environment Variables

Current `.env`:

```
EMAIL_USERNAME="pro.portfolio.dev@gmail.com"
MAIL_DEFAULT_SENDER_PASSWORD="mzkt iyso svjx lzrm"
```

Never commit `.env` to Git (already in .gitignore)

## 🚀 Production Checklist

- [ ] All dependencies installed
- [ ] Environment variables set
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] All pages load
- [ ] Forms submit correctly
- [ ] Emails send successfully
- [ ] Mobile responsive
- [ ] Images optimized
- [ ] Ready to deploy

## 🆘 Emergency Commands

```bash
# Restart everything
npm run dev

# Hard reset
rm -r .next && npm run dev

# Clear all cache
npm cache clean --force
rm -r node_modules .next
npm install
npm run dev

# Check Node version
node --version

# Update npm
npm install -g npm@latest
```

## 📞 Support

- Check SETUP_GUIDE.md for detailed setup
- Check README.md for full documentation
- Check FEATURES.md for feature overview
- Check browser console for errors (F12)

---

**Remember**: Always run `npm install` first after cloning or if errors occur! 💕
