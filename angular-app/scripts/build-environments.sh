#!/bin/sh

cd src
mkdir environments
cd environments

echo "export const environment = {
  production: false,
  env: 'DEV',
  runner: {
    CI_SERVER: '$GITHUB_SERVER_URL',
    CI_RUNNER_DESCRIPTION: '$RUNNER_NAME ( $RUNNER_ENVIRONMENT )',
    CI_PROJECT_URL: '$GITHUB_REPOSITORY',
    CI_PIPELINE_NUMBER: '$GITHUB_RUN_NUMBER'
    }
  };" >| ../../src/environments/environment.ts
echo 'Finished setting up environment'

exit 0
