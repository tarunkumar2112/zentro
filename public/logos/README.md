# Zudio Logos

Place your Zudio brand logos here:

## Required Files:
- `zudio-logo-white.svg` (or .png) - White logo for dark backgrounds
- `zudio-logo-black.svg` (or .png) - Black logo for light backgrounds

## Optional Files:
- `zudio-icon-white.svg` - Icon only (no text) for dark backgrounds
- `zudio-icon-black.svg` - Icon only (no text) for light backgrounds

## File Format Recommendations:
- **SVG preferred** - Scalable, smaller file size, crisp at any resolution
- **PNG with transparent background** - If SVG is not available

## Usage in Code:
```tsx
// Next.js Image component
import Image from 'next/image';

// Dark background
<Image src="/logos/zudio-logo-white.svg" alt="Zudio" width={150} height={50} />

// Light background
<Image src="/logos/zudio-logo-black.svg" alt="Zudio" width={150} height={50} />
```
