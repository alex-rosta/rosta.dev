#Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --verbose
COPY . .
RUN npm run build

#Stage 2: Run
FROM node:22-alpine AS runtime
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV GENERATE_SOURCEMAP=false
CMD [ "npm", "run", "start" ]