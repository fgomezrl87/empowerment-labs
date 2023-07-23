import { Injectable } from '@nestjs/common';
import { DbService } from '../../db/db.service';

@Injectable()
export class UserService {
  constructor(private dbService: DbService) {}

  async findOne(userId: string) {
    const params = {
      TableName: 'test_User',
      KeyConditionExpression: '#userId = :userId',
      ExpressionAttributeNames: {
        '#userId': 'userId',
      },
      ExpressionAttributeValues: {
        ':userId': userId,
      },
    };

    const result = await this.dbService.query(params);
    
    if (result.Items && result.Items.length > 0) {
      return result.Items[0];
    } else {
      return null;
    }
  }
}
