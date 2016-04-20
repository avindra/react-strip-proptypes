# react-strip-proptypes

This is a babel plugin to remove propType definitions for your production React.js code.

# Installation

```
npm install --save-dev react-strip-proptypes
```

# Usage

Add the loader to your `.babelrc` file:


```
{
    ...
    "env" : {
        ...
        "production" : {
            "plugins" : ["react-strip-proptypes"]
        }
    }
}
```

# Thanks

Thanks to @bloodyowl for his Babel 5 version of the project as a reference. Most of the tests are based on his original code.