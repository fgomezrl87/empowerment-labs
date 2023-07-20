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

  getHelloDB(yourIdValue: number): Promise<any> {
    const params = {
      TableName: 'test',
      Key: {
        'id': yourIdValue,
      }
    };
  
    return new Promise((resolve, reject) => {
      this.dynamoDb.get(params, (err, data) => {
        if (err) {
          console.error("Unable to get item. Error:", JSON.stringify(err, null, 2));
          reject(err);
        } else {
          console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
          resolve(data);
        }
      });
    });
  }
x
}
