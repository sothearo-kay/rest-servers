# Stage 1: Build the application
FROM node:18.18.0 AS build

WORKDIR /app

# Copy only package.json and install all dependencies (including dev)
COPY package*.json ./
RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build

# Stage 2: Production Stage
FROM node:18.18.0

WORKDIR /app

# Copy package.json and reinstall only production dependencies
COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/prisma ./prisma
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules/.prisma/client ./node_modules/.prisma/client
# Copy the generated Prisma Client

ENV PORT=3000

EXPOSE 3000

# sh -c to execute the provided string as a shell command.
CMD ["sh", "-c", "npm start"]
