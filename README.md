# GDG Ontario Tech Website

Official website for Google Developer Group (GDG) on Campus at Ontario Tech University.

## 🌟 About

This is the official web presence for GDG Ontario Tech, a student-led community dedicated to learning about Google technologies, developer tools, and fostering innovation through collaboration. Our website serves as a hub for event information, team introductions, and community engagement.

## ✨ Features

- **Modern Design**: Beautiful, responsive UI built with React and Tailwind CSS
- **Event Management**: Showcase upcoming and past events
- **Team Showcase**: Meet our core team members
- **Dynamic Content**: Smooth animations and interactive elements
- **Google Analytics**: Integrated tracking for user insights
- **Mobile-First**: Fully responsive design that works on all devices

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Analytics**: Google Analytics 4
- **Deployment**: Ready for modern hosting platforms

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/OT_GDG_Website.git
cd OT_GDG_Website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (optional):
```env
VITE_GA_MEASUREMENT_ID=your_google_analytics_id
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:5173
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
OT_GDG_Website/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Reusable React components
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Team.jsx
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── HomePage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── TeamPage.jsx
│   │   └── ...
│   ├── utils/          # Utility functions
│   │   └── analytics.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Key Components

- **Hero**: Landing section with dynamic typewriter effect
- **About**: Information about GDG and our mission
- **Events**: Display of upcoming and past events
- **Team**: Showcase of core team members
- **Navigation**: Responsive navigation bar
- **Footer**: Links and social media integration

## 📊 Google Analytics

The website includes Google Analytics 4 integration for tracking user engagement. See `GOOGLE_ANALYTICS_SETUP.md` for detailed setup instructions.

## 🤝 Contributing

We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## 📝 License

This project is maintained by GDG Ontario Tech.

## 📧 Contact

- **Website**: [Your Website URL]
- **Email**: gdg@ontariotechu.ca
- **Instagram**: [@gdg_ontariotech](https://instagram.com/gdg_ontariotech)
- **LinkedIn**: [GDG Ontario Tech](https://linkedin.com/company/gdg-ontario-tech)

## 🎓 About GDG

Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.

---

Built with ❤️ by the GDG Ontario Tech Team
