To run:
consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -ui -bind 127.0.0.1
cd app && DEBUG=app:* npm start
cd sidecar && ./gradlew bootRun
