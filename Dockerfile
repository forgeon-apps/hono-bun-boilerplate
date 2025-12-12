# Use official Bun image
FROM oven/bun:1 AS base

WORKDIR /app

# Install deps
COPY bun.lockb package.json ./
RUN bun install --frozen-lockfile

# Copy source
COPY . .

EXPOSE 3000

# Run the Hono app
CMD ["bun", "run", "src/index.ts"]
