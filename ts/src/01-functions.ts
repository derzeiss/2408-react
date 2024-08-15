// Solution 1: Cleaning the data
const solution1 = () => {
  function allPeople(trainerData: string[], attendeeData: string[]) {
    const result: string[] = [];
    return result.concat(trainerData, attendeeData);
  }

  const trainers = ['Joe', 'Toni'];
  const attendees = ['Max', 'Sepp', 'Arno', 'Otto'];

  const allTogether: string[] = allPeople(trainers, attendees);
};

// Solution 2: Union Type
const solution2 = () => {
  function allPeople(trainerData: string[], attendeeData: (string | number | boolean)[]) {
    const result: (string | number | boolean)[] = [];
    return result.concat(trainerData, attendeeData);
  }

  const trainers = ['Joe', 'Toni'];
  const attendees = ['Max', 'Sepp', true, 'Arno', 'Otto', 1];

  const allTogether: (string | number | boolean)[] = allPeople(trainers, attendees);
};

// Advanced solution with casting
const solution3 = () => {
  const convertToStringArray = (arr: unknown[]) => arr.map((item) => item + '');

  function allPeopleByCasting(trainerData: string[], attendeeData: unknown[]): string[] {
    const attendeeDataString = convertToStringArray(attendeeData);
    return trainerData.concat(attendeeDataString);
  }

  const trainers = ['Joe', 'Toni'];
  const attendees = ['Max', 'Sepp', 'Arno', 'Otto', 1, true, new Date()];

  const allTogether: string[] = allPeopleByCasting(trainers, attendees);

  console.log(allTogether);
};

// Advanced solution with type-check & error
const solution5 = () => {
  function allPeopleWithTypeGuard(trainerData: string[], attendeeData: unknown[]): string[] {
    if (isStringArray(attendeeData)) {
      return trainerData.concat(attendeeData);
    } else {
      throw new Error('attendeeData should be a string array');
    }
  }

  const isStringArray = (arr: unknown[]): arr is string[] => {
    return arr.every((i) => typeof i === 'string');
  };
};

// Advanced solution with TypeGuards and filtering
const solution4 = () => {
  const isString = (val: unknown): val is string => typeof val === 'string';

  function allPeopleByFiltering(trainerData: string[], attendeeData: unknown[]): string[] {
    const attendeeDataString = attendeeData.filter(isString);
    return trainerData.concat(attendeeDataString);
  }

  const trainers = ['Joe', 'Toni'];
  const attendees = ['Max', 'Sepp', 'Arno', 'Otto', 1, true, new Date()];

  const allTogether: string[] = allPeopleByFiltering(trainers, attendees);

  console.log(allTogether);
};

// This tells typescript that this is a module file instead of a global js file.
// Otherwise we wouldn't be able to redefine local variables (e.g. "attendees") in other filles
export {};
