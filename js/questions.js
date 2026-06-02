const QUESTIONS = [
  {
    id: 1,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "python",
    title: "リストの添字を使った値の取得",
    prompt: "次のプログラムの [ ア ] に入る値として正しいものを選びなさい。（x には 10 を代入したい）",
    code: `data = [5, 10, 15, 20]
x = data[[ ア ]]
print(x)`,
    choices: ["0", "1", "2", "3"],
    correctIndex: 1,
    explanation: "Pythonのリストは添字が【0】から始まります。<br>data[0]=5, data[1]=<strong>10</strong>, data[2]=15 …<br>10 を取り出すには添字 <strong>1</strong> が必要です。"
  },
  {
    id: 2,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "python",
    title: "変数への代入と計算",
    prompt: "次のプログラムを実行したとき、print(x) の出力値を選びなさい。",
    code: `x = 3
x = x + 4
print(x)`,
    choices: ["3", "4", "7", "12"],
    correctIndex: 2,
    explanation: "最初に x は 3 です。<br>x = x + 4 により、3 + 4 = <strong>7</strong> になります。"
  },
  {
    id: 3,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "python",
    title: "条件分岐の条件",
    prompt: "score が 60 以上のときに「合格」と表示するには、[ ア ] に何を入れればよいですか。",
    code: `score = 75
if score [ ア ] 60:
    print("合格")`,
    choices: ["<", ">", ">=", "=="],
    correctIndex: 2,
    explanation: "60以上は <strong>>= 60</strong> と書きます。score は75なので条件を満たし、「合格」と表示されます。"
  },
  {
    id: 4,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "基礎",
    langMode: "python",
    title: "表示する関数の実行回数",
    prompt: "次のプログラムにおいて、print(i) は何回実行されますか。",
    code: `for i in range(4):
    print(i)`,
    choices: ["3回", "4回", "5回", "0回"],
    correctIndex: 1,
    explanation: "range(4) は 0, 1, 2, 3 の4個の値を作ります。<br>そのため print(i) は <strong>4回</strong> 実行されます。"
  },
  {
    id: 5,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "python",
    title: "文字列の連結",
    prompt: "次のプログラムを実行したとき、出力される文字列を選びなさい。",
    code: `a = "情報"
b = "I"
print(a + b)`,
    choices: ["情報I", "情報 I", "a+b", "I情報"],
    correctIndex: 0,
    explanation: "文字列同士を + でつなげると、そのまま連結されます。<br>よって <strong>情報I</strong> です。"
  },
  {
    id: 6,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "基礎",
    langMode: "python",
    title: "偶数判定の表記",
    prompt: "変数 n が偶数のときだけ「偶数」と表示するプログラム表記として正しいものを選びなさい。",
    code: `n = 8
# n が偶数なら「偶数」と表示する`,
    choices: [
      `if n % 2 == 0:
    print("偶数")`,
      `if n / 2 == 0:
    print("偶数")`,
      `if n % 2 == 1:
    print("偶数")`,
      `if n == 2:
    print("偶数")`
    ],
    correctIndex: 0,
    explanation: "偶数は 2 で割った余りが 0 の数です。<br>Pythonでは余りを <strong>%</strong> で求めるので、n % 2 == 0 が正解です。"
  },
  {
    id: 7,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "python",
    title: "リスト要素の更新",
    prompt: "次のプログラムを実行したとき、print(nums[1]) の出力値を選びなさい。",
    code: `nums = [2, 4, 6]
nums[1] = nums[1] + 3
print(nums[1])`,
    choices: ["4", "5", "7", "9"],
    correctIndex: 2,
    explanation: "nums[1] は2番目の要素なので 4 です。<br>4 + 3 = <strong>7</strong> に更新されます。"
  },
  {
    id: 8,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "python",
    title: "繰り返し回数の穴埋め",
    prompt: "「Hello」を5回表示するには、[ ア ] に何を入れればよいですか。",
    code: `for i in range([ ア ]):
    print("Hello")`,
    choices: ["4", "5", "6", "10"],
    correctIndex: 1,
    explanation: "range(5) は 0,1,2,3,4 の5回分の繰り返しを作ります。<br>よって [ ア ] は <strong>5</strong> です。"
  },
  {
    id: 9,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "基礎",
    langMode: "python",
    title: "条件を満たす回数",
    prompt: "次のプログラムにおいて、count += 1 は何回実行されますか。",
    code: `count = 0
for i in range(5):
    if i >= 2:
        count += 1
print(count)`,
    choices: ["1回", "2回", "3回", "5回"],
    correctIndex: 2,
    explanation: "i は 0,1,2,3,4 と変化します。<br>i >= 2 を満たすのは 2,3,4 の <strong>3回</strong> です。"
  },
  {
    id: 10,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "基礎",
    langMode: "python",
    title: "最大値の取り出し",
    prompt: "リスト nums の中から最大値を表示するコードとして正しいものを選びなさい。",
    code: `nums = [3, 9, 1, 6]
# 最大値を表示する`,
    choices: [
      `print(max(nums))`,
      `print(min(nums))`,
      `print(len(nums))`,
      `print(nums[0])`
    ],
    correctIndex: 0,
    explanation: "Pythonでは max(リスト) で最大値を求められます。<br>このリストの最大値は <strong>9</strong> です。"
  },
  {
    id: 11,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "python",
    title: "rangeの開始と終了",
    prompt: "次のプログラムを実行したとき、print(s) の出力値を選びなさい。",
    code: `s = 0
for i in range(1, 5):
    s = s + i
print(s)`,
    choices: ["6", "10", "15", "5"],
    correctIndex: 1,
    explanation: "range(1, 5) は 1,2,3,4 です。<br>合計は 1+2+3+4 = <strong>10</strong> です。"
  },
  {
    id: 12,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "python",
    title: "リストの長さ",
    prompt: "リスト items の要素数を n に代入するには、[ ア ] に何を入れればよいですか。",
    code: `items = ["A", "B", "C"]
n = [ ア ]
print(n)`,
    choices: ["items.size", "len(items)", "count(items)", "items[3]"],
    correctIndex: 1,
    explanation: "Pythonでリストの要素数を求める関数は <strong>len()</strong> です。"
  },
  {
    id: 13,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "標準",
    langMode: "python",
    title: "二重ループの実行回数",
    prompt: "次のプログラムにおいて、print(i, j) は何回実行されますか。",
    code: `for i in range(3):
    for j in range(2):
        print(i, j)`,
    choices: ["2回", "3回", "5回", "6回"],
    correctIndex: 3,
    explanation: "外側が3回、内側が各回で2回実行されます。<br>合計は 3 × 2 = <strong>6回</strong> です。"
  },
  {
    id: 14,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "標準",
    langMode: "python",
    title: "リストの合計",
    prompt: "リスト nums の全要素の合計を total に求めるコードとして正しいものを選びなさい。",
    code: `nums = [1, 2, 3, 4]
# total に合計を入れる`,
    choices: [
      `total = 0
for n in nums:
    total += n`,
      `total = 1
for n in nums:
    total *= n`,
      `total = len(nums)`,
      `total = nums[0]`
    ],
    correctIndex: 0,
    explanation: "合計は初期値0から各要素を足していきます。<br>total += n は total = total + n と同じ意味です。"
  },
  {
    id: 15,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "python",
    title: "条件分岐の実行結果",
    prompt: "次のプログラムを実行したとき、出力される文字列を選びなさい。",
    code: `x = 7
if x % 3 == 1:
    print("A")
else:
    print("B")`,
    choices: ["A", "B", "AB", "何も表示されない"],
    correctIndex: 0,
    explanation: "7を3で割った余りは1です。<br>条件 x % 3 == 1 が真なので <strong>A</strong> が表示されます。"
  },
  {
    id: 16,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "python",
    title: "while文の条件",
    prompt: "n が 1 になるまで半分にし続けるには、[ ア ] に何を入れればよいですか。",
    code: `n = 16
while n [ ア ] 1:
    n = n // 2
print(n)`,
    choices: [">", ">=", "<", "=="],
    correctIndex: 0,
    explanation: "n が 1 より大きい間だけ繰り返せば、16→8→4→2→1 で止まります。<br>条件は <strong>n > 1</strong> です。"
  },
  {
    id: 17,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "python",
    title: "リストを順に調べる",
    prompt: "次のプログラムを実行したとき、print(count) の出力値を選びなさい。",
    code: `nums = [5, 2, 8, 1, 7]
count = 0
for n in nums:
    if n >= 5:
        count += 1
print(count)`,
    choices: ["2", "3", "4", "5"],
    correctIndex: 1,
    explanation: "5以上の値は 5, 8, 7 の3つです。<br>よって count は <strong>3</strong> になります。"
  },
  {
    id: 18,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "標準",
    langMode: "python",
    title: "平均値の計算",
    prompt: "リスト scores の平均値を avg に求めるコードとして正しいものを選びなさい。",
    code: `scores = [60, 80, 100]
# avg に平均値を入れる`,
    choices: [
      `avg = sum(scores) / len(scores)`,
      `avg = len(scores) / sum(scores)`,
      `avg = max(scores) / len(scores)`,
      `avg = scores[0] + scores[1] + scores[2]`
    ],
    correctIndex: 0,
    explanation: "平均値は「合計 ÷ 個数」です。<br>Pythonでは sum(scores) / len(scores) と書けます。"
  },
  {
    id: 19,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "標準",
    langMode: "python",
    title: "breakまでの回数",
    prompt: "次のプログラムにおいて、if n == 4: の行は何回判定されますか。",
    code: `nums = [1, 3, 4, 6]
for n in nums:
    if n == 4:
        break`,
    choices: ["1回", "2回", "3回", "4回"],
    correctIndex: 2,
    explanation: "n は 1, 3, 4 の順に調べられます。<br>4で break するため、if の判定は <strong>3回</strong> です。"
  },
  {
    id: 20,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "python",
    title: "奇数だけを数える",
    prompt: "奇数だけ count するには、[ ア ] に何を入れればよいですか。",
    code: `nums = [1, 2, 3, 4, 5]
count = 0
for n in nums:
    if [ ア ]:
        count += 1
print(count)`,
    choices: ["n % 2 == 0", "n % 2 == 1", "n // 2 == 1", "n == 2"],
    correctIndex: 1,
    explanation: "奇数は2で割った余りが1です。<br>条件は <strong>n % 2 == 1</strong> です。"
  },
  {
    id: 21,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "累積和リスト",
    prompt: "次のプログラムを実行したとき、print(ans) の出力を選びなさい。",
    code: `nums = [2, 1, 3]
ans = []
s = 0
for n in nums:
    s += n
    ans.append(s)
print(ans)`,
    choices: ["[2, 1, 3]", "[2, 3, 6]", "[0, 2, 3]", "[6]"],
    correctIndex: 1,
    explanation: "s は 2 → 3 → 6 と増え、その都度 ans に追加されます。<br>結果は <strong>[2, 3, 6]</strong> です。"
  },
  {
    id: 22,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "最大値の更新条件",
    prompt: "リストの最大値を mx に求めるには、[ ア ] に何を入れればよいですか。",
    code: `nums = [4, 9, 2, 7]
mx = nums[0]
for n in nums:
    if [ ア ]:
        mx = n
print(mx)`,
    choices: ["n > mx", "n < mx", "n == mx", "mx > n"],
    correctIndex: 0,
    explanation: "今までの最大値 mx より n が大きいときだけ更新します。<br>条件は <strong>n > mx</strong> です。"
  },
  {
    id: 23,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "python",
    title: "ネストしたifの実行回数",
    prompt: "次のプログラムにおいて、count += 1 は何回実行されますか。",
    code: `count = 0
for i in range(1, 6):
    if i % 2 == 1:
        if i >= 3:
            count += 1
print(count)`,
    choices: ["1回", "2回", "3回", "5回"],
    correctIndex: 1,
    explanation: "i は 1〜5 です。奇数かつ3以上なのは 3 と 5 の2つです。<br>よって <strong>2回</strong> 実行されます。"
  },
  {
    id: 24,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "発展",
    langMode: "python",
    title: "線形探索",
    prompt: "リスト nums に target が含まれているかを found に入れるコードとして正しいものを選びなさい。",
    code: `nums = [3, 8, 1, 5]
target = 1
# found に True または False を入れる`,
    choices: [
      `found = False
for n in nums:
    if n == target:
        found = True`,
      `found = True
for n in nums:
    if n == target:
        found = False`,
      `found = target`,
      `found = nums[0]`
    ],
    correctIndex: 0,
    explanation: "最初は見つかっていないので False にし、target と同じ要素を見つけたら True にします。"
  },
  {
    id: 25,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "二重ループと合計",
    prompt: "次のプログラムを実行したとき、print(total) の出力値を選びなさい。",
    code: `total = 0
for i in range(1, 4):
    for j in range(1, 3):
        total += i * j
print(total)`,
    choices: ["6", "12", "18", "24"],
    correctIndex: 2,
    explanation: "i=1,2,3、j=1,2 です。<br>合計は 1+2+2+4+3+6 = <strong>18</strong> です。"
  },
  {
    id: 26,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "リスト内包表記",
    prompt: "nums から偶数だけを取り出したリスト evens を作るには、[ ア ] に何を入れればよいですか。",
    code: `nums = [1, 2, 3, 4, 5, 6]
evens = [n for n in nums if [ ア ]]
print(evens)`,
    choices: ["n % 2 == 0", "n % 2 == 1", "n > 6", "n == 0"],
    correctIndex: 0,
    explanation: "偶数は2で割った余りが0です。<br>条件は <strong>n % 2 == 0</strong> です。"
  },
  {
    id: 27,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "python",
    title: "whileループの回数",
    prompt: "次のプログラムにおいて、n = n // 2 は何回実行されますか。",
    code: `n = 20
while n > 1:
    n = n // 2
print(n)`,
    choices: ["3回", "4回", "5回", "20回"],
    correctIndex: 1,
    explanation: "n は 20 → 10 → 5 → 2 → 1 と変化します。<br>代入は <strong>4回</strong> 実行されます。"
  },
  {
    id: 28,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "発展",
    langMode: "python",
    title: "隣り合う要素の差",
    prompt: "リスト nums の隣り合う要素の差を diffs に入れるコードとして正しいものを選びなさい。",
    code: `nums = [3, 7, 10]
# diffs は [4, 3] にしたい`,
    choices: [
      `diffs = []
for i in range(len(nums) - 1):
    diffs.append(nums[i + 1] - nums[i])`,
      `diffs = []
for i in range(len(nums)):
    diffs.append(nums[i] - nums[i + 1])`,
      `diffs = nums`,
      `diffs = [len(nums)]`
    ],
    correctIndex: 0,
    explanation: "隣との差は nums[i + 1] - nums[i] です。<br>最後の要素には次がないので、range(len(nums) - 1) を使います。"
  },
  {
    id: 29,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "条件付きの合計",
    prompt: "次のプログラムを実行したとき、print(s) の出力値を選びなさい。",
    code: `nums = [2, 5, 8, 11]
s = 0
for n in nums:
    if n % 3 == 2:
        s += n
print(s)`,
    choices: ["8", "11", "19", "26"],
    correctIndex: 3,
    explanation: "2, 5, 8, 11 はすべて3で割った余りが2です。<br>すべて足されるので、2+5+8+11 = <strong>26</strong> です。"
  },
  {
    id: 30,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "2次元リストの要素",
    prompt: "値 6 を取り出して x に代入するには、[ ア ] に何を入れればよいですか。",
    code: `table = [
    [1, 2, 3],
    [4, 5, 6]
]
x = table[ ア ]
print(x)`,
    choices: ["[0][2]", "[1][2]", "[2][1]", "[1][3]"],
    correctIndex: 1,
    explanation: "2行目は添字1、3列目は添字2です。<br>したがって <strong>table[1][2]</strong> で 6 を取り出せます。"
  },
  {
    id: 31,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "dncl",
    title: "配列の添字と出力値",
    prompt: "次のプログラムの [ ア ] に入る値として正しいものを選びなさい。（x には 10 を代入したい）",
    code: `Data = [5, 10, 15, 20]
x = Data[[ ア ]]
表示する(x)`,
    choices: ["0", "1", "2", "3"],
    correctIndex: 1,
    explanation: "共通テスト用プログラム表記では、特に説明がなければ配列の添字は【0】から始まります。<br>Data[0]=5, Data[1]=<strong>10</strong>, Data[2]=15 …<br>10 を取り出すには添字 <strong>1</strong> が必要です。"
  },
  {
    id: 32,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "dncl",
    title: "変数への代入と計算",
    prompt: "次のプログラムを実行したとき、表示される値を選びなさい。",
    code: `x = 3
x = x + 4
表示する(x)`,
    choices: ["3", "4", "7", "12"],
    correctIndex: 2,
    explanation: "最初に x は 3 です。<br>x = x + 4 により、3 + 4 = <strong>7</strong> になります。"
  },
  {
    id: 33,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "dncl",
    title: "条件分岐の条件",
    prompt: "score が 60 以上のときに「合格」と表示するには、[ ア ] に何を入れればよいですか。",
    code: `score = 75
もし score [ ア ] 60 ならば:
⎿ 表示する("合格")`,
    choices: ["<", ">", ">=", "=="],
    correctIndex: 2,
    explanation: "60以上は <strong>>= 60</strong> と書きます。score は75なので条件を満たし、「合格」と表示されます。"
  },
  {
    id: 34,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "基礎",
    langMode: "dncl",
    title: "表示する関数の実行回数",
    prompt: "次のプログラムにおいて、表示する(i) は何回実行されますか。",
    code: `i を 0 から 3 まで 1 ずつ増やしながら繰り返す:
⎿ 表示する(i)`,
    choices: ["3回", "4回", "5回", "0回"],
    correctIndex: 1,
    explanation: "i は 0,1,2,3 の4個の値を取ります。<br>そのため 表示する(i) は <strong>4回</strong> 実行されます。"
  },
  {
    id: 35,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "dncl",
    title: "文字列の連結",
    prompt: "次のプログラムを実行したとき、出力される文字列を選びなさい。",
    code: `a = "情報"
b = "I"
表示する(a + b)`,
    choices: ["情報I", "情報 I", "a+b", "I情報"],
    correctIndex: 0,
    explanation: "文字列同士を + でつなげると、そのまま連結されます。<br>よって <strong>情報I</strong> です。"
  },
  {
    id: 36,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "基礎",
    langMode: "dncl",
    title: "偶数判定の表記",
    prompt: "変数 n が偶数のときだけ「偶数」と表示するプログラム表記として正しいものを選びなさい。",
    code: `n = 8
# n が偶数なら「偶数」と表示する`,
    choices: [
      `もし n ％ 2 == 0 ならば:
⎿ 表示する("偶数")`,
      `もし n / 2 == 0 ならば:
⎿ 表示する("偶数")`,
      `もし n ％ 2 == 1 ならば:
⎿ 表示する("偶数")`,
      `もし n == 2 ならば:
⎿ 表示する("偶数")`
    ],
    correctIndex: 0,
    explanation: "偶数は2で割った余りが0の数です。<br>共通テスト用プログラム表記では余りを <strong>％</strong> で表し、n ％ 2 == 0 が正解です。"
  },
  {
    id: 37,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "dncl",
    title: "配列要素の更新",
    prompt: "次のプログラムを実行したとき、表示される値を選びなさい。",
    code: `Nums = [2, 4, 6]
Nums[1] = Nums[1] + 3
表示する(Nums[1])`,
    choices: ["4", "5", "7", "9"],
    correctIndex: 2,
    explanation: "添字は0始まりなので Nums[1] は2番目の要素 4 です。<br>4 + 3 = <strong>7</strong> に更新されます。"
  },
  {
    id: 38,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "dncl",
    title: "繰り返し回数の穴埋め",
    prompt: "「Hello」を5回表示するには、[ ア ] に何を入れればよいですか。",
    code: `i を 0 から [ ア ] まで 1 ずつ増やしながら繰り返す:
⎿ 表示する("Hello")`,
    choices: ["4", "5", "6", "10"],
    correctIndex: 0,
    explanation: "0から4まで繰り返すと、0,1,2,3,4 の <strong>5回</strong> 実行されます。"
  },
  {
    id: 39,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "基礎",
    langMode: "dncl",
    title: "条件を満たす回数",
    prompt: "次のプログラムにおいて、count = count + 1 は何回実行されますか。",
    code: `count = 0
i を 0 から 4 まで 1 ずつ増やしながら繰り返す:
｜もし i >= 2 ならば:
⎿⎿ count = count + 1
表示する(count)`,
    choices: ["1回", "2回", "3回", "5回"],
    correctIndex: 2,
    explanation: "i は 0,1,2,3,4 と変化します。<br>i >= 2 を満たすのは 2,3,4 の <strong>3回</strong> です。"
  },
  {
    id: 40,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "基礎",
    langMode: "dncl",
    title: "最大値の取り出し",
    prompt: "配列 Nums の中から最大値を表示するプログラム表記として正しいものを選びなさい。",
    code: `Nums = [3, 9, 1, 6]
# 最大値を表示する`,
    choices: [
      `表示する(max(Nums))`,
      `表示する(min(Nums))`,
      `表示する(要素数(Nums))`,
      `表示する(Nums[0])`
    ],
    correctIndex: 0,
    explanation: "最大値を求めるには max(Nums) を使います。<br>この配列の最大値は <strong>9</strong> です。"
  },
  {
    id: 41,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "dncl",
    title: "繰り返しの開始と終了",
    prompt: "次のプログラムを実行したとき、表示される値を選びなさい。",
    code: `s = 0
i を 1 から 4 まで 1 ずつ増やしながら繰り返す:
⎿ s = s + i
表示する(s)`,
    choices: ["6", "10", "15", "5"],
    correctIndex: 1,
    explanation: "i は 1,2,3,4 です。<br>合計は 1+2+3+4 = <strong>10</strong> です。"
  },
  {
    id: 42,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "dncl",
    title: "配列の要素数",
    prompt: "配列 Items の要素数を n に代入するには、[ ア ] に何を入れればよいですか。",
    code: `Items = ["A", "B", "C"]
n = [ ア ]
表示する(n)`,
    choices: ["Items.size", "要素数(Items)", "count(Items)", "Items[3]"],
    correctIndex: 1,
    explanation: "共通テスト用プログラム表記では、配列の要素数は <strong>要素数(Items)</strong> で求められます。"
  },
  {
    id: 43,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "標準",
    langMode: "dncl",
    title: "二重ループの実行回数",
    prompt: "次のプログラムにおいて、表示する(i, j) は何回実行されますか。",
    code: `i を 1 から 3 まで 1 ずつ増やしながら繰り返す:
｜j を 1 から 2 まで 1 ずつ増やしながら繰り返す:
⎿⎿ 表示する(i, j)`,
    choices: ["2回", "3回", "5回", "6回"],
    correctIndex: 3,
    explanation: "外側が3回、内側が各回で2回実行されます。<br>合計は 3 × 2 = <strong>6回</strong> です。"
  },
  {
    id: 44,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "標準",
    langMode: "dncl",
    title: "配列の合計",
    prompt: "配列 Nums の全要素の合計を total に求めるプログラム表記として正しいものを選びなさい。",
    code: `Nums = [1, 2, 3, 4]
# total に合計を入れる`,
    choices: [
      `total = 0
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
⎿ total = total + Nums[i]`,
      `total = 1
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
⎿ total = total * Nums[i]`,
      `total = 要素数(Nums)`,
      `total = Nums[0]`
    ],
    correctIndex: 0,
    explanation: "合計は初期値0から各要素を足していきます。<br>配列は0始まりなので、i は 0 から 要素数(Nums) - 1 まで動かします。"
  },
  {
    id: 45,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "dncl",
    title: "条件分岐の実行結果",
    prompt: "次のプログラムを実行したとき、出力される文字列を選びなさい。",
    code: `x = 7
もし x ％ 3 == 1 ならば:
｜表示する("A")
そうでなければ:
⎿ 表示する("B")`,
    choices: ["A", "B", "AB", "何も表示されない"],
    correctIndex: 0,
    explanation: "7を3で割った余りは1です。<br>条件 x ％ 3 == 1 が真なので <strong>A</strong> が表示されます。"
  },
  {
    id: 46,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "dncl",
    title: "条件繰返しの条件",
    prompt: "n が 1 になるまで半分にし続けるには、[ ア ] に何を入れればよいですか。",
    code: `n = 16
n [ ア ] 1 の間繰り返す:
⎿ n = n ÷ 2
表示する(n)`,
    choices: [">", ">=", "<", "=="],
    correctIndex: 0,
    explanation: "n が 1 より大きい間だけ繰り返せば、16→8→4→2→1 で止まります。<br>条件は <strong>n > 1</strong> です。"
  },
  {
    id: 47,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "dncl",
    title: "配列を順に調べる",
    prompt: "次のプログラムを実行したとき、表示される値を選びなさい。",
    code: `Nums = [5, 2, 8, 1, 7]
count = 0
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] >= 5 ならば:
⎿⎿ count = count + 1
表示する(count)`,
    choices: ["2", "3", "4", "5"],
    correctIndex: 1,
    explanation: "5以上の値は 5, 8, 7 の3つです。<br>よって count は <strong>3</strong> になります。"
  },
  {
    id: 48,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "標準",
    langMode: "dncl",
    title: "平均値の計算",
    prompt: "配列 Scores の平均値を avg に求めるプログラム表記として正しいものを選びなさい。",
    code: `Scores = [60, 80, 100]
# avg に平均値を入れる`,
    choices: [
      `avg = 合計(Scores) / 要素数(Scores)`,
      `avg = 要素数(Scores) / 合計(Scores)`,
      `avg = max(Scores) / 要素数(Scores)`,
      `avg = Scores[0] + Scores[1] + Scores[2]`
    ],
    correctIndex: 0,
    explanation: "平均値は「合計 ÷ 個数」です。<br>よって 合計(Scores) / 要素数(Scores) が正解です。"
  },
  {
    id: 49,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "標準",
    langMode: "dncl",
    title: "繰り返しを抜けるまでの回数",
    prompt: "次のプログラムにおいて、もし Nums[i] == 4 ならば の行は何回判定されますか。",
    code: `Nums = [1, 3, 4, 6]
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] == 4 ならば:
⎿⎿ 繰り返しを抜ける`,
    choices: ["1回", "2回", "3回", "4回"],
    correctIndex: 2,
    explanation: "Nums[0]=1, Nums[1]=3, Nums[2]=4 の順に調べます。<br>4で抜けるため、条件判定は <strong>3回</strong> です。"
  },
  {
    id: 50,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "dncl",
    title: "奇数だけを数える",
    prompt: "奇数だけ count するには、[ ア ] に何を入れればよいですか。",
    code: `Nums = [1, 2, 3, 4, 5]
count = 0
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし [ ア ] ならば:
⎿⎿ count = count + 1
表示する(count)`,
    choices: ["Nums[i] ％ 2 == 0", "Nums[i] ％ 2 == 1", "Nums[i] ÷ 2 == 1", "Nums[i] == 2"],
    correctIndex: 1,
    explanation: "奇数は2で割った余りが1です。<br>条件は <strong>Nums[i] ％ 2 == 1</strong> です。"
  },
  {
    id: 51,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "累積和配列",
    prompt: "次のプログラムを実行したとき、表示される値を選びなさい。",
    code: `Nums = [2, 1, 3]
Ans = []
s = 0
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜s = s + Nums[i]
⎿ Ans の末尾に s を追加する
表示する(Ans)`,
    choices: ["[2, 1, 3]", "[2, 3, 6]", "[0, 2, 3]", "[6]"],
    correctIndex: 1,
    explanation: "s は 2 → 3 → 6 と増え、その都度 Ans に追加されます。<br>結果は <strong>[2, 3, 6]</strong> です。"
  },
  {
    id: 52,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "最大値の更新条件",
    prompt: "配列の最大値を mx に求めるには、[ ア ] に何を入れればよいですか。",
    code: `Nums = [4, 9, 2, 7]
mx = Nums[0]
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし [ ア ] ならば:
⎿⎿ mx = Nums[i]
表示する(mx)`,
    choices: ["Nums[i] > mx", "Nums[i] < mx", "Nums[i] == mx", "mx > Nums[i]"],
    correctIndex: 0,
    explanation: "今までの最大値 mx より Nums[i] が大きいときだけ更新します。<br>条件は <strong>Nums[i] > mx</strong> です。"
  },
  {
    id: 53,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "dncl",
    title: "入れ子の条件分岐の実行回数",
    prompt: "次のプログラムにおいて、count = count + 1 は何回実行されますか。",
    code: `count = 0
i を 1 から 5 まで 1 ずつ増やしながら繰り返す:
｜もし i ％ 2 == 1 ならば:
｜｜もし i >= 3 ならば:
⎿⎿⎿ count = count + 1
表示する(count)`,
    choices: ["1回", "2回", "3回", "5回"],
    correctIndex: 1,
    explanation: "i は 1〜5 です。奇数かつ3以上なのは 3 と 5 の2つです。<br>よって <strong>2回</strong> 実行されます。"
  },
  {
    id: 54,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "発展",
    langMode: "dncl",
    title: "線形探索",
    prompt: "配列 Nums に target が含まれているかを found に入れるプログラム表記として正しいものを選びなさい。",
    code: `Nums = [3, 8, 1, 5]
target = 1
# found に True または False を入れる`,
    choices: [
      `found = False
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] == target ならば:
⎿⎿ found = True`,
      `found = True
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] == target ならば:
⎿⎿ found = False`,
      `found = target`,
      `found = Nums[0]`
    ],
    correctIndex: 0,
    explanation: "最初は見つかっていないので False にし、target と同じ要素を見つけたら True にします。"
  },
  {
    id: 55,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "二重ループと合計",
    prompt: "次のプログラムを実行したとき、表示される値を選びなさい。",
    code: `total = 0
i を 1 から 3 まで 1 ずつ増やしながら繰り返す:
｜j を 1 から 2 まで 1 ずつ増やしながら繰り返す:
⎿⎿ total = total + i * j
表示する(total)`,
    choices: ["6", "12", "18", "24"],
    correctIndex: 2,
    explanation: "i=1,2,3、j=1,2 です。<br>合計は 1+2+2+4+3+6 = <strong>18</strong> です。"
  },
  {
    id: 56,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "偶数だけの配列",
    prompt: "Nums から偶数だけを取り出した配列 Evens を作るには、[ ア ] に何を入れればよいですか。",
    code: `Nums = [1, 2, 3, 4, 5, 6]
Evens = []
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし [ ア ] ならば:
⎿⎿ Evens の末尾に Nums[i] を追加する
表示する(Evens)`,
    choices: ["Nums[i] ％ 2 == 0", "Nums[i] ％ 2 == 1", "Nums[i] > 6", "Nums[i] == 0"],
    correctIndex: 0,
    explanation: "偶数は2で割った余りが0です。<br>条件は <strong>Nums[i] ％ 2 == 0</strong> です。"
  },
  {
    id: 57,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "dncl",
    title: "whileループの回数",
    prompt: "次のプログラムにおいて、n = n ÷ 2 は何回実行されますか。",
    code: `n = 20
n > 1 の間繰り返す:
⎿ n = n ÷ 2
表示する(n)`,
    choices: ["3回", "4回", "5回", "20回"],
    correctIndex: 1,
    explanation: "n は 20 → 10 → 5 → 2 → 1 と変化します。<br>代入は <strong>4回</strong> 実行されます。"
  },
  {
    id: 58,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "発展",
    langMode: "dncl",
    title: "隣り合う要素の差",
    prompt: "配列 Nums の隣り合う要素の差を Diffs に入れるプログラム表記として正しいものを選びなさい。",
    code: `Nums = [3, 7, 10]
# Diffs は [4, 3] にしたい`,
    choices: [
      `Diffs = []
i を 0 から 要素数(Nums) - 2 まで 1 ずつ増やしながら繰り返す:
⎿ Diffs の末尾に Nums[i + 1] - Nums[i] を追加する`,
      `Diffs = []
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
⎿ Diffs の末尾に Nums[i] - Nums[i + 1] を追加する`,
      `Diffs = Nums`,
      `Diffs = [要素数(Nums)]`
    ],
    correctIndex: 0,
    explanation: "隣との差は Nums[i + 1] - Nums[i] です。<br>最後の要素には次がないので、i は 要素数(Nums) - 2 まで繰り返します。"
  },
  {
    id: 59,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "条件付きの合計",
    prompt: "次のプログラムを実行したとき、表示される値を選びなさい。",
    code: `Nums = [2, 5, 8, 11]
s = 0
i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] ％ 3 == 2 ならば:
⎿⎿ s = s + Nums[i]
表示する(s)`,
    choices: ["8", "11", "19", "26"],
    correctIndex: 3,
    explanation: "2, 5, 8, 11 はすべて3で割った余りが2です。<br>すべて足されるので、2+5+8+11 = <strong>26</strong> です。"
  },
  {
    id: 60,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "2次元配列の要素",
    prompt: "値 6 を取り出して x に代入するには、[ ア ] に何を入れればよいですか。",
    code: `Table = [
    [1, 2, 3],
    [4, 5, 6]
]
x = Table[ ア ]
表示する(x)`,
    choices: ["[0,2]", "[1,2]", "[2,1]", "[1,3]"],
    correctIndex: 1,
    explanation: "2次元配列は Table[行,列] の形で表します。添字は0始まりなので、2行目・3列目は <strong>Table[1,2]</strong> です。"
  }
];
