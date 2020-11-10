FROM node:13.12.0-alpine AS builder

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
# doing this separate from the code lets Docker keep a cache
# of node_modules and only rebuild when these files change
COPY package.json yarn.lock ./
RUN yarn install

# copy UI code into image (note .dockerignore)
COPY ./ ./
RUN yarn storybook:build



FROM nginx:alpine
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/storybook/dot-components /usr/share/nginx/html
