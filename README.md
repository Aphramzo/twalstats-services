![Tests](https://github.com/Aphramzo/twalstats-services/workflows/Tests/badge.svg)

# Services for twalstats

## Usage

## Development

### Testing

Use yarn as the package manager. To get started, run

```
yarn
```

If you do not have yarn installed, please refer here: https://yarnpkg.com/

### Deploying

Deployment is done use AWS SAM. To get started, make sure you have the SAM CLI installed: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

First you will need to create an s3 bucket for staging. Once that is complete you will upload your package there:

```
yarn package --s3-bucket <s3-bucket-name>
```

For our case the bucket name is `twalstats-package`.

One the packaged, you can deploy all changes to your stack:

```
yarn deploy --stack_name <stack name>
```

For our case the stack name is `twalstats-service`.

### Testing

All code should be under unit tests. You can run all tests with the test script:

```
yarn test
```
