# IRCTC Frontend Redesign

A modern, responsive frontend redesign for the Indian Railway Catering and Tourism Corporation (IRCTC) website using Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚂 Modern and responsive design
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast performance with Next.js 14
- 🔍 Real-time train search and booking
- 📱 Mobile-first approach
- 🎭 Smooth animations with Framer Motion
- 🎯 Interactive components
- 🔒 Secure authentication
- 📊 Real-time train tracking
- 🎫 PNR status checking

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Form Handling:** React Hook Form
- **State Management:** React Context
- **API Integration:** Axios

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/frontend-irctc.git
   ```

2. Install dependencies:
   ```bash
   cd frontend-irctc
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend-irctc/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (auth)/            # Authentication routes
│   │   ├── booking/           # Booking related pages
│   │   ├── trains/            # Train search and listing
│   │   └── track-train/       # Train tracking
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   ├── ui/               # UI components
│   │   └── forms/            # Form components
│   ├── lib/                   # Utility functions
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # Global styles
│   └── types/                 # TypeScript types
├── public/                    # Static assets
└── package.json              # Project dependencies
```

## Key Components

### Layout Components
- `Navbar`: Responsive navigation with mobile menu
- `Footer`: Site footer with important links
- `Layout`: Main layout wrapper

### UI Components
- `Button`: Reusable button component
- `Card`: Card container component
- `Input`: Form input component
- `LoadingSpinner`: Animated loading indicator
- `AnimatedSection`: Scroll-triggered animations

### Form Components
- `Form`: Form wrapper with validation
- `FormField`: Form input field
- `SelectField`: Dropdown select field

## Animations

The project uses Framer Motion for smooth animations:

- Loading spinner with bouncing train icon
- Scroll-triggered fade-in and slide-up animations
- Staggered animations for lists and grids
- Smooth transitions between pages
- Interactive hover effects

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- IRCTC for inspiration
- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- Framer Motion team for the animation library
