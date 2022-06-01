//v.2
function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  if (!cacheSize) return cities.length * 5;
  function move_latest(city) {
    let idx = cache.indexOf(city);
    cache.push(...cache.splice(idx, 1));
  }

  cities.forEach((city) => {
    city = city.toUpperCase();
    // cache hit
    if (cache.includes(city)) {
      let idx = cache.indexOf(city);
      cache.splice(idx, 1);
      time++;
      // cache miss
    } else {
      if (cache.length === cacheSize) cache.shift();
      time += 5;
    }
    cache.push(city);
    // console.log("cache, time", cache, time);
  });
  return time;
}

//v.1
function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  function move_latest(city) {
    let idx = cache.indexOf(city);
    cache.push(...cache.splice(idx, 1));
  }

  cities.forEach((city) => {
    city = city.toUpperCase();
    // cache hit
    if (cache.includes(city)) {
      time++;
      move_latest(city);
      // cache miss
    } else if (cacheSize === 0) time += 5;
    else {
      if (cache.length === cacheSize) cache.shift();
      cache.push(city);
      time += 5;
    }
    // console.log("cache, time", cache, time);
  });
  return time;
}
