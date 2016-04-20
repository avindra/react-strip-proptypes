# DEPRECATED: react-strip-proptypes

This is a babel plugin to remove propType definitions for your production React.js code.

Use [babel-plugin-transform-react-remove-prop-types)](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) instead, as it covers more cases. See [babel-react-optimize](https://github.com/thejameskyle/babel-react-optimize) for more production optimizations.

# Installation

```bash
npm install --save-dev react-strip-proptypes
```

# Usage

Add the loader to your `.babelrc` file:


```js
{
    //...
    "env" : {
        //...
        "production" : {
            "plugins" : ["react-strip-proptypes"]
        }
    }
}
```

Ensure your NODE_ENV is set to 'production'. This should be done in any React project that is shipped to production using a bundler.

# Thanks

Thanks to @bloodyowl for his Babel 5 version of the project as a reference. Most of the tests are based on his original code.