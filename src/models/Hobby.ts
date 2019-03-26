import { Model, Table, Column, BelongsTo } from 'sequelize-typescript';

import User from './User';

@Table
class Hobby extends Model<Hobby> {
  @Column
  title: string;

  @Column
  description: string;

  @BelongsTo(() => User, 'userId')
  user: User;
}

export default Hobby;
