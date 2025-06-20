import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(() => Student)
  createStudent(@Args('input') input: CreateStudentInput) {
    return this.studentService.create(input);
  }

  @Mutation(() => Boolean)
  removeStudent(@Args('id', { type: () => Int }) id: number) {
    return this.studentService.remove(id);
  }

  @Mutation(() => Student, { nullable: true })
  updateStudent(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: CreateStudentInput,
  ) {
    return this.studentService.update(id, input);
  }

  @Query(() => [Student])
  getStudentsByClass(@Args('className') className: string) {
    return this.studentService.findByClass(className);
  }
  
}