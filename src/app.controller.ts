import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// req, res에 대해 안다.
@Controller()
export class AppController {
  // Dependency Injection!! 마법이다! 재사용과 테스트에 용이함. 남이 넣어주는 함수 느낌. 재사용성이 높아짐. AppService가 매개변수의 역할을 함. 결합성을 낮추는 것.
  constructor(private readonly appService: AppService) {} 

  @Get()
  getHello() {
    return this.appService.getHello(); 
  }
  
}
