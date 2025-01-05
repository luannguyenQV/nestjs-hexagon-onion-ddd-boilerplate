import { Module } from '@nestjs/common';
import { AlarmsModule } from './alarms/application/alarms.module';
import { CoreModule } from './core/core.module';
import { ApplicationBootstrapOption } from './common/interfaces/application-bootstrap-option.interface';
import { AlarmInfrastructureModule } from './alarms/infrastructure/alarm-infrastructure.module';
import { PostsModule } from './posts/posts.module';
import { DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './database/config/database.config';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    CoreModule,
    PostsModule,
    CqrsModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
    AlarmsModule.withInfrastructure(AlarmInfrastructureModule.use('orm')),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static register(options: ApplicationBootstrapOption) {
    return {
      module: AppModule,
      imports: [
        // AlarmsModule.withInfrastructure(
        //   AlarmInfrastructureModule.use(options.driver || 'orm'),
        // ),
      ],
    };
  }
}
