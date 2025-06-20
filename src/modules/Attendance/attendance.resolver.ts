import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttendanceService } from './attendance.service';
import { Attendance } from './attendance.entity';
import { CreateAttendanceInput } from './attendance.input';

@Resolver(() => Attendance)
export class AttendanceResolver {
  attendances: any;
  constructor(private attendanceService: AttendanceService) {}

  @Mutation(() => Attendance)
  markAttendance(@Args('input') input: CreateAttendanceInput) {
    return this.attendanceService.create(input);
  }

  @Mutation(() => Boolean)
  removeAttendance(@Args('id', { type: () => Int }) id: number) {
    return this.attendanceService.remove(id);
  }

  @Mutation(() => Attendance, { nullable: true })
  updateAttendance(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: CreateAttendanceInput,
  ) {
    return this.attendanceService.update(id, input);
  }

  @Query(() => Attendance, { nullable: true })
  getAttendanceById(@Args('id', { type: () => Int }) id: number) {
    return this.attendanceService.findById(id);
  }

  @Query(() => [Attendance])
  getAttendanceByStudentId(@Args('student_id', { type: () => Int }) studentId: number) {
    return this.attendanceService.findByStudentId(studentId);
  }

  @Query(() => Int)
  countByClass(@Args('className', { type: () => String }) className: string) {
    return this.attendanceService.countByClass(className);
  }



  // Add this query to count attendance by student ID
  @Query(() => Int)
  countByStudentId(@Args('student_id', { type: () => Int }) studentId: number) {
    return this.attendanceService.countByStudentId(studentId);
  }
}
