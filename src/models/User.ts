import { Table, Column, Model, HasMany } from 'sequelize-typescript';

import Hobby from './Hobby';

@Table
class User extends Model<User> {
  @Column
  name: string;

  @Column
  birthday: Date;

  @HasMany(() => Hobby, 'hobbyId')
  hobbies: Hobby[];
}

export default User;
