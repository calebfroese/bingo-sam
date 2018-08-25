# Bingo SAM

`$ sam package --template-file template.yaml --output-template-file packaged.yaml --s3-bucket sam-bingo`

`$ sam deploy --template-file packaged.yaml --stack-name sam-bingo --capabilities CAPABILITY_IAM`