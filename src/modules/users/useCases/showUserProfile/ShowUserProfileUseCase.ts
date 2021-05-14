import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const foundUser = this.usersRepository.findById(user_id);

    if (!foundUser) {
      throw new Error("This id does not exists");
    }

    return foundUser;
  }
}

export { ShowUserProfileUseCase };
