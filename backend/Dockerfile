FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json only first to leverage Docker cache
COPY package*.json ./

# Install dependencies INSIDE the container
RUN npm install

# Then copy the rest of the app
COPY . .

EXPOSE 3001
CMD ["node", "server.js"]
