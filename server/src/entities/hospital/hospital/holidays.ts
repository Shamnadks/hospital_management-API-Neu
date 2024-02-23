//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('holidays')
export class holidays {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'starting_date',
    nullable: false,
    type: 'timestamp with time zone',
    primary: false,
  })
  starting_date: Date;
  @Column({
    name: 'end_date',
    nullable: false,
    type: 'timestamp with time zone',
    primary: false,
  })
  end_date: Date;
  @Column({ name: 'name', nullable: false, type: 'text', primary: false })
  name: string;
  @Column({ name: 'days', nullable: false, type: 'bigint', primary: false })
  days: number;
}
