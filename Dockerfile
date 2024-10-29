# Use Node.js 20 (Alpine) as the base image
FROM node:20-alpine AS build
# Nginx setup
FROM nginx:alpine
RUN ls -l
RUN echo "Current Directory:"
RUN pwd

COPY --from=build /app/combined-dist/mfe-shell/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
# Start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

