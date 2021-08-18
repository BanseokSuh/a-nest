import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WORKSPACE')
@Controller('api/workspaces')
export class WorkspacesController {
	@Get()
	getMyWorkspaces() { }
	
	@Post()
	createWorkspaces() { }
	
	@Get(':url/members')
	getAllMembersFromWorkspace() { }
	
	@Post(':url/members')
	inviteMembersToWorkspace() { }
	
	@Delete(':url/members/:id')
	kickMemberFromWorkspace() { }
	
	@Get(':url/members/:id')
	getMemberInfoInWorkspace() { }
	
	// api 설계 실수했을 때!!
	@Get(':url/users/:id')
	DEPRECATED_getMemberInfoInWorkspace() {
		this.getMemberInfoInWorkspace();
	}
}
