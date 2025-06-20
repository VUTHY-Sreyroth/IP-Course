import { ObjectType, Field, ID, registerEnumType, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../Student/student.entity';

export enum AttendanceStatus {
  P = 'P',
  AP = 'AP',
  L = 'L',
  A = 'A',
}

registerEnumType(AttendanceStatus, {
  name: 'AttendanceStatus',
});

@ObjectType()
@Entity()
export class Attendance {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  session: string;

  @Field(() => AttendanceStatus)
  @Column({ type: 'simple-enum', enum: AttendanceStatus })
  status: AttendanceStatus;

  @Field()
  @Column()
  marker: string;

  @Field(() => Int)
  @Column()
  student_id: number;

  @Field()
  @Column()
  className: string;

}
