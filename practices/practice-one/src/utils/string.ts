export const combineClasses = (classesInput: string[]) => {
  return classesInput.join(' ');
};

export const uppercaseFirstLetter = (stringInput: string) =>
  stringInput.replace(/^[a-z]/, (match) => match.toUpperCase());
