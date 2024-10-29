import { DataSource } from 'typeorm';
import { User } from '../entities/users.entity';

export class UserSeeder {
  constructor(private dataSource: DataSource) {}

  async run() {
    const userRepository = this.dataSource.getRepository(User);
    const users = [
      {
        username: 'chunky pandey',
        email: 'pandeychunky@gmail.com',
        password: 'xncfg',
      }
    ];

    await userRepository.save(users);
    console.log('Seed data inserted for Users');
  }
}