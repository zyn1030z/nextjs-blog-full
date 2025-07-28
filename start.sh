#!/bin/bash

# Kill any process running on port 3000
echo "Killing any process on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Start the development server
echo "Starting Next.js development server..."
bun dev 