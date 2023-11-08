# envoy-playground
## Run

```
docker-compose build && docker-compose up
```

Then you can start running requests against Envoy:

```
curl localhost:10001
Hello World!%
```

Or against the server directly:

```
curl localhost:8081
Hello World!%
```

## Configure

Edit [envoy.yaml](envoy.yaml) and [server.js](server.js), then [rerun](#Run).
