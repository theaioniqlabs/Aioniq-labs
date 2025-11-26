

https://21st.dev/community/components/aceternity/aurora-background/default



-------------------------------

npx shadcn@latest add https://21st.dev/r/aceternity/aurora-background

--------------------------

**the prompt is here**

-----------------

You are given a task to integrate an existing React component in the codebase



The codebase should support:

\- shadcn project structure  

\- Tailwind CSS

\- Typescript



If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.



Determine the default path for components and styles. 

If default path for components is not /components/ui, provide instructions on why it's important to create this folder

Copy-paste this component to /components/ui folder:

```tsx

aurora-background.tsx

"use client";

import { cn } from "@/lib/utils";

import React, { ReactNode } from "react";



interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {

&nbsp; children: ReactNode;

&nbsp; showRadialGradient?: boolean;

}



export const AuroraBackground = ({

&nbsp; className,

&nbsp; children,

&nbsp; showRadialGradient = true,

&nbsp; ...props

}: AuroraBackgroundProps) => {

&nbsp; return (

&nbsp;   <main>

&nbsp;     <div

&nbsp;       className={cn(

&nbsp;         "relative flex flex-col  h-\[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",

&nbsp;         className

&nbsp;       )}

&nbsp;       {...props}

&nbsp;     >

&nbsp;       <div className="absolute inset-0 overflow-hidden">

&nbsp;         <div

&nbsp;           //   I'm sorry but this is what peak developer performance looks like // trigger warning

&nbsp;           className={cn(

&nbsp;             `

&nbsp;           \[--white-gradient:repeating-linear-gradient(100deg,var(--white)\_0%,var(--white)\_7%,var(--transparent)\_10%,var(--transparent)\_12%,var(--white)\_16%)]

&nbsp;           \[--dark-gradient:repeating-linear-gradient(100deg,var(--black)\_0%,var(--black)\_7%,var(--transparent)\_10%,var(--transparent)\_12%,var(--black)\_16%)]

&nbsp;           \[--aurora:repeating-linear-gradient(100deg,var(--blue-500)\_10%,var(--indigo-300)\_15%,var(--blue-300)\_20%,var(--violet-200)\_25%,var(--blue-400)\_30%)]

&nbsp;           \[background-image:var(--white-gradient),var(--aurora)]

&nbsp;           dark:\[background-image:var(--dark-gradient),var(--aurora)]

&nbsp;           \[background-size:300%,\_200%]

&nbsp;           \[background-position:50%\_50%,50%\_50%]

&nbsp;           filter blur-\[10px] invert dark:invert-0

&nbsp;           after:content-\[""] after:absolute after:inset-0 after:\[background-image:var(--white-gradient),var(--aurora)] 

&nbsp;           after:dark:\[background-image:var(--dark-gradient),var(--aurora)]

&nbsp;           after:\[background-size:200%,\_100%] 

&nbsp;           after:animate-aurora after:\[background-attachment:fixed] after:mix-blend-difference

&nbsp;           pointer-events-none

&nbsp;           absolute -inset-\[10px] opacity-50 will-change-transform`,



&nbsp;             showRadialGradient \&\&

&nbsp;               `\[mask-image:radial-gradient(ellipse\_at\_100%\_0%,black\_10%,var(--transparent)\_70%)]`

&nbsp;           )}

&nbsp;         ></div>

&nbsp;       </div>

&nbsp;       {children}

&nbsp;     </div>

&nbsp;   </main>

&nbsp; );

};





demo.tsx

"use client";



import { motion } from "framer-motion";

import React from "react";

import { AuroraBackground } from "@/components/ui/aurora-background";



export function AuroraBackgroundDemo() {

&nbsp; return (

&nbsp;   <AuroraBackground>

&nbsp;     <motion.div

&nbsp;       initial={{ opacity: 0.0, y: 40 }}

&nbsp;       whileInView={{ opacity: 1, y: 0 }}

&nbsp;       transition={{

&nbsp;         delay: 0.3,

&nbsp;         duration: 0.8,

&nbsp;         ease: "easeInOut",

&nbsp;       }}

&nbsp;       className="relative flex flex-col gap-4 items-center justify-center px-4"

&nbsp;     >

&nbsp;       <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">

&nbsp;         Background lights are cool you know.

&nbsp;       </div>

&nbsp;       <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">

&nbsp;         And this, is chemical burn.

&nbsp;       </div>

&nbsp;       <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">

&nbsp;         Debug now

&nbsp;       </button>

&nbsp;     </motion.div>

&nbsp;   </AuroraBackground>

&nbsp; );

}



```



Extend existing tailwind.config.js with this code:

```js

const {

&nbsp; default: flattenColorPalette,

} = require("tailwindcss/lib/util/flattenColorPalette");



/\*\* @type {import('tailwindcss').Config} \*/

module.exports = {

&nbsp; content: \[

&nbsp;   // your paths

&nbsp;   "./src/\*\*/\*.{ts,tsx}",

&nbsp; ],

&nbsp; darkMode: "class",

&nbsp; theme: {

&nbsp;   extend: {

&nbsp;     animation: {

&nbsp;       aurora: "aurora 60s linear infinite",

&nbsp;     },

&nbsp;     keyframes: {

&nbsp;       aurora: {

&nbsp;         from: {

&nbsp;           backgroundPosition: "50% 50%, 50% 50%",

&nbsp;         },

&nbsp;         to: {

&nbsp;           backgroundPosition: "350% 50%, 350% 50%",

&nbsp;         },

&nbsp;       },

&nbsp;     },

&nbsp;   },

&nbsp; },

&nbsp; plugins: \[addVariablesForColors],

};



// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).

function addVariablesForColors({ addBase, theme }: any) {

&nbsp; let allColors = flattenColorPalette(theme("colors"));

&nbsp; let newVars = Object.fromEntries(

&nbsp;   Object.entries(allColors).map((\[key, val]) => \[`--${key}`, val])

&nbsp; );



&nbsp; addBase({

&nbsp;   ":root": newVars,

&nbsp; });

}



```



Implementation Guidelines

&nbsp;1. Analyze the component structure and identify all required dependencies

&nbsp;2. Review the component's argumens and state

&nbsp;3. Identify any required context providers or hooks and install them

&nbsp;4. Questions to Ask

&nbsp;- What data/props will be passed to this component?

&nbsp;- Are there any specific state management requirements?

&nbsp;- Are there any required assets (images, icons, etc.)?

&nbsp;- What is the expected responsive behavior?

&nbsp;- What is the best place to use this component in the app?



Steps to integrate

&nbsp;0. Copy paste all the code above in the correct directories

&nbsp;1. Install external dependencies

&nbsp;2. Fill image assets with Unsplash stock images you know exist

&nbsp;3. Use lucide-react icons for svgs or logos if component requires them





-------------------------------------------------------------------------



**The code is here**

-------------------

"use client";

import { cn } from "@/lib/utils";

import React, { ReactNode } from "react";



interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {

&nbsp; children: ReactNode;

&nbsp; showRadialGradient?: boolean;

}



export const AuroraBackground = ({

&nbsp; className,

&nbsp; children,

&nbsp; showRadialGradient = true,

&nbsp; ...props

}: AuroraBackgroundProps) => {

&nbsp; return (

&nbsp;   <main>

&nbsp;     <div

&nbsp;       className={cn(

&nbsp;         "relative flex flex-col  h-\[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",

&nbsp;         className

&nbsp;       )}

&nbsp;       {...props}

&nbsp;     >

&nbsp;       <div className="absolute inset-0 overflow-hidden">

&nbsp;         <div

&nbsp;           //   I'm sorry but this is what peak developer performance looks like // trigger warning

&nbsp;           className={cn(

&nbsp;             `

&nbsp;           \[--white-gradient:repeating-linear-gradient(100deg,var(--white)\_0%,var(--white)\_7%,var(--transparent)\_10%,var(--transparent)\_12%,var(--white)\_16%)]

&nbsp;           \[--dark-gradient:repeating-linear-gradient(100deg,var(--black)\_0%,var(--black)\_7%,var(--transparent)\_10%,var(--transparent)\_12%,var(--black)\_16%)]

&nbsp;           \[--aurora:repeating-linear-gradient(100deg,var(--blue-500)\_10%,var(--indigo-300)\_15%,var(--blue-300)\_20%,var(--violet-200)\_25%,var(--blue-400)\_30%)]

&nbsp;           \[background-image:var(--white-gradient),var(--aurora)]

&nbsp;           dark:\[background-image:var(--dark-gradient),var(--aurora)]

&nbsp;           \[background-size:300%,\_200%]

&nbsp;           \[background-position:50%\_50%,50%\_50%]

&nbsp;           filter blur-\[10px] invert dark:invert-0

&nbsp;           after:content-\[""] after:absolute after:inset-0 after:\[background-image:var(--white-gradient),var(--aurora)] 

&nbsp;           after:dark:\[background-image:var(--dark-gradient),var(--aurora)]

&nbsp;           after:\[background-size:200%,\_100%] 

&nbsp;           after:animate-aurora after:\[background-attachment:fixed] after:mix-blend-difference

&nbsp;           pointer-events-none

&nbsp;           absolute -inset-\[10px] opacity-50 will-change-transform`,



&nbsp;             showRadialGradient \&\&

&nbsp;               `\[mask-image:radial-gradient(ellipse\_at\_100%\_0%,black\_10%,var(--transparent)\_70%)]`

&nbsp;           )}

&nbsp;         ></div>

&nbsp;       </div>

&nbsp;       {children}

&nbsp;     </div>

&nbsp;   </main>

&nbsp; );

};



