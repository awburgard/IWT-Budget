FROM node:10.15.1

WORKDIR /src/index.js/
COPY  package.json .
RUN npm install
COPY . .

CMD ["npm" "start"]