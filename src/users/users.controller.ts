import { Body, Controller, Get, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('USER')
@Controller('api/users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@ApiResponse({
		type: UserDto
	})
	@ApiOperation({summary: '내 정보 조회'})
	@Get()
	getUsers(@User() user) {
		return user;
	}

	@ApiOperation({summary: '회원가입'})
	@Post()
	postUsers(@Body() body: JoinRequestDto) {
		this.usersService.postUsers(body.email, body.nickname, body.password);
	}

	@ApiResponse({
		status: 200,
		description: '성공',
		type: UserDto
	})
	@ApiResponse({
		status: 500,
		description: '서버 에러',
	})
	@ApiOperation({summary: '로그인'})
	@Post('login')
	login(@User() user) {
		return user;
	}

	@ApiOperation({summary: '로그아웃'})
	@Post('logout')
	logOut(@Req() req, @Res() res) {
		req.logOut();
		res.clearCookie('connect.sid', { httpOnly: true })
		res.send('ok');
	}
}
