ARG NODE_VERSION
FROM node:${NODE_VERSION:-latest}
RUN npm run build
ENTRYPOINT ["babel-node"]
CMD ["server.js"]
