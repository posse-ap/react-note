FROM php:8.1.10-fpm

ENV COMPOSER_ALLOW_SUPERUSER 1

COPY run.sh /usr/local/bin/run.sh
COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt-get update \
 && apt-get install -y git libzip-dev nginx curl \
 && curl -fsSL https://deb.nodesource.com/setup_current.x | bash - \
 && apt-get install -y nodejs \
 && docker-php-ext-install pdo_mysql zip \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* \
 && groupadd -r nginx \
 && useradd -r -g nginx nginx \
 && mkdir -p /tmp/nginx/body \
 && chmod +x /usr/local/bin/run.sh \
 && mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" \
 && rm -rf /etc/nginx/conf.d/*

COPY php $PHP_INI_DIR
COPY etc /etc

WORKDIR /srv
CMD ["run.sh"]
