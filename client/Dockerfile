FROM node:latest

WORKDIR /usr/src/client
ENV NODE_PATH = .

ENV REACT_APP_CUBEJS_API_SECRET=fd5a864b689c62a278210ccba786fd704bd66a2b7d11fff93f9e6d99864916fde5ccff8465c3c697286b0c199dfda79fba3c3f233e836874e6ee45a7588b0e5d

COPY package.json .
COPY ["package.json","yarn.lock"] /usr/src/client
COPY . /usr/src/client/

CMD /bin/bash -c 'yarn install; yarn start'