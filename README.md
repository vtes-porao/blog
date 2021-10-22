# Blog do porão

This repository contains source code for generating a V:TES Blog names "V:TES Porão"

# Developing

First, install the dependencies, using `pnpm install`

Then, to run this blog in development mode, you need to open two console windows.


### Window 1: `pnpm dev:transform`
This will start the transform script which converts `mdx` files with our custom syntax into proper `mdx` files.
Then

### Window 2: `pnpm dev:start`
This will start `gatsby`, which powers our blog, and use the generated `mdx` files to create `html` files.