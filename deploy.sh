#!/bin/sh

FUNCTION=myContentServer03

echo "🗂 Create Lambda.zip"
zip -r Lambda.zip .

echo "⬆️ Upload Lambda.zip to AWS Lambda";
aws lambda update-function-code --function-name $FUNCTION --zip-file fileb://Lambda.zip

echo "🗑 Remove Lambda.zip"
rm Lambda.zip
