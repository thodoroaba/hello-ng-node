# Stage 1: Build the backend
FROM node:alpine AS backend-build
 
WORKDIR /backend
 
COPY backend/package*.json ./
RUN npm install
COPY backend ./
 
# Stage 2: Build the frontend
FROM node:alpine AS frontend-build
 
WORKDIR /frontend
 
COPY frontend/package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY frontend ./
RUN ng build
 
# Stage 3: Combine both backend and frontend
FROM node:alpine
 
# Backend
WORKDIR /app
COPY --from=backend-build /backend /app
 
# Frontend
COPY --from=frontend-build /frontend/dist /app/public
 
EXPOSE 3000
CMD [ "node", "index.js" ]