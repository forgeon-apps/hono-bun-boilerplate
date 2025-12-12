FROM oven/bun:1.1 AS base
WORKDIR /app

# Only copy package.json (no bun.lockb)
COPY package.json ./

# Install deps
RUN bun install

# Copy source
COPY . .

EXPOSE 3000
CMD ["bun", "run", "src/index.ts"]
