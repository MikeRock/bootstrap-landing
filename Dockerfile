ARG NODE_VERSION
FROM node:${NODE_VERSION:-latest}
ENTRYPOINT [ "babel-node" ]
CMD ["server.js"]
