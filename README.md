# Conquest Flash
[![npm version](https://badge.fury.io/js/conquest.svg)](https://badge.fury.io/js/conquest)

Retrieve and add flash messages to your inertia application

## Installation
You can install the package via npm:

```bash
npm i @conquest/flash
```

## Usage
Your Vue files can use the toast or banner composables to display flash messages. An application can have a single banner available at any point, but an array of toasts.

```javascript
import { useToast, useBanner } from '@conquest/flash';
const { toast } = useToast()
toast('New toast')
```

You can use the plugin to listen to shared Inertia messages from the companion Laravel package. Add the following to your `app.js` file.

```javascript
import { plugin } from '@conquest/flash';
app.use(plugin)
```

## Credits

- [Joshua Wallace](https://github.com/jdw5)

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.