# Setup Guide - Using .env Files

## What is `export` vs `.env` file?

### `export` (Command Line)
```bash
export ANTHROPIC_API_KEY="sk-ant-api03-..."
```
- Sets environment variable **for current terminal session only**
- Variable disappears when you close the terminal
- Good for: testing, one-time use

### `.env` File (Recommended)
```bash
# In your .env file
ANTHROPIC_API_KEY=sk-ant-api03-...
```
- Stores environment variables **in a file**
- Automatically loads when you run your code
- Variables persist across terminal sessions
- Good for: development, keeping secrets organized

## Setup Steps

### 1. Create a `.env` file

In your project root, create a file named `.env`:

```bash
# Copy the example file
cp .env.example .env
```

Or create it manually:
```bash
# .env
ANTHROPIC_API_KEY=sk-ant-api03-your-actual-key-here
```

### 2. Add your API key

Get your key from https://console.anthropic.com/settings/keys and paste it in the `.env` file:

```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Important**: No quotes needed! Just paste the key directly.

### 3. Install dependencies

```bash
npm install
```

This will install:
- `@anthropic-ai/sdk` - Claude API client
- `dotenv` - Loads variables from `.env` file
- TypeScript dependencies

### 4. Run the code

```bash
npm start
```

The `dotenv.config()` line in the code automatically reads your `.env` file!

## How it Works

In the code, this line loads your `.env` file:

```typescript
import dotenv from "dotenv";
dotenv.config();  // Reads .env and sets process.env variables
```

Then you can access variables with:
```typescript
const apiKey = process.env.ANTHROPIC_API_KEY;
```

## Security Best Practices

### ✅ DO:
- Add `.env` to your `.gitignore` file (keeps secrets out of Git)
- Create `.env.example` with dummy values (shows others what variables are needed)
- Use different `.env` files for different environments (`.env.development`, `.env.production`)

### ❌ DON'T:
- Commit `.env` files to Git (your API keys will be exposed!)
- Share your `.env` file (it contains secrets)
- Hardcode API keys in your source code

## .gitignore Setup

Make sure your `.gitignore` includes:

```
# Environment variables
.env
.env.local
.env.*.local

# Dependencies
node_modules/

# Build output
dist/
build/
```

## Different Environments

You can have multiple env files:

```
.env                  # Default/local development
.env.production       # Production settings
.env.test            # Test environment
```

Load specific ones with:
```typescript
import dotenv from "dotenv";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config(); // Loads .env by default
}
```

## Troubleshooting

### "API key not found" error

1. Check `.env` file exists in project root
2. Check variable name is spelled correctly: `ANTHROPIC_API_KEY`
3. Check no spaces around `=`: `ANTHROPIC_API_KEY=sk-ant...` ✅ not `ANTHROPIC_API_KEY = sk-ant...` ❌
4. Restart your program after editing `.env`

### Still not working?

Try loading `.env` manually:
```typescript
import dotenv from "dotenv";
const result = dotenv.config();

if (result.error) {
  console.error("Error loading .env:", result.error);
} else {
  console.log("Loaded .env successfully");
  console.log("API key starts with:", 
    process.env.ANTHROPIC_API_KEY?.slice(0, 10) + "...");
}
```

## Example .env File

```bash
# Anthropic API Key (required)
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Web Search (if you add it later)
BRAVE_API_KEY=BSA-xxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Custom settings
MAX_TOKENS=4096
MODEL_NAME=claude-sonnet-4-20250514
```

## Quick Start Checklist

- [ ] Create `.env` file in project root
- [ ] Add `ANTHROPIC_API_KEY=your-key-here`
- [ ] Add `.env` to `.gitignore`
- [ ] Run `npm install`
- [ ] Run `npm start`
- [ ] Verify it works!

That's it! Much easier than remembering to `export` every time you open a new terminal. 🎉
