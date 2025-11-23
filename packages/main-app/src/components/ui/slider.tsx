import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@main/utils';

function Slider({ className, ...props }: React.ComponentProps<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn('relative flex w-full touch-none items-center select-none', className)}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative h-2 w-full grow overflow-hidden rounded-full bg-transparent"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-full bg-transparent"
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        data-slot="slider-thumb"
        className="block h-[7px] w-[7px] rounded-full bg-white transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        style={{
          boxShadow: '0px 0px 8.5px 0px #3482FF',
        }}
      />
    </SliderPrimitive.Root>
  );
}

export { Slider };
