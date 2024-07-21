import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', length: 40 })
  job: string;

  @Column({ type: 'int' })
  work_experience: number;

  @Column({ type: 'varchar' })
  hobbies?: string[];

  @Column({ type: 'varchar' })
  role: string;
}
