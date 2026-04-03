# Use a more recent Node version (Node 12 is outdated)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Run tests (optional – remove if not needed in build)
RUN npm test

# Expose the app port
EXPOSE 8000

# Start the app
CMD ["node", "app.js"]
