export function binaryToDecimal(binary: string) {
  let bits = binary.split('');

  return bits.reduceRight((result, bitString, index) => {
    return result + +bitString * Math.pow(2, bits.length - (index + 1));
  }, 0);
}
