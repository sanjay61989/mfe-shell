# Use Node.js 20 (Alpine) as the base image
FROM node:20-alpine AS build


# Install necessary packages
RUN apk add --no-cache git

# Set the working directory
WORKDIR /app
RUN mkdir -p combined-dist
# Clone the repositories
RUN git clone https://github.com/sanjay61989/mfe-shell.git
RUN git clone https://github.com/sanjay61989/gym-tracker.git
RUN git clone https://github.com/sanjay61989/meal-planner.git

# Build each repository

# Build each repository and copy the dist files
## Building mfe-shell and copy dist
WORKDIR /app/mfe-shell
RUN npm install
RUN npm run build
RUN mkdir -p /app/combined-dist/mfe-shell
RUN cp -rf /app/mfe-shell/dist/shell/browser/* /app/combined-dist/mfe-shell

## Building gym-tracker and copy dist
WORKDIR /app/gym-tracker
RUN npm install
RUN npm run build
RUN mkdir -p /app/combined-dist/mfe-shell/gym-tracker
RUN cp -rf /app/gym-tracker/dist/gym-tracker/browser/* /app/combined-dist/mfe-shell/gym-tracker

## Building meal-planner and copy dist
WORKDIR /app/meal-planner
RUN npm install
RUN npm run build
RUN mkdir -p /app/combined-dist/mfe-shell/meal-planner
RUN cp -r /app/meal-planner/dist/meal-planner/browser/* /app/combined-dist/mfe-shell/meal-planner


