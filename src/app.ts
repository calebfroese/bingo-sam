const AWS = require('aws-sdk');

const QUESTIONS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  '123',
  '456',
  '678'
];

export async function joinGame(event: any, context: any, callback: any) {
  const result = await new AWS.DynamoDB.DocumentClient()
    .put({
      TableName: process.env.DYNAMODB_BINGO_TABLE,
      Item: {
        username: event.username,
        card: QUESTIONS
      }
    })
    .promise();

  callback(null, {
    username: JSON.stringify(result.$response)
  });
}

export function createCard(
  options = {
    rows: 5,
    columns: 5
  }
) {
  return [];
}
