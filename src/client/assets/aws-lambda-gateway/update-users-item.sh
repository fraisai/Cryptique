aws dynamodb update-item \
    --table-name Users \
    --key '{"User": {"S": "user1"}, "UserId": {"S": "abc123"}, "TotalInvestments": {"N": "1303"}}' \
    --update-expression "SET TotalInvestments = 2334333" \
    --return-values ALL_NEW