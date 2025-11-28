# AIONIQ Labs Design System

## Overview
This is a complete premium creative-tech web application built for AIONIQ Labs. It features a responsive design system that adapts between desktop and mobile experiences.

## Design Principles

### Premium & Minimal
- Clean, breathable layouts with generous whitespace
- Soft shadows and subtle borders
- High contrast for readability
- Product-like interface inspired by Apple, Notion, and Framer

### Responsive Strategy

**Desktop (1440px)**
- 12-column grid system
- 80px horizontal margins
- 24px gutters
- Safe zone: 1280px max-width
- Top navigation bar
- Wide, cinematic layouts

**Mobile (390px - iPhone 14)**
- 4-column grid
- 16px horizontal margins
- 12px gutters
- Bottom navigation (app-like)
- Touch-friendly (44px+ tap targets)
- Compact, focused layouts

## Color System

### Light Mode
- Background: `#fafafa` (soft off-white)
- Foreground: Dark gray
- Primary: `#030213` (near black)
- Card: `#ffffff` (pure white)
- Border: `rgba(0, 0, 0, 0.08)` (subtle)
- Muted: Light gray tones

### Premium Tokens
- Glass effect: `rgba(255, 255, 255, 0.6)`
- Soft shadow: `0 2px 16px rgba(0, 0, 0, 0.04)`
- Medium shadow: `0 4px 24px rgba(0, 0, 0, 0.06)`
- Strong shadow: `0 8px 32px rgba(0, 0, 0, 0.08)`

## Typography
- Uses default font system with fluid scaling
- Cinematic headings for impact
- Compact supporting text
- Never override default typography unless explicitly requested

## Spacing System
- Base unit: 4px
- Safe margins: 80px (desktop), 16px (mobile)
- Section spacing: 120px (desktop), 60px (mobile)
- Component padding: 24px, 16px, 12px, 8px

## Component Library

### Navigation
- **DesktopNav**: Top navigation bar with logo, menu items, and CTA
- **MobileBottomNav**: Bottom tab bar with icons and labels

### Layout
- **PageContainer**: Responsive wrapper with max-width constraints
- **SectionHeader**: Standardized section titles and subtitles

### Shared Components
- **ProjectCard**: Portfolio item with image, title, description, and tags
- **QuickAccessCard**: Icon-based action card for dashboard
- **FeatureCard**: Icon + title + description card
- **StatCard**: Numeric display with label
- **ProcessStep**: Numbered step indicator

### UI Components (Shadcn)
All standard Shadcn components available in `/components/ui`:
- Button, Input, Textarea, Select
- Card, Badge, Progress
- Tabs, Accordion, Drawer
- Dialog, Sheet, Popover
- And many more...

## Page Structure

### 1. Home (Dashboard-style)
- Hero section with CTAs
- Signature identity line
- Quick access tiles
- Statistics section
- Client action cards

### 2. What (Portfolio)
- Filter bar by category
- Project grid layout
- Drawer-style project viewer
- Case study template:
  - Challenge
  - Process
  - Result
  - Media

### 3. Why (Philosophy)
- Prime principle hero
- Core principles grid
- The AIONIQ Code
- Micro-essays

### 4. How (Process)
- 90-day framework (expandable)
- Systems & principles
- Tool stack grid
- Process alignment diagram

### 5. Who (Founder)
- Portrait and bio
- Timeline with milestones
- Skill modules
- Highlights grid

### 6. Where (Contact)
- Multi-step form (typeform-style)
- Contact information cards
- FAQ accordion
- Calendar booking CTA

### 7. Client Portal (Phase 2)
- Project dashboard
- File management
- Messaging system
- Task tracking
- Activity timeline

## Grid System

### Desktop Grid (1440px)
```
Container: 1280px max-width
Columns: 12
Margin: 80px (left + right)
Gutter: 24px
```

### Mobile Grid (390px)
```
Container: Full width
Columns: 4
Margin: 16px (left + right)
Gutter: 12px
```

## Interactions

### Hover States
- Buttons: Opacity change (90%)
- Cards: Shadow lift + border color change
- Links: Color change to primary

### Transitions
- Default: `transition-all duration-300`
- Quick: `transition-opacity`
- Smooth: `transition-transform duration-500`

### Micro-interactions
- Page transitions: Smooth scroll to top
- Card hover: Scale + shadow
- Button press: Slight scale down
- Success states: Toast notifications

## Best Practices

1. **Always use PageContainer** for consistent spacing
2. **Prefer SectionHeader** for section titles
3. **Use Badge** for tags and status indicators
4. **Keep tap targets 44px minimum** on mobile
5. **Test responsive breakpoints** at 768px, 1024px, 1440px
6. **Maintain visual hierarchy** with heading levels
7. **Use semantic HTML** for accessibility

## Future Expansion

The system is designed to support:
- Client authentication
- Real-time messaging
- File upload/download
- Calendar integration
- Moodboard interface
- Team collaboration features
- Payment integration
- Analytics dashboard

## Tech Stack

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS v4.0
- **Components**: Shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Forms**: React Hook Form (ready)

## File Structure

```
/components
  /navigation       - DesktopNav, MobileBottomNav
  /layout          - PageContainer
  /pages           - All page components
  /shared          - Reusable components
  /ui              - Shadcn components
/styles
  globals.css      - Design tokens & base styles
```

---

**Built with precision for AIONIQ Labs** ✨
