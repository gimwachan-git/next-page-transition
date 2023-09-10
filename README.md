# @gimwa/next-page-transition

## Description

A page transition component for Next.js in appdir mode, using framer-motion for animation support.

## Demo
[codesandbox](https://codesandbox.io/p/sandbox/affectionate-carlos-7z9p8s?file=%2Fapp%2Ftest%2Fpage.tsx%3A52%2C20)

## Installation

```bash
npm install @gimwa/next-page-transition
```

## Usage

```javascript
import NextPageTransition from '@gimwa/next-page-transition';

// Your component here
```

## Features

- Smooth page transitions for Next.js applications.
- Built-in support for framer-motion animations.
- Only test works well in appdir mode.

## API

Props
- initial: The initial animation state. Default is { opacity: 0 }.
- animate: The state that the component should animate to. Default is { opacity: 1 }.
- exit: The state to animate to when the component is exiting. Default is { opacity: 0 }.


## Example

```tsx
import NextPageTransition from '@gimwa/next-page-transition';

// In your component
<NextPageTransition initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
  {/* Your page content here */}
</NextPageTransition>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
