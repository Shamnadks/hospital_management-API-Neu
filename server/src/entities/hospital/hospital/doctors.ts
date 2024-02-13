//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('doctors')
export class doctors {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'text', primary: false })
  name: string;
  @Column({ name: 'phone_no', nullable: false, type: 'bigint', primary: false })
  phone_no: number;
  @Column({ name: 'email', nullable: false, type: 'text', primary: false })
  email: string;
  @Column({ name: 'address', nullable: false, type: 'text', primary: false })
  address: string;
  @Column({ name: 'age', nullable: false, type: 'bigint', primary: false })
  age: number;
  @Column({
    name: 'department_id',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  department_id: number;
  @Column({ name: 'education', nullable: false, type: 'text', primary: false })
  education: string;
  @Column({ name: 'salary', nullable: false, type: 'bigint', primary: false })
  salary: number;
  @Column({
    name: 'token_limit',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  token_limit: number;
  @Column({ name: 'status', nullable: false, type: 'text', primary: false })
  status: string;
}
