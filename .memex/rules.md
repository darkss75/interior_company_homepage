For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.

When using client-side hooks (useState and useEffect) in a component that's being treated as a Server Component by Next.js, always add the "use client" directive at the top of the file.

Do not write code that will trigger this error: "Warning: Extra attributes from the server: %s%s""class,style"

By default, this template supports JSX syntax with Tailwind CSS classes, the shadcn/ui library, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.

Use icons from lucide-react for logos.

Use stock photos from unsplash where appropriate, only valid URLs you know exist.

# Project Structure Details:

 - The `app/` directory holds the main entry points of the application:
     - `page.tsx`: Serves as the entry page displaying the initial content.
     - `layout.tsx`: Defines the global layout, including metadata, font integration (Google Fonts: Inter), and global styling.
     - `globals.css`: Contains Tailwind CSS directives, global styles, and custom theming (light/dark mode via CSS variables).

 - The `components/` directory contains a comprehensive library of UI components organized under `components/ui/`. These components (e.g., Accordion, Alert Dialog, Avatar, Badge, Button, Form, Carousel, Chart, etc.) are built with accessibility, responsiveness, and reusability in mind.

# Prerequisites:
- Node.js 22

# Before you begin:
- Verify that prerequisites are installed on user's machine.
- Ensure the project is installed and you can run it.
- Default to running the project in the background (don't use blocking shell commands).
- If the user asks you to make a change, first read and understand the code before making changes.
- If you are unsure of something, ask the user for clarification.

# Deployment to Netlify

This Next.js project deploys as a static site to Netlify.

## Prerequisites
- Netlify CLI: `npm install -g netlify-cli`
- Netlify account (create at [netlify.com](https://www.netlify.com/) if needed)
- Authenticate CLI: `netlify login`

## Configuration
1. **Next.js Configuration**
   ```js
   // next.config.js
   module.exports = {
     output: 'export',
     eslint: { ignoreDuringBuilds: true },
     images: { unoptimized: true }
   };
   ```

2. **Netlify Configuration**
   ```toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = "out"
   ```

3. **Plugin Note**: For static export (our configuration), the Netlify Next.js plugin is NOT required.

## Deploy

### Option 1: Using Account Slug (Non-interactive)
```bash
# First find your account slug: run "netlify status" and look for "Teams:"
# Then create site non-interactively:
netlify sites:create --account-slug YOUR-ACCOUNT-SLUG --name="your-site-name"

# Build and deploy
npm run build && netlify deploy --prod --dir=out
```

### Option 2: Using Popup Terminal (Interactive)
For first-time setup, run the interactive site creation in a popup terminal:
```bash
# On macOS (creates site interactively)
open -a Terminal.app -n -e "netlify sites:create"

# Then in main terminal, build and deploy
npm run build && netlify deploy --prod --dir=out
```

This popup approach allows you to respond to interactive prompts while keeping your main workflow automation intact.
