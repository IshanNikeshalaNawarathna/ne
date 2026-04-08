FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

RUN cp -r .next/static .next/standalone/.next/ && \
    cp -r public .next/standalone/

EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]