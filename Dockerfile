# Stage 1: Build
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build -- --configuration production

# Stage 2: Nginx serve
FROM nginx:alpine
COPY --from=build /app/dist/laxmi-dresses /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
