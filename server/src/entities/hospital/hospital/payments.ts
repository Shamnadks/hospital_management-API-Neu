//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('payments')
export class payments {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'appointment_id',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  appointment_id: number;
  @Column({ name: 'user_id', nullable: false, type: 'text', primary: false })
  user_id: string;
  @Column({ name: 'doctor_id', nullable: false, type: 'text', primary: false })
  doctor_id: string;
  @Column({
    name: 'payment_method',
    nullable: false,
    type: 'text',
    primary: false,
  })
  payment_method: string;
  @Column({
    name: 'razorpay_payment_id',
    nullable: false,
    type: 'text',
    primary: false,
  })
  razorpay_payment_id: string;
  @Column({ name: 'cash', nullable: false, type: 'bigint', primary: false })
  cash: number;
  @Column({ name: 'status', nullable: false, type: 'text', primary: false })
  status: string;
}
