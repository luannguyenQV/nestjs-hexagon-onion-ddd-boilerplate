import { Module } from '@nestjs/common';
import { ApplicationBootstrapOption } from 'src/common/interfaces/application-bootstrap-option.interface';

@Module({})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOption) {
    return {
      module: CoreModule,
    };
  }
}
