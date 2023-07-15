FROM ubuntu:22.04
USER root

RUN apt-get update
RUN apt-get upgrade
RUN apt -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm

RUN apt-get install -y vim less
RUN apt-get install -y curl
RUN apt-get install -y vim less
RUN apt-get install python3 -y
RUN apt-get install python3.10-venv -y
RUN apt-get install pip -yu
RUN apt-get install -y curl
RUN apt-get install -y nodejs npm
RUN npm install n -g
RUN n 18.16.0
WORKDIR /app
RUN npm install