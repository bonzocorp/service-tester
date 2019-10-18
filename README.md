# services-tester

Node APP to Read and write from services provisioned by the
following brokers:

- [vault-service-broker]: https://github.com/hashicorp/vault-service-broker

## test

Run tests inside docker to do also nice integration testing:

    docker-compose up --force-recreate test

This will create containers for vault and run the tests inside
docker.

## Deploying to CF

    git clone https://github.com/bonzocorp/service-tester
    cd service-tester
    cf push

## Other resources

[Vault]: https://vaultproject.io/
[docker-compose]: https://www.docker.com/docker-compose
[docker]: http://docs.docker.com/
[docker toolbox]: https://www.docker.com/toolbox
