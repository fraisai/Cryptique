aws dynamodb create-table \
    --table-name Users \
    --attribute-definitions \
        AttributeName=User,AttributeType=S \
        AttributeName=UserId,AttributeType=S \
    --key-schema \
        AttributeName=User,KeyType=HASH \
        AttributeName=UserId,KeyType=RANGE \
    --provisioned-throughput \
        ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --table-class STANDARD