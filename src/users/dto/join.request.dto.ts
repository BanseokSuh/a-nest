import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
	@ApiProperty({
		example: 'still3028@gmail.com',
		description: '이메일',
		required: true
	})
	public email: string;

	@ApiProperty({
		example: '바니바니',
		description: '닉네임',
		required: true
	})
	public nickname: string;
	
	@ApiProperty({
		example: 'bannybanny',
		description: '비밀번호',
		required: true
	})
	public password: string;
}

// 네스트 코딩 컨벤션
// 1. 파일 이름 만들 때 .을 이용함
// 2. export default 안 쓰고 export 클래스
// 3. 인터페이스 안 쓰고 클래스로 만듦