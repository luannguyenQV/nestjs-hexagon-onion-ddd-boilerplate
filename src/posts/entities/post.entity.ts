import { PrimaryGeneratedColumn } from 'typeorm';

import { Column } from 'typeorm';

export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
