import { Injectable } from '@nestjs/common';
import { Attendance, AttendanceStatus } from './attendance.entity';
import { CreateAttendanceInput } from './attendance.input';
import { Student } from '../Student/student.entity';

@Injectable()
export class AttendanceService {
  attendance: any;
  private attendances: Attendance[] = [];
  private idCounter = 1;

create(input: CreateAttendanceInput): Attendance {
  const attendance: Attendance = {
    id: this.idCounter++,
    student_id: input.student_id,
    session: input.session,
    status: input.status,
    marker: input.marker,
    className: input.className, 
  };
  this.attendances.push(attendance);
  return attendance;
}


  update(id: number, input: CreateAttendanceInput): Attendance | null {
    const record = this.attendances.find((a) => a.id === id);
    if (!record) return null;
    Object.assign(record, input);
    return record;
  }

  remove(id: number): boolean {
    const index = this.attendances.findIndex((a) => a.id === id);
    if (index === -1) return false;
    this.attendances.splice(index, 1);
    return true;
  }

  findById(id: number): Attendance | undefined {
    return this.attendances.find((a) => a.id === id);
  }

  findByStudentId(student_id: number): Attendance[] {
    return this.attendances.filter((a) => a.student_id === student_id);
  }

  countByStudentId(student_id: number): number {
    return this.attendances.filter((a) => a.student_id === student_id).length;
  }

countByClass(className: string): number {
  return this.attendances.filter(a => a.className === className).length;
}


}