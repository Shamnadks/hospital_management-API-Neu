//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('appointments')
export class appointments {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'user_id', nullable: false, type: 'text', primary: false })
  user_id: string;
  @Column({ name: 'doctor_id', nullable: false, type: 'text', primary: false })
  doctor_id: string;
  @Column({
    name: 'appointment_date',
    nullable: false,
    type: 'timestamp with time zone',
    primary: false,
  })
  appointment_date: Date;
  @Column({
    name: 'token_number',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  token_number: number;
  @Column({
    name: 'payment_method',
    nullable: false,
    type: 'text',
    primary: false,
  })
  payment_method: string;
  @Column({ name: 'cash', nullable: false, type: 'text', primary: false })
  cash: string;
  @Column({ name: 'status', nullable: false, type: 'text', primary: false })
  status: string;
}
