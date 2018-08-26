import { DynamoDB } from 'aws-sdk';

import { QUESTIONS } from './questions';

export async function joinGame(event: any, context: any, callback: any) {
  const Item = {
    username: event.username,
    card: createCard()
  };
  await new DynamoDB.DocumentClient()
    .put({
      TableName: process.env.DYNAMODB_BINGO_TABLE,
      Item
    })
    .promise();
  callback(null, Item);
}

export function createCard() {
  const qs = shuffleArray([...QUESTIONS]).map(value => ({
    value,
    selected: false
  }));
  return [[qs[0], qs[1], qs[2]], [qs[3], qs[4], qs[5]], [qs[6], qs[7], qs[8]]];
}

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
