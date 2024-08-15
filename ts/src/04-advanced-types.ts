type UserType = 'admin' | 'user' | 'guest';

interface User {
  id: string;
  email: string;
  password: string;
  type: UserType;
  address: string;
}

const john: User = {
  id: '1',
  email: 'john@doe.com',
  password: '123',
  type: 'admin',
  address: '',
};

const newUser: UserCreateDTO = {
  email: 'new@user.com',
  password: '123',
  type: 'guest',
  address: '',
};

type UserCreateDTO = Omit<User, 'id'>;
type UserLoginDTO = Pick<User, 'email' | 'password'>;
type UserDTO = Partial<User>;
type UserPatchDTO = Partial<Omit<User, 'id'>>;
type UserPatchDTO2 = Omit<UserDTO, 'id'>;

/* ---------------------------- */

const reverse = <T>(items: T[]): T[] => {
  let result = [];
  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
};

const reverse2 = <T extends unknown[]>(items: T): T => {
  let result: T[] = [];
  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i] as T);
  }
  return result as T;
};

reverse<string>(['1', '2', '3']);
reverse2([1, 2, 3]);
