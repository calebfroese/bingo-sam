# Bingo SAM

## 1 Create S3 bucket
Create an S3 bucket (sam-bingo) with public read

## 1.1 Upload Schema
This is needed due to issues with aws-cli (aws-cli/1.16.20) https://github.com/aws/aws-cli/issues/3394
`aws s3 cp src/schema.graphql s3://sam-bingo/schema.graphql`

## 2. Package
`$ sam package --template-file template.yaml --output-template-file packaged.yaml --s3-bucket sam-bingo`

## 3. Deploy!
`$ sam deploy --template-file packaged.yaml --stack-name sam-bingo --capabilities CAPABILITY_IAM --s3-bucket sam-bingo`

## Requirements
- aws-cli -> aws-cli/1.16.20 Python/3.7.0 Darwin/17.3.0 botocore/1.12.10
- sam -> SAM CLI, version 0.6.0

## Troubleshooting
- "The specified bucket does not exist" - Didn't create the S3 bucket public
- "The specified bucket does not exist" - Used S3 path (s3://mybucket/schema.graphql) instead of file path (src/schema.graphql)