export function convertToClasses(
  classInputs: (string | string[] | { [key: string]: boolean })[]
): string {
  const classesArray: string[] = [];

  classInputs.forEach(classInput => {
    if (typeof classInput === 'string') {
      classesArray.push(classInput);
    } else if (Array.isArray(classInput)) {
      classesArray.push(...classInput);
    } else if (typeof classInput === 'object') {
      Object.keys(classInput).forEach(key => {
        if (classInput[key]) {
          classesArray.push(key);
        }
      });
    }
  });

  return classesArray.join(' ');
}
