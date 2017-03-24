[![NPM](https://nodei.co/npm/dua.js.png)](https://npmjs.org/package/dua.js)
# dua.js
A Node.js package for invoking divine blessings for one's Javascript code.

## Dua?
`Dua` is the Hindi word for blessings/good wishes. More than the meaning, I like the sound of it; it's cute. It's a loanword from Arabic, 
where the word has a rather different meaning.

## Why do I need this?
For your code to run successfully, of course! Do note that this doesn't mean dua *WILL* run your code, no matter how buggy it is; it just means a lot 
of good wishes and blessings are being directed towards your code. Ultimately, karma does count. 

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
var newDua = new dua()
console.log(newDua.message)
// 'Blessing ID #c3877741-28e3-447b-b701-418475801fab: Our blessings are with you.'
console.log(newDua.id)
// 'c3877741-28e3-447b-b701-418475801fab'
```

Every blessing comes with a unique ID, and you can even go ahead and log all your blessings. Remember, accumulated blessings are a blessing!

## I don't use Javascript..
Yeah, but blessings are universal. Ports for Python, Ruby, Go, Rust, Swift and F# are on their way :)

## Credits
Inspired by a conversation with [@kshitishpurohit](https://github.com/kshitishpurohit). Built with additional blessings from 
[@rudimk](https://github.com/rudimk). Additional contributions by [@shawndellysse](https://github.com/shawndellysse) 
and [@akashdeep-singh](https://github.com/akashdeep-singh).