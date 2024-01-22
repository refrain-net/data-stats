(function () {
'use strict';


// ai_map[データ数 - 2][データ順序]で対象の値を取得
const ai_map = [
  [0.7071],
  [0.7071, 0.0000],
  [0.6872, 0.1667],
  [0.6646, 0.2413, 0.0000],
  [0.6431, 0.2806, 0.0875],
  [0.6233, 0.3031, 0.1401, 0.0000],
  [0.6052, 0.3164, 0.1743, 0.0561],
  [0.5885, 0.3244, 0.1976, 0.0947, 0.0000],
  [0.5739, 0.3291, 0.2141, 0.1224, 0.0399],
  [0.5601, 0.3315, 0.2260, 0.1429, 0.0695, 0.0000],
  [0.5475, 0.3325, 0.2347, 0.1586, 0.0922, 0.0303],
  [0.5359, 0.3325, 0.2412, 0.1707, 0.1099, 0.0539, 0.0000],
  [0.5251, 0.3318, 0.2460, 0.1802, 0.1240, 0.0727, 0.0240],
  [0.5150, 0.3306, 0.2495, 0.1878, 0.1353, 0.0880, 0.0433, 0.0000],
  [0.5056, 0.3290, 0.2521, 0.1939, 0.1449, 0.1005, 0.0593, 0.0196],
  [0.4968, 0.3273, 0.2540, 0.1988, 0.1524, 0.1109, 0.0725, 0.0359, 0.0000],
  [0.4886, 0.3253, 0.2553, 0.2027, 0.1587, 0.1197, 0.0837, 0.0496, 0.0163],
  [0.4808, 0.3232, 0.2561, 0.2059, 0.1641, 0.1271, 0.0932, 0.0612, 0.0303, 0.0000],
  [0.4734, 0.3211, 0.2565, 0.2085, 0.1686, 0.1334, 0.1013, 0.0711, 0.0422, 0.0140],
  [0.4643, 0.3185, 0.2578, 0.2119, 0.1736, 0.1399, 0.1092, 0.0804, 0.0530, 0.0263, 0.0000],
  [0.4590, 0.3156, 0.2571, 0.2131, 0.1764, 0.1443, 0.1150, 0.0878, 0.0618, 0.0368, 0.0122],
  [0.4542, 0.3126, 0.2563, 0.2139, 0.1787, 0.1480, 0.1201, 0.0941, 0.0696, 0.0459, 0.0228, 0.0000],
  [0.4493, 0.3098, 0.2554, 0.2145, 0.1807, 0.1512, 0.1245, 0.0997, 0.0764, 0.0539, 0.0321, 0.0107],
  [0.4450, 0.3069, 0.2543, 0.2148, 0.1822, 0.1539, 0.1283, 0.1046, 0.0823, 0.0610, 0.0403, 0.0200, 0.0000],
  [0.4407, 0.3043, 0.2533, 0.2151, 0.1836, 0.1563, 0.1316, 0.1089, 0.0876, 0.0672, 0.0476, 0.0284, 0.0094],
  [0.4366, 0.3018, 0.2522, 0.2152, 0.1848, 0.1584, 0.1346, 0.1128, 0.0923, 0.0728, 0.0540, 0.0358, 0.0178, 0.0000],
  [0.4328, 0.2992, 0.2510, 0.2151, 0.1857, 0.1601, 0.1372, 0.1162, 0.0965, 0.0778, 0.0598, 0.0424, 0.0253, 0.0084],
  [0.4291, 0.2968, 0.2499, 0.2150, 0.1864, 0.1616, 0.1395, 0.1192, 0.1002, 0.0822, 0.0650, 0.0483, 0.0320, 0.0159, 0.0000],
  [0.4254, 0.2944, 0.2487, 0.2148, 0.1870, 0.1630, 0.1415, 0.1219, 0.1036, 0.0862, 0.0697, 0.0537, 0.0381, 0.0227, 0.0076],
  [0.4220, 0.2921, 0.2475, 0.2145, 0.1874, 0.1641, 0.1433, 0.1243, 0.1066, 0.0899, 0.0739, 0.0585, 0.0435, 0.0289, 0.0144, 0.0000],
  [0.4188, 0.2898, 0.2462, 0.2141, 0.1878, 0.1651, 0.1449, 0.1265, 0.1093, 0.0931, 0.0777, 0.0629, 0.0485, 0.0344, 0.0206, 0.0068],
  [0.4156, 0.2876, 0.2451, 0.2137, 0.1880, 0.1660, 0.1463, 0.1284, 0.1118, 0.0961, 0.0812, 0.0699, 0.0530, 0.0395, 0.0262, 0.0131, 0.0000],
  [0.4127, 0.2854, 0.2439, 0.2132, 0.1882, 0.1667, 0.1475, 0.1301, 0.1140, 0.0988, 0.0844, 0.0706, 0.0572, 0.0441, 0.0314, 0.0187, 0.0062],
  [0.4096, 0.2834, 0.2427, 0.2127, 0.1883, 0.1673, 0.1487, 0.1317, 0.1160, 0.1013, 0.0873, 0.0739, 0.0610, 0.0484, 0.0361, 0.0239, 0.0119, 0.0000],
  [0.4068, 0.2813, 0.2415, 0.2121, 0.1833, 0.1678, 0.1496, 0.1331, 0.1179, 0.1036, 0.0900, 0.0770, 0.0645, 0.0523, 0.0404, 0.0287, 0.0172, 0.0057],
  [0.4040, 0.2794, 0.2403, 0.2116, 0.1883, 0.1683, 0.1505, 0.1344, 0.1196, 0.1056, 0.0924, 0.0798, 0.0677, 0.0559, 0.0444, 0.0331, 0.0220, 0.0110, 0.0000],
  [0.4015, 0.2774, 0.2391, 0.2110, 0.1881, 0.1686, 0.1513, 0.1356, 0.1211, 0.1075, 0.0947, 0.0824, 0.0706, 0.0592, 0.0481, 0.0372, 0.0264, 0.0158, 0.0053],
  [0.3989, 0.2755, 0.2380, 0.2104, 0.1880, 0.1689, 0.1520, 0.1366, 0.1225, 0.1092, 0.0967, 0.0848, 0.0733, 0.0622, 0.0515, 0.0409, 0.0305, 0.0203, 0.0101, 0.0000],
  [0.3964, 0.2737, 0.2368, 0.2098, 0.1878, 0.1691, 0.1526, 0.1376, 0.1237, 0.1108, 0.0986, 0.0870, 0.0759, 0.0651, 0.0546, 0.0444, 0.0343, 0.0244, 0.0146, 0.0049],
  [0.3940, 0.2719, 0.2357, 0.2091, 0.1876, 0.1693, 0.1531, 0.1384, 0.1249, 0.1123, 0.1004, 0.0891, 0.0782, 0.0677, 0.0575, 0.0476, 0.0379, 0.0283, 0.0188, 0.0094, 0.0000],
  [0.6917, 0.2701, 0.2345, 0.2085, 0.1874, 0.1694, 0.1535, 0.1392, 0.1259, 0.1136, 0.1020, 0.0909, 0.0804, 0.0701, 0.0602, 0.0506, 0.0411, 0.0318, 0.0227, 0.0136, 0.0045],
  [0.3894, 0.2684, 0.2334, 0.2078, 0.1871, 0.1695, 0.1539, 0.1398, 0.1269, 0.1149, 0.1035, 0.0927, 0.0824, 0.0724, 0.0628, 0.0534, 0.0422, 0.0352, 0.0263, 0.0175, 0.0087, 0.0000],
  [0.3872, 0.2667, 0.2323, 0.2072, 0.1868, 0.1695, 0.1542, 0.1405, 0.1278, 0.1160, 0.1049, 0.0943, 0.0842, 0.0745, 0.0651, 0.0560, 0.0471, 0.0383, 0.0296, 0.0211, 0.0126, 0.0042],
  [0.3850, 0.2651, 0.2313, 0.2065, 0.1865, 0.1695, 0.1545, 0.1410, 0.1286, 0.1170, 0.1062, 0.0959, 0.0860, 0.0765, 0.0673, 0.0584, 0.0497, 0.0412, 0.0328, 0.0245, 0.0163, 0.0081, 0.0000],
  [0.3830, 0.2635, 0.2302, 0.2058, 0.1862, 0.1695, 0.1548, 0.1415, 0.1293, 0.1180, 0.1073, 0.0972, 0.0876, 0.0783, 0.0694, 0.0607, 0.0522, 0.0439, 0.0357, 0.0277, 0.0197, 0.0118, 0.0039],
  [0.3808, 0.2620, 0.2291, 0.2052, 0.1859, 0.1695, 0.1550, 0.1420, 0.1300, 0.1189, 0.1085, 0.0986, 0.0892, 0.0801, 0.0713, 0.0628, 0.0546, 0.0465, 0.0385, 0.0307, 0.0229, 0.0153, 0.0076, 0.0000],
  [0.3789, 0.2604, 0.2281, 0.2045, 0.1855, 0.1693, 0.1551, 0.1423, 0.1306, 0.1197, 0.1095, 0.0998, 0.0906, 0.0817, 0.0731, 0.0648, 0.0568, 0.0489, 0.0411, 0.0355, 0.0259, 0.0185, 0.0111, 0.0037],
  [0.3770, 0.2589, 0.2271, 0.2038, 0.1851, 0.1692, 0.1553, 0.1427, 0.1312, 0.1205, 0.1105, 0.1010, 0.0919, 0.0832, 0.0748, 0.0667, 0.0588, 0.0511, 0.0436, 0.0361, 0.0288, 0.0215, 0.0143, 0.0071, 0.0000],
  [0.3751, 0.2574, 0.2260, 0.2032, 0.1847, 0.1691, 0.1554, 0.1430, 0.1317, 0.1212, 0.1113, 0.1020, 0.0932, 0.0846, 0.0764, 0.0685, 0.0608, 0.0532, 0.0459, 0.0386, 0.0314, 0.0244, 0.0174, 0.0104, 0.0035]
];

function stats (data, lsl, usl) {
  data = data.filter(isNumber).sort((a, b) => a - b);

  const n = data.length;
  const mean = Math.mean(...data);
  const min = Math.min(...data);
  const max = Math.max(...data);
  const median = Math.median(...data);

  const index = Math.floor(n / 2);
  const q = {};
  q.first = Math.median(...data.slice(0, index));
  q.third = Math.median(...data.slice(index + n % 2, n));
  q.delta = q.third - q.first;
  q.sd = q.delta / 2;

  const rss = Math.sum(...data.map(xi => (xi - mean) ** 2));
  const v = rss / (n - 1);
  const sd = v ** 0.5;

  const pci = {};
  pci.r = usl - lsl;
  pci.cp = pci.r / (6 * sd);
  pci.cpl = (mean - lsl) / (3 * sd);
  pci.cpu = (usl - mean) / (3 * sd);
  pci.cpk = Math.min(pci.cpl, pci.cpu);

  const n1 = n - 1, n2 = n - 2, n3 = n - 3;
  const skew = Math.sum(...data.map(xi => ((xi - mean) / sd) ** 3)) * n / n1 / n2;
  const kurt = Math.sum(...data.map(xi => (xi - mean) ** 4 / (sd ** 4))) * n * (n + 1) / n1 / n2 / n3 - 3 * n1 ** 2 / n2 / n3;

  const norm = i => Math.exp(-1 * ((i - mean) ** 2) / (2 * sd ** 2)) / (Math.sqrt(2 * Math.PI) * sd);
  const sw = data.filter((xi, i) => i < index).map((xi, i) => data[n - 1 - i] - xi)
      .reduce((ret, xi, i) => ret + ai_map[n - 2][i] * xi, 0) ** 2 / rss;

  return {n, mean, min, max, median, q, rss, v, sd, pci, skew, kurt, norm, sw};
}

const ctx = graph.getContext('2d');
const fontSize = 20;

function main (event) {
  const data = o0wW1dZt.value.replace(/\s/g, '').split(',').map(parseFloat);
  const lsl = parseFloat(uSVk70ah.value);
  const usl = parseFloat(LkpAPpSF.value);
  const {n, mean, min, max, median, q, rss, v, sd, pci, skew, kurt, norm, sw} = stats(data, lsl, usl);
  if (n < 2 || n > 50) throw new Error();

  const {height, width} = graph;
  graph.width = width;
  graph.height = height;

  ctx.fillStyle = 'white';
  graph.drawSquare(0, 0, width, height, true);

  ctx.strokeStyle = 'black';
  graph.drawSquare(0, 0, width, height);

  // ヒストグラム用のデータ生成
  const histo_span = parseFloat(ZWX7XxxQ.value);
  const histo_lower = parseFloat(jGaOPogr.value);
  const histo_upper = Math.max(max, usl) - histo_lower + histo_span;
  const histo_pos = histo_span / 2;
  const histo_height = height - 50;
  const histo = [];
  data.forEach(xi => {
    const index = Math.floor(xi / histo_span);
    histo[index] = histo[index] || [];
    histo[index].push(xi);
  });

  const scale = {
    x: width / histo_upper,
    y: histo_height / Math.max(...histo.filter(xi => xi).map(xi => xi.length)),
    norm: histo_height / norm(mean)
  };

  // ヒストグラムの目盛りの描画
  for (let x = 0; x <= histo_upper; x += histo_span)
    graph.drawLine(x * scale.x, 0, x * scale.x, fontSize);

  // ヒストグラムの描画
  ctx.fillStyle = 'rgb(0, 127, 255)';
  histo.forEach((xi, i) => {
    graph.drawSquare((i * histo_span - histo_lower + histo_span / 5) * scale.x, 0, (histo_span * 3 / 5) * scale.x, xi.length * scale.y, true);
  });

  // 正規分布曲線の描画
  let offset, t1, t2;
  for (let t = 0; t <= width; t++) {
    offset = histo_lower - histo_pos;
    t1 = t / scale.x + offset;
    t2 = (t + 1) / scale.x + offset;
    graph.drawLine(t, norm(t1) * scale.norm, t + 1, norm(t2) * scale.norm);
  }

  // 上限値・下限値の描画
  let x, y = histo_height - fontSize, ty = fontSize + 50;
  ctx.font = `${fontSize}px monospace`;
  ctx.textAlign = 'center';
  if (isNumber(lsl)) {
    x = (lsl + histo_pos - histo_lower) * scale.x;
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'blue';
    graph.drawLine(x, 0, x, y);
    ctx.fillText('LSL', x, ty);
  }
  if (isNumber(usl)) {
    x = (usl + histo_pos - histo_lower) * scale.x;
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';
    graph.drawLine(x, 0, x, y);
    ctx.fillText('USL', x, ty);
  }

  // 平均値の描画
  x = (mean + histo_pos - histo_lower) * scale.x;
  ctx.fillStyle = 'green';
  ctx.strokeStyle = 'green';
  graph.drawLine(x, 0, x, y);
  ctx.fillText('μ',  x, ty);

  // 平均値±3σの描画
  x = (mean - 3 * sd + histo_pos - histo_lower) * scale.x;
  y = histo_height / 2 - fontSize;
  ctx.fillStyle = 'purple';
  ctx.strokeStyle = 'purple';
  graph.drawLine(x, 0, x, y);
  ctx.fillText('-3σ', x, histo_height / 2 + ty);

  x = (mean + 3 * sd + histo_pos - histo_lower) * scale.x;
  ctx.fillStyle = 'orange';
  ctx.strokeStyle = 'orange';
  graph.drawLine(x, 0, x, y);
  ctx.fillText('+3σ', x, histo_height / 2 + ty);

  // 箱ひげ図の描画
  ctx.strokeStyle = 'black';
  graph.drawSquare((q.first + histo_pos - histo_lower) * scale.x, histo_height, q.delta * scale.x, 50);
  const min_x = (min + histo_pos - histo_lower) * scale.x;
  const med_x = (median + histo_pos - histo_lower) * scale.x;
  const max_x = (max + histo_pos - histo_lower) * scale.x;
  graph.drawLines([
    {startX: min_x, startY: histo_height, endX: min_x, endY: height},
    {startX: med_x, startY: histo_height, endX: med_x, endY: height},
    {startX: max_x, startY: histo_height, endX: max_x, endY: height},
    {startX: min_x, startY: histo_height + 25, endX: max_x, endY: histo_height + 25}
 ]);
  let DATA_SHOW = xI2sfRms.hasAttribute('show');
  if (this === xI2sfRms) {
    if (DATA_SHOW) {
      xI2sfRms.removeAttribute('show');
      xI2sfRms.textContent = 'データを表示する';
    } else {
      xI2sfRms.setAttribute('show', '');
      xI2sfRms.textContent = 'データを表示しない';
    }
    DATA_SHOW = !DATA_SHOW;
  }
  ctx.fillStyle = 'black';
  ctx.textAlign = 'start';
  result.innerHTML = '';
  const digit = parseInt(hAHihR4z.value);
  const format = [
    ['項目', '記号', '値'],
    ['データ数', 'n', n.toFixed(digit)],
    ['平均値', 'μ',  mean.toFixed(digit)],
    ['最小値', 'min', min.toFixed(digit)],
    ['最大値', 'max', max.toFixed(digit)],
    ['中央値', 'Χ', median.toFixed(digit)],
    ['第一四分位数', 'Q1', q.first.toFixed(digit)],
    ['第三四分位数', 'Q3', q.third.toFixed(digit)],
    ['四分位偏差', 'Qσ', q.sd.toFixed(digit)],
    ['平方和', 'RSS', rss.toFixed(digit)],
    ['分散', 'V', v.toFixed(digit)],
    ['標準偏差', 'σ', sd.toFixed(digit)],
    ['平均+3σ', 'μ+3σ', (mean + 3 * sd).toFixed(digit)],
    ['平均-3σ', 'μ-3σ', (mean - 3 * sd).toFixed(digit)],
    ['下限規格', 'LSL', isNumber(lsl)? lsl.toFixed(digit) : '-'],
    ['上限規格', 'USL', isNumber(usl)? usl.toFixed(digit) : '-'],
    ['工程能力', 'Cp', isNumber(pci.cp)? pci.cp.toFixed(digit) : '-'],
    ['工程能力(下側規格)', 'Cpl', isNumber(pci.cpl)? pci.cpl.toFixed(digit) : '-'],
    ['工程能力(上側規格)', 'Cpu', isNumber(pci.cpu)? pci.cpu.toFixed(digit) : '-'],
    ['工程能力', 'Cpk', isNumber(pci.cpk)? pci.cpk.toFixed(digit) : '-'],
    ['歪度', 'skew', skew.toFixed(digit)],
    ['尖度', 'kurt', kurt.toFixed(digit)],
    ['シャピロ-ウィルク検定', 'SW', sw.toFixed(digit)]
  ];
  const len1 = Math.max(...format.map(value => value[1].length));
  const len2 = Math.max(...format.map(value => value[2].length));

  let tag;
  format.forEach(([name, text, value], index) => {
    if (index > 0 && DATA_SHOW) ctx.fillText(`${text}${' '.repeat(len1 - text.length)} = ${' '.repeat(len2 - value.length) + value}`, fontSize, fontSize * (index + 1));
    tag = index? 'td': 'th';
    result.innerHTML += `<tr><${tag}>${name}</${tag}><${tag} align="center">${text}</${tag}><${tag} ${index? 'align="right"': ''}>${value}</${tag}></tr>`;
  });
}
window.addEventListener('load', main, false);
o0wW1dZt.addEventListener('change', main, false);
LkpAPpSF.addEventListener('change', main, false);
uSVk70ah.addEventListener('change', main, false);
ZWX7XxxQ.addEventListener('change', main, false);
jGaOPogr.addEventListener('change', main, false);
hAHihR4z.addEventListener('change', main, false);
xI2sfRms.addEventListener('click', main, false);
cTVruYhe.addEventListener('click', event => {
  const a = document.createElement('a');
  a.download = Date.now();
  a.href = graph.toDataURL();
  a.click();
}, false);

Math.mean = function (...values) {
  values = values.filter(isNumber);
  return Math.sum.apply(null, values) / values.length;
};
Math.median = function (...values) {
  values = values.filter(isNumber);
  const index = Math.floor(values.length / 2);
  return values.length % 2? values[index]: (values[index - 1] + values[index]) / 2;
};
Math.sum = function (...values) {
  return values.filter(isNumber).reduce((ret, xi) => ret + xi);
};
window.isNumber = function (value) {
  return typeof value === 'number' && isFinite(value);
};
})();