Simple Calculator (Node.js)

Usage:
- Run REPL: node index.js  -> prompts calc> for expressions (type exit or quit to leave)
- Evaluate expression: node index.js "2+3*4"
- Subcommands:
  - node index.js add 1 2 3    # prints 6
  - node index.js mul 2 3 4    # prints 24
  - node index.js sub 10 3     # prints 7
  - node index.js div 10 2     # prints 5
  - node index.js mod 10 3     # prints 1

Notes:
- Expression mode only allows digits and +-*/%^(). and whitespace; ^ is treated as exponent.
- To install globally as `calc`: from repo root run `npm link` (requires npm).