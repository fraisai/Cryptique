aws dynamodb put-item \
    --table-name Users  \
    --item \
        '{"User": {"S": "user1"}, "UserId": {"S": "abc123"}, "TotalInvestments": {"N": "1303"}}'

aws dynamodb put-item \
    --table-name Users  \
    --item \
        '{"User": {"S": "user2"}, "UserId": {"S": "def456"}, "TotalInvestments": {"N": "11111"}}'

aws dynamodb put-item \
    --table-name Users \
    --item \
        '{"User": {"S": "user3"}, "UserId": {"S": "ghi789"}, "TotalInvestments": {"N": "934847"}}'
                            
aws dynamodb put-item \
    --table-name Users \
    --item \
        '{"User": {"S": "user4"}, "UserId": {"S": "jkl012"}, "TotalInvestments": {"N": "2394882"}}'