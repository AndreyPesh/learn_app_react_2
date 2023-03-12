export const enum AuthPath {
  login = '/login',
  sign = '/sign',
}

export const enum Links {
  main = '/',
  smartphones = '/smartphones',
  smartphone = '/smartphone',
  computers = '/computers',
  refrigerators = '/refrigerators',
  furniture = '/furniture',
  user = '/user',
  admin = '/admin',
}

export const enum NavigationState {
  loading = 'loading',
  idle = 'idle',
  submitting = 'submitting',
}

export const enum ErrorMessageForm {
  required = '* Required field',
  invalidEmail = '* Invalid email address',
  leastSevenCharacters = '* Must be at least 7 characters',
  leastThreeCharacters = '* Must be at least 3 characters',
  passwordNotMatch = '* Passwords do not match',
}

export const enum AuthMessage {
  userLogin = 'Login user successful',
  userRegistered = 'User registered successful',
  wrong = 'Something went wrong',
  userUpdated = 'User data updated',
}

export const enum ListRole {
  user = 'user',
  admin = 'admin',
}

export const enum LoadPhotoErrors {
  INVALID_EXT = 'Invalid format image',
  CANT_LOAD = 'Cant load image',
}

export const enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
}
