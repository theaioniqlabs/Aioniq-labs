# Exploding Beams Background
URL: /background/beams-with-collision
React background with energy beams that explode on collision. Interactive particle effects using Framer Motion, TypeScript, and shadcn/ui.

***

title: Exploding Beams Background
description: React background with energy beams that explode on collision. Interactive particle effects using Framer Motion, TypeScript, and shadcn/ui.
icon: Sparkles
component: true
---------------

<PoweredBy packages={[{ name: "Framer Motion", url: "https://www.framer.com/motion/" }]} />

<Callout title="Trying to implement particle effects?">
  [Join our Discord community](https://discord.com/invite/Z9NVtNE7bj) for help
  from other developers.
</Callout>

<br />

You want energy beams that actually explode when they hit something? Most developers just fade them out at the edges. Boring. This React component detects real collisions and spawns particle explosions that look like they belong in a sci-fi interface.

### Dynamic collision effects

Watch beams explode into particles when they hit boundaries:

<Preview path="background/beams-with-collision" />

Built for React and Next.js with TypeScript definitions included. The collision detection runs at 60fps using `getBoundingClientRect()` checks, and Framer Motion handles the particle physics. No canvas, no WebGL complexity, just React components that work.

## Installation

<Installer packageName="background-beams-with-collision" />

## Usage

```tsx
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="relative z-20">Your content here</h2>
    </BackgroundBeamsWithCollision>
  );
}
```

## Why most beam effects are lifeless

Traditional beam animations just move across the screen and disappear. No impact, no drama, no fun. Some try to fake collisions with predetermined explosion points, but it looks mechanical.

This React component actually calculates collisions in real-time. Every 50ms, it checks if a beam intersects with the container boundaries. When it does, boom—20 particles spawn with randomized velocities and decay times. The beams regenerate automatically, creating an endless light show that never repeats exactly the same way.

## Features

* **Real collision detection** checking boundaries every 50ms
* **20 particles per explosion** with randomized physics
* **Continuous beam generation** that never stops
* **TypeScript support** with full type definitions for React projects
* **Gradient beam styling** from indigo to purple
* **Framer Motion powered** for smooth 60fps animations
* **Memory optimized** with automatic cleanup
* **shadcn/ui compatible** using Tailwind CSS design tokens

## API Reference

### BackgroundBeamsWithCollision

Container component that manages beams and collision detection.

| Prop        | Type                             | Default | Description                             |
| ----------- | -------------------------------- | ------- | --------------------------------------- |
| `children`  | `ReactNode`                      | -       | Content to display over the beam effect |
| `className` | `string`                         | -       | Additional Tailwind CSS classes         |
| `...props`  | `HTMLAttributes<HTMLDivElement>` | -       | All standard div props are supported    |

## Common gotchas

**Performance on low-end devices**: The collision detection runs every 50ms. On really old phones, consider increasing this interval or reducing particle count.

**Z-index conflicts**: Your content needs `relative z-20` or higher to appear above the beams. The particles use `z-10`.

**Container sizing**: The component needs explicit height. Use `min-h-screen` or set a specific height on the container.

**Too many particles**: Each collision spawns 20 particles. If you have multiple beams colliding simultaneously, you might hit performance limits. Reduce particle count if needed.

**Memory leaks**: The component cleans up particles automatically, but if you're dynamically mounting/unmounting it frequently, ensure proper cleanup.

## You might also like

Explore other animated background components for React applications:

<Cards>
  <Card href="/background/beams" title="Background Beams" description="Flowing energy streams with organic movement patterns" />

  <Card href="/background/particles" title="Particles" description="Interactive particle systems that respond to mouse movement" />

  <Card href="/background/aurora" title="Aurora" description="Northern lights effect with smooth gradient animations" />

  <Card href="/background/meteors" title="Meteors" description="Falling star animations perfect for space themes" />

  <Card href="/background/sparkles" title="Sparkles" description="Twinkling particle effects that add magical ambiance" />

  <Card href="/background/fireworks" title="Fireworks" description="Explosive celebrations with customizable colors and patterns" />
</Cards>

## Questions developers actually ask

<Accordions type="single">
  <Accordion id="custom-colors" title="How do I change the beam colors?">
    The beams use a gradient from indigo-500 to purple-500. Override these with inline styles or modify the component directly. The particles inherit the beam color at collision point.
  </Accordion>

  {" "}

  <Accordion id="particle-count" title="Can I adjust the number of particles?">
    Yes, find the loop that generates particles (usually 20 iterations) and change
    it. More particles look cooler but cost performance. Less than 10 looks weak.
  </Accordion>

  {" "}

  <Accordion id="collision-frequency" title="How do I make collisions more frequent?">
    Increase beam speed or spawn more beams. The collision rate depends on beam
    velocity and container size. Smaller containers = more collisions.
  </Accordion>

  {" "}

  <Accordion id="custom-shapes" title="Can beams collide with custom shapes?">
    Currently it's boundary-based. For custom collision zones, you'd need to
    modify the collision detection to check against specific element coordinates.
  </Accordion>

  {" "}

  <Accordion id="sound-effects" title="How do I add sound effects on collision?">
    Listen for collision events in the component and trigger audio. Use the Web
    Audio API or Howler.js. Keep volumes reasonable—nobody likes surprise
    explosions.
  </Accordion>

  <Accordion id="mobile-optimization" title="Should I disable this on mobile?">
    Not necessarily. Modern phones handle it fine. For older devices, reduce particle count or increase collision check intervals. Use `window.matchMedia` to detect mobile.
  </Accordion>
</Accordions>
