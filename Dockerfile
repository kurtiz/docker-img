# **Build Stage**: Build the application
FROM node:21.7.3-alpine AS builder

# Set working directory to /app
WORKDIR /app

# Copy application files into the container
COPY . .

# Install app dependencies
RUN npm install

# **Test Stage**: Run tests (Dedicated test stage)
FROM builder AS tester

# Run tests as part of the test stage
RUN npm run test

# **Runtime Stage**: Prepare the runtime environment
FROM alpine:latest

# Install required runtime dependencies (but not test dependencies)
RUN apk add --update nodejs=22.11.0-r0 npm

# Set working directory to /app
WORKDIR /app

# Copy only the necessary files from the build stage (excluding test files)
COPY --from=builder /app /app

# Expose the app port
EXPOSE 8080

# Start the application
CMD ["npm", "run", "start"]
