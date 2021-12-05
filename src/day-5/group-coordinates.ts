export function groupCoordinates(coordinates: [number, number][][]): [number, number][] {
  return coordinates.reduce((result, movement) => {
    return result.concat(movement);
  }, []);
}
