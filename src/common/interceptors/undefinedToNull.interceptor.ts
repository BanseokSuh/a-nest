// 인터셉터. 관심사를 가로로
// 컨트롤러 실행 전후로 인터셉터가 실행될 수 있음.

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs'; // ???????

// AOP (관점 지향 프로그래밍)
// 중복제거
// 각각의 기능들이 있는데, 공통적인 관심사 있을 때
// 횡단 관심사
// 'a' -> b -> c -> 'd' 
// 'a' -> b -> 'd'
// z -> 'a' -> c -> 'd'
// 'a' -> 'd'

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		next: CallHandler<any>,
	): Observable<any> | Promise<Observable<any>> {
		// 전 부분
		return next
			.handle()
			.pipe(map((data) => (data === undefined ? null : data)))
	}
}