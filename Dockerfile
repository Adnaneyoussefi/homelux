FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Start Nuxt dev server
CMD ["npm", "run", "dev"]
