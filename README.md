[![npm version](https://badge.fury.io/js/dua.js.svg)](https://badge.fury.io/js/dua.js)
# dua.js
A Node.js package for invoking divine blessings for one's Javascript code.

## Dua?
`Dua` is the Hindi word for blessings/good wishes. More than the meaning, I like the sound of it; it's cute.

## Why do I need this?
For your code to run successfully, of course!

## But doesn't this add to my dependencies?
Well...yes. But honestly, it's not a lot. Believe me, it's better than React's dependency list! And again, why not add an extra dependency
that puts in a harmless, useful blessing here and there? Not gonna hurt!

## Okay, fine. I'm convinced. How do I use it?

First, install it:

```bash
npm install --save dua.js
```

Next, you need to include dua in ever single module. _Every single module_. Blessings don't work when you solicit them half-heartedly.

```javascript
var dua = require('dua.js')
```

That's it! When you need a blessing before running a piece of code that's particularly troublesome:

```javascript
dua.blessThisCode()
```

Every blessing comes with a unique ID, and you can even go ahead and log all your blessings. Remember, accumulated blessings are a blessing!

## Credits
Inspired by a conversation with [@kshitishpurohit](https://github.com/kshitishpurohit). Built with additional blessings from 
[@rudimk](https://github.com/rudimk).