import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ComponentSchema from './infrastructure/schemas/Component.schema';
import { FlowSchema } from './infrastructure/schemas/Flow.schema';
import StepSchema from './infrastructure/schemas/Step.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([ComponentSchema, FlowSchema, StepSchema]),
  ],
})
export class DialogRegistryModule {}
