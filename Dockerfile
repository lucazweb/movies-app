# This Docker Image solve node-sass env bind issue
FROM blairguk/node-sass-alpine:8.11.0

WORKDIR /app

COPY package*.json yarn.lock ./
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm install


COPY . .

EXPOSE 3000

CMD ["npm", "start"]