follow the [link](https://reactbits.dev/components/masonry) for instruction 

-------

pnpm add gsap

-------



**usage**



import Masonry from './Masonry';



const items = \[

&nbsp;   {

&nbsp;     id: "1",

&nbsp;     img: "https://picsum.photos/id/1015/600/900?grayscale",

&nbsp;     url: "https://example.com/one",

&nbsp;     height: 400,

&nbsp;   },

&nbsp;   {

&nbsp;     id: "2",

&nbsp;     img: "https://picsum.photos/id/1011/600/750?grayscale",

&nbsp;     url: "https://example.com/two",

&nbsp;     height: 250,

&nbsp;   },

&nbsp;   {

&nbsp;     id: "3",

&nbsp;     img: "https://picsum.photos/id/1020/600/800?grayscale",

&nbsp;     url: "https://example.com/three",

&nbsp;     height: 600,

&nbsp;   },

&nbsp;   // ... more items

];



<Masonry

&nbsp; items={items}

&nbsp; ease="power3.out"

&nbsp; duration={0.6}

&nbsp; stagger={0.05}

&nbsp; animateFrom="bottom"

&nbsp; scaleOnHover={true}

&nbsp; hoverScale={0.95}

&nbsp; blurToFocus={true}

&nbsp; colorShiftOnHover={false}

/>





-------------



**Code**



import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { gsap } from 'gsap';



const useMedia = (queries: string\[], values: number\[], defaultValue: number): number => {

&nbsp; const get = () => values\[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;



&nbsp; const \[value, setValue] = useState<number>(get);



&nbsp; useEffect(() => {

&nbsp;   const handler = () => setValue(get);

&nbsp;   queries.forEach(q => matchMedia(q).addEventListener('change', handler));

&nbsp;   return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));

&nbsp; }, \[queries]);



&nbsp; return value;

};



const useMeasure = <T extends HTMLElement>() => {

&nbsp; const ref = useRef<T | null>(null);

&nbsp; const \[size, setSize] = useState({ width: 0, height: 0 });



&nbsp; useLayoutEffect(() => {

&nbsp;   if (!ref.current) return;

&nbsp;   const ro = new ResizeObserver((\[entry]) => {

&nbsp;     const { width, height } = entry.contentRect;

&nbsp;     setSize({ width, height });

&nbsp;   });

&nbsp;   ro.observe(ref.current);

&nbsp;   return () => ro.disconnect();

&nbsp; }, \[]);



&nbsp; return \[ref, size] as const;

};



const preloadImages = async (urls: string\[]): Promise<void> => {

&nbsp; await Promise.all(

&nbsp;   urls.map(

&nbsp;     src =>

&nbsp;       new Promise<void>(resolve => {

&nbsp;         const img = new Image();

&nbsp;         img.src = src;

&nbsp;         img.onload = img.onerror = () => resolve();

&nbsp;       })

&nbsp;   )

&nbsp; );

};



interface Item {

&nbsp; id: string;

&nbsp; img: string;

&nbsp; url: string;

&nbsp; height: number;

}



interface GridItem extends Item {

&nbsp; x: number;

&nbsp; y: number;

&nbsp; w: number;

&nbsp; h: number;

}



interface MasonryProps {

&nbsp; items: Item\[];

&nbsp; ease?: string;

&nbsp; duration?: number;

&nbsp; stagger?: number;

&nbsp; animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';

&nbsp; scaleOnHover?: boolean;

&nbsp; hoverScale?: number;

&nbsp; blurToFocus?: boolean;

&nbsp; colorShiftOnHover?: boolean;

}



const Masonry: React.FC<MasonryProps> = ({

&nbsp; items,

&nbsp; ease = 'power3.out',

&nbsp; duration = 0.6,

&nbsp; stagger = 0.05,

&nbsp; animateFrom = 'bottom',

&nbsp; scaleOnHover = true,

&nbsp; hoverScale = 0.95,

&nbsp; blurToFocus = true,

&nbsp; colorShiftOnHover = false

}) => {

&nbsp; const columns = useMedia(

&nbsp;   \['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],

&nbsp;   \[5, 4, 3, 2],

&nbsp;   1

&nbsp; );



&nbsp; const \[containerRef, { width }] = useMeasure<HTMLDivElement>();

&nbsp; const \[imagesReady, setImagesReady] = useState(false);



&nbsp; const getInitialPosition = (item: GridItem) => {

&nbsp;   const containerRect = containerRef.current?.getBoundingClientRect();

&nbsp;   if (!containerRect) return { x: item.x, y: item.y };



&nbsp;   let direction = animateFrom;

&nbsp;   if (animateFrom === 'random') {

&nbsp;     const dirs = \['top', 'bottom', 'left', 'right'];

&nbsp;     direction = dirs\[Math.floor(Math.random() \* dirs.length)] as typeof animateFrom;

&nbsp;   }



&nbsp;   switch (direction) {

&nbsp;     case 'top':

&nbsp;       return { x: item.x, y: -200 };

&nbsp;     case 'bottom':

&nbsp;       return { x: item.x, y: window.innerHeight + 200 };

&nbsp;     case 'left':

&nbsp;       return { x: -200, y: item.y };

&nbsp;     case 'right':

&nbsp;       return { x: window.innerWidth + 200, y: item.y };

&nbsp;     case 'center':

&nbsp;       return {

&nbsp;         x: containerRect.width / 2 - item.w / 2,

&nbsp;         y: containerRect.height / 2 - item.h / 2

&nbsp;       };

&nbsp;     default:

&nbsp;       return { x: item.x, y: item.y + 100 };

&nbsp;   }

&nbsp; };



&nbsp; useEffect(() => {

&nbsp;   preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));

&nbsp; }, \[items]);



&nbsp; const grid = useMemo<GridItem\[]>(() => {

&nbsp;   if (!width) return \[];

&nbsp;   const colHeights = new Array(columns).fill(0);

&nbsp;   const gap = 16;

&nbsp;   const totalGaps = (columns - 1) \* gap;

&nbsp;   const columnWidth = (width - totalGaps) / columns;



&nbsp;   return items.map(child => {

&nbsp;     const col = colHeights.indexOf(Math.min(...colHeights));

&nbsp;     const x = col \* (columnWidth + gap);

&nbsp;     const height = child.height / 2;

&nbsp;     const y = colHeights\[col];



&nbsp;     colHeights\[col] += height + gap;

&nbsp;     return { ...child, x, y, w: columnWidth, h: height };

&nbsp;   });

&nbsp; }, \[columns, items, width]);



&nbsp; const hasMounted = useRef(false);



&nbsp; useLayoutEffect(() => {

&nbsp;   if (!imagesReady) return;



&nbsp;   grid.forEach((item, index) => {

&nbsp;     const selector = `\[data-key="${item.id}"]`;

&nbsp;     const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };



&nbsp;     if (!hasMounted.current) {

&nbsp;       const start = getInitialPosition(item);

&nbsp;       gsap.fromTo(

&nbsp;         selector,

&nbsp;         {

&nbsp;           opacity: 0,

&nbsp;           x: start.x,

&nbsp;           y: start.y,

&nbsp;           width: item.w,

&nbsp;           height: item.h,

&nbsp;           ...(blurToFocus \&\& { filter: 'blur(10px)' })

&nbsp;         },

&nbsp;         {

&nbsp;           opacity: 1,

&nbsp;           ...animProps,

&nbsp;           ...(blurToFocus \&\& { filter: 'blur(0px)' }),

&nbsp;           duration: 0.8,

&nbsp;           ease: 'power3.out',

&nbsp;           delay: index \* stagger

&nbsp;         }

&nbsp;       );

&nbsp;     } else {

&nbsp;       gsap.to(selector, {

&nbsp;         ...animProps,

&nbsp;         duration,

&nbsp;         ease,

&nbsp;         overwrite: 'auto'

&nbsp;       });

&nbsp;     }

&nbsp;   });



&nbsp;   hasMounted.current = true;

&nbsp; }, \[grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);



&nbsp; const handleMouseEnter = (id: string, element: HTMLElement) => {

&nbsp;   if (scaleOnHover) {

&nbsp;     gsap.to(`\[data-key="${id}"]`, {

&nbsp;       scale: hoverScale,

&nbsp;       duration: 0.3,

&nbsp;       ease: 'power2.out'

&nbsp;     });

&nbsp;   }

&nbsp;   if (colorShiftOnHover) {

&nbsp;     const overlay = element.querySelector('.color-overlay') as HTMLElement;

&nbsp;     if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });

&nbsp;   }

&nbsp; };



&nbsp; const handleMouseLeave = (id: string, element: HTMLElement) => {

&nbsp;   if (scaleOnHover) {

&nbsp;     gsap.to(`\[data-key="${id}"]`, {

&nbsp;       scale: 1,

&nbsp;       duration: 0.3,

&nbsp;       ease: 'power2.out'

&nbsp;     });

&nbsp;   }

&nbsp;   if (colorShiftOnHover) {

&nbsp;     const overlay = element.querySelector('.color-overlay') as HTMLElement;

&nbsp;     if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });

&nbsp;   }

&nbsp; };



&nbsp; return (

&nbsp;   <div ref={containerRef} className="relative w-full h-full">

&nbsp;     {grid.map(item => (

&nbsp;       <div

&nbsp;         key={item.id}

&nbsp;         data-key={item.id}

&nbsp;         className="absolute box-content"

&nbsp;         style={{ willChange: 'transform, width, height, opacity' }}

&nbsp;         onClick={() => window.open(item.url, '\_blank', 'noopener')}

&nbsp;         onMouseEnter={e => handleMouseEnter(item.id, e.currentTarget)}

&nbsp;         onMouseLeave={e => handleMouseLeave(item.id, e.currentTarget)}

&nbsp;       >

&nbsp;         <div

&nbsp;           className="relative w-full h-full bg-cover bg-center rounded-\[10px] shadow-\[0px\_10px\_50px\_-10px\_rgba(0,0,0,0.2)] uppercase text-\[10px] leading-\[10px]"

&nbsp;           style={{ backgroundImage: `url(${item.img})` }}

&nbsp;         >

&nbsp;           {colorShiftOnHover \&\& (

&nbsp;             <div className="color-overlay absolute inset-0 rounded-\[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />

&nbsp;           )}

&nbsp;         </div>

&nbsp;       </div>

&nbsp;     ))}

&nbsp;   </div>

&nbsp; );

};



export default Masonry;



-------------







