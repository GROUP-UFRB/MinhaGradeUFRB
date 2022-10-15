#refer to https://stackoverflow.com/questions/61272431/installing-poppler-utils-of-version-0-82-in-docker
#install poopler
FROM python:3-alpine
RUN apt-get update && apt-get install -y wget build-essential cmake libfreetype6-dev pkg-config libfontconfig-dev libjpeg-dev libopenjp2-7-dev
COPY ./service /service
WORKDIR /service

RUN wget https://poppler.freedesktop.org/poppler-data-0.4.9.tar.gz \
    && tar -xf poppler-data-0.4.9.tar.gz \
    && cd poppler-data-0.4.9 \
    && make install \
    && cd .. \
    && wget https://poppler.freedesktop.org/poppler-20.08.0.tar.xz \
    && tar -xf poppler-20.08.0.tar.xz \
    && cd poppler-20.08.0 \
    && mkdir build \
    && cd build \
    && cmake .. \
    && make \
    && make install \
    && ldconfig \
    && apt-get install -y tesseract-ocr python3-opencv libgdk-pixbuf2.0-dev \
    && pip install --no-cache-dir Pillow numpy pytesseract pdftoimg flask redis

ENV FLASK_APP=main.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN apt-get -y install gcc mono-mcs && \
    rm -rf /var/lib/apt/lists/*
EXPOSE 5000
CMD ["flask","run"]