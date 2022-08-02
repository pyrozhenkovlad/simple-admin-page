import { User } from "./users.schema";
import { UsersService } from "./users.service";
import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Res() response, @Body() user: User) {
    const newUser = await this.usersService.createUser(user);
    return response.status(HttpStatus.CREATED).json({
      newUser,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const users = await this.usersService.getAllUsers();
    return response.status(HttpStatus.OK).json({
      users,
    });
  }
}
