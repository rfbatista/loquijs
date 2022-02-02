import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { DialogRegistryModule } from 'src/application/DialogRegistry/DialogRegistry.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'loqui',
      entities: [path.join(__dirname + '/../src/**/**.schema.ts')],
      migrations: ['src/migration/*{.ts,.js}'],
      synchronize: false,
      cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/migration',
      },
    }),
    DialogRegistryModule,
  ],
})
export class AppModule {}
