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
