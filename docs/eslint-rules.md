# 🚨 ESlint rules

## Settings

`.eslintrc`

```json
"rules": {
    "complexity": ["error", { "max": 8 }],
    "max-depth": ["error", 2],
    "max-lines": ["error", 160],
    "max-lines-per-function": ["error", 20],
    "max-nested-callbacks": ["error", 1],
    "max-params": ["error", 2],
    "no-magic-numbers": [
        "error",
        { "detectObjects": true, "enforceConst": true, "ignore": [1], "ignoreArrayIndexes": true }
    ],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "no-nested-ternary": "error",
    "no-unused-vars": ["warn"],
    "@typescript-eslint/no-use-before-define": "off"
},
```

### ⚡ Attention

> Some rules must not be applied to **test files** in order to keep them explicit and self contained.
