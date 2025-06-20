import { InputType, Field, Int } from '@nestjs/graphql';
import { AttendanceStatus } from './attendance.entity';


@InputType()
export class CreateAttendanceInput {
  @Field()
  session: string;

  @Field(() => AttendanceStatus)
  status: AttendanceStatus;

  @Field()
  marker: string;

  @Field(() => Int)
  student_id: number;
  
  @Field()
  className: string;
}
