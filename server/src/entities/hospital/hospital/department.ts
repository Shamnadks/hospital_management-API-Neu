//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column, Unique } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('department')
@Unique('department', ['id', 'name'])
export class department {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'text', primary: false })
  name: string;
  @Column({ name: 'info', nullable: false, type: 'text', primary: false })
  info: string;
  @Column({ name: 'status', nullable: false, type: 'boolean', primary: false })
  status: boolean;
}
