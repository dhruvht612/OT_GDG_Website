# Google Analytics Setup Guide

This project now includes Google Analytics 4 (GA4) integration. Follow these steps to complete the setup:

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" (if you already have an account)
4. Create a new Property:
   - Property name: `GDG Ontario Tech Website`
   - Reporting time zone: Your timezone
   - Currency: Your currency
5. Click "Next" and fill in business details
6. Create a **Web** data stream:
   - Website URL: Your production URL
   - Stream name: `GDG Website`
7. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 2: Configure Your Measurement ID

You have two options to add your Measurement ID:

### Option A: Using Environment Variables (Recommended)

1. Create a `.env` file in the project root:
```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

2. Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. The `.env` file is already in `.gitignore`, so your ID won't be committed to Git

### Option B: Direct Configuration

1. Open `src/App.jsx`
2. Find this line:
```javascript
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID

4. Also update `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Step 3: Test Your Setup

1. Run your development server:
```bash
npm run dev
```

2. Visit your local site and navigate between pages

3. Go to Google Analytics → Reports → Realtime
   - You should see yourself as an active user
   - Page views should be tracked as you navigate

## Features Included

✅ **Automatic Page View Tracking**: Tracks every page navigation automatically  
✅ **React Router Integration**: Works seamlessly with your routing setup  
✅ **Custom Event Tracking**: Use the `logEvent()` function for custom events  
✅ **Loading State Handling**: Waits for the loading screen to finish before tracking  

## Custom Event Tracking

You can track custom events anywhere in your components:

```javascript
import { logEvent } from "../utils/analytics";

// Example: Track button clicks
const handleJoinClick = () => {
  logEvent("User Engagement", "Click", "Join Button");
  // Your other code...
};
```

## Verify in Production

After deploying to GitHub Pages:

1. Visit your production site
2. Navigate through different pages
3. Check Google Analytics to see real-time data
4. Wait 24-48 hours for full reports to populate

## Privacy Considerations

- Consider adding a Cookie Consent banner for GDPR compliance
- Update your Privacy Policy to mention Google Analytics usage
- Google Analytics respects Do Not Track (DNT) browser settings

## Troubleshooting

**Not seeing data in Google Analytics?**
- Double-check your Measurement ID is correct
- Make sure you're looking at the "Realtime" report (data can take 24-48 hours for standard reports)
- Check browser console for any errors
- Verify ad blockers aren't blocking analytics scripts

**Development tracking?**
- Analytics will work in development mode
- Consider adding logic to disable tracking in development:

```javascript
const GA_MEASUREMENT_ID = import.meta.env.PROD 
  ? import.meta.env.VITE_GA_MEASUREMENT_ID 
  : null;
```

## Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [react-ga4 GitHub](https://github.com/codler/react-ga4)

