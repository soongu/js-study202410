
// truthy, falsy : js는 논리가 아닌 데이터를 논리로 표현할 수 있다.
// 0, '', null, undefined, NaN - false로 취급한다. 나머지는 전부 true
if (false) console.log('참입니다1');
if (0) console.log('참입니다2');
if (null) console.log('참입니다3');
if (undefined) console.log('참입니다4');
if (NaN) console.log('참입니다5');
if ('') console.log('참입니다6');
if ('hello') console.log('참입니다7'); // true
if (-100.999) console.log('참입니다8'); // true
if ([1,2,3]) console.log('참입니다9'); // true
if (function () { }) console.log('참입니다10'); // true



