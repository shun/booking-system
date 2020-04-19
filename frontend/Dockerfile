FROM node:lts-slim

ARG WORKUSR=frontend

RUN apt update \
    && apt install -y \
        git \
        whois \
    && rm -rf /var/lib/apt/lists/* \
    && useradd -m -p `echo "$WORKUSR" | mkpasswd -s -m sha-512` -s /bin/bash $WORKUSR \
    && mkdir /project \
    && chown -R $WORKUSR:$WORKUSR /project \
    && npm install -g @angular/cli \
    && npm cache clean -f

USER $WORKUSR
WORKDIR /project

