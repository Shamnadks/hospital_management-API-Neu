//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('users')
export class users {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'text', primary: false })
  name: string;
  @Column({ name: 'phone_no', nullable: false, type: 'bigint', primary: false })
  phone_no: number;
  @Column({ name: 'age', nullable: false, type: 'bigint', primary: false })
  age: number;
  @Column({ name: 'place', nullable: false, type: 'text', primary: false })
  place: string;
  @Column({ name: 'address', nullable: false, type: 'text', primary: false })
  address: string;
  @Column({ name: 'pin_code', nullable: false, type: 'bigint', primary: false })
  pin_code: number;
  @Column({ name: 'email', nullable: false, type: 'text', primary: false })
  email: string;
  @Column({
    name: 'blood_group',
    nullable: false,
    type: 'text',
    primary: false,
  })
  blood_group: string;
}
