const { get } = require("axios");
require("should");

const headers = { "Content-Type": "application/json" };

const cases = [
  { a: 8, xs: 2703 },
  { a: 1, xs: 99 },
  { a: 4, xs: 783 },
  { a: -1, xs: 0.3 },
  { a: 0.5, xs: 48 },
];

const testFunc = async (a, xs) => {
  const URL1 = `https://kodaktor.ru/api2/there/${a}`;

  const { data: res1 } = await get(URL1, headers);

  const URL2 = `https://kodaktor.ru/api2/andba/${res1}`;

  const { data: res2 } = await get(URL2, headers);

  res1.should.equal(xs);
  res2.should.equal(a);
};

cases.forEach(({ a, xs }) =>
  describe(a + " testFunc", () =>
    it("should respond with smth", () => testFunc(a, xs))
  )
);

// При передаче результата запроса первого URL на второй URL, возвращается первоначальное число. Эта связь нарушается при использовании отрицательных и дробных чисел в качасте аргумента для первого URL;
