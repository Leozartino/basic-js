function theBeatlesPlay (arrayMusicians, arrayInstruments){

  let arrayBeatles = []
  for (let x = 0 ; x < arrayMusicians.length; x++){
    arrayBeatles.push(`${arrayMusicians[x]} plays ${arrayInstruments[x]}`)
  };
  return arrayBeatles;
}

