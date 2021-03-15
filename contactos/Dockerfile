FROM node:alpine
USER root
WORKDIR /frontend
COPY . /frontend

ENV REACT_APP_HOST_IP_ADDRESS http://localhost:8000
EXPOSE 3000
RUN yarn
CMD yarn start