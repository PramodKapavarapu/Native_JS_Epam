function prefill(noOfElements, value) {
  if(!Number.isInteger(Number(noOfElements)) || typeof noOfElements === "boolean" || !isFinite(noOfElements) || noOfElements < 0){
    throw new TypeError(`${noOfElements} is invalid`);
  }
  return new Array(Number(noOfElements)).fill(value);
}