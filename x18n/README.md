# Typings for x18n

## Usage
```javascript
import * as x18n from 'x18n'

x18n.register('en', {
    user: {
        greeting: 'Welcome %1',
        browser: 'You are using %{browser}.',
        logout: 'Logout',
        count: {
            1: 'There is 1 user online.',
            n: 'There are %1 users online.'
        }
    }
});

x18n.setDefault('en'); // The default value for this is 'en'
x18n.set('en'); // Set the user language

x18n.t('user.greeting', 'John'); // 'Welcome John'
x18n.t('user.browser', {browser: 'Chromium'}); // 'You are using Chromium.'

x18n.on('missing-translation', function (locale, key) {
    console.log(locale + " doesn't have a translation for " + key);
});
```

## Credits
- [x18n](https://github.com/florian/x18n)