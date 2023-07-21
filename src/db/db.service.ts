import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DbService {
  private dynamoDb;

  constructor(private configService: ConfigService) {
    AWS.config.update({
      accessKeyId: this.configService.get('_AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get('_AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get('_AWS_REGION'),
    });

    this.dynamoDb = new AWS.DynamoDB.DocumentClient();
  }

  putItem(tableName: string, item: any): Promise<void> {
    const params = {
      TableName: tableName,
      Item: item,
    };

    return new Promise((resolve, reject) => {
      this.dynamoDb.put(params, (err) => {
        if (err) {
          console.error('Unable to put item. Error:', JSON.stringify(err, null, 2));
          reject(err);
        } else {
          console.log('PutItem succeeded:', JSON.stringify(item, null, 2));
          resolve();
        }
      });
    });
  }
}
