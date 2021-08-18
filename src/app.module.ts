import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, WorkspacesModule, ChannelsModule, DmsModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule implements NestModule { // implements를 하는 이유. 없어도 에러는 안 나는데 사전에 에러를 잡기 위함이다.
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // 전체 라우트에 미들웨어를 적용하겠다. 미들웨어는 컨슈머에 연결한다.
  }
}
