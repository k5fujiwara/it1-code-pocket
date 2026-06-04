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
      `もし n ÷ 2 == 0 ならば:
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
      `表示する(最大値(Nums))`,
      `表示する(最小値(Nums))`,
      `表示する(要素数(Nums))`,
      `表示する(Nums[0])`
    ],
    correctIndex: 0,
    explanation: "最大値を求めるには 最大値(Nums) を使います。<br>この配列の最大値は <strong>9</strong> です。"
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
⎿ total = total × Nums[i]`,
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
      `avg = 合計(Scores) ÷ 要素数(Scores)`,
      `avg = 要素数(Scores) ÷ 合計(Scores)`,
      `avg = 最大値(Scores) ÷ 要素数(Scores)`,
      `avg = Scores[0] + Scores[1] + Scores[2]`
    ],
    correctIndex: 0,
    explanation: "平均値は「合計 ÷ 個数」です。<br>よって 合計(Scores) ÷ 要素数(Scores) が正解です。"
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
⎿⎿ total = total + i × j
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
    title: "条件繰返しの回数",
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
  },
  {
    id: 61,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "作業を早く空く担当者へ割り当てる",
    prompt: "次のプログラムを実行したとき、print(available) の出力として正しいものを選びなさい。",
    code: `days = [4, 1, 3, 1, 3, 4, 2, 4, 3]
available = [1, 1, 1]

for work in range(len(days)):
    member = 0
    for i in range(1, len(available)):
        if available[i] < available[member]:
            member = i
    available[member] = available[member] + days[work]

print(available)`,
    choices: ["[8, 10, 10]", "[10, 10, 8]", "[9, 9, 10]", "[11, 8, 9]"],
    correctIndex: 1,
    explanation: "各作業を、現在もっとも早く空く担当者に割り当てます。<br>順に更新すると available は最終的に <strong>[10, 10, 8]</strong> になります。"
  },
  {
    id: 62,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "最も早く空く担当者を探す条件",
    prompt: "作業を最も早く空く担当者に割り当てるには、[ ア ] に入る条件として正しいものを選びなさい。",
    code: `days = [4, 1, 3, 1, 3, 4]
available = [1, 1, 1]

for work in range(len(days)):
    member = 0
    for i in range(1, len(available)):
        if [ ア ]:
            member = i
    available[member] = available[member] + days[work]

print(available)`,
    choices: [
      "available[i] < available[member]",
      "available[i] > available[member]",
      "days[i] < days[member]",
      "work < member"
    ],
    correctIndex: 0,
    explanation: "最も早く空く担当者を探すので、候補 i の空き日 available[i] が現在の member より小さいかを調べます。"
  },
  {
    id: 63,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "到着時刻と待ち時間",
    prompt: "次のプログラムを実行したとき、print(longest) の出力値を選びなさい。",
    code: `arrival = [0, 3, 4, 10, 11, 12]
start = [0] * len(arrival)
finish = [0] * len(arrival)

start[0] = arrival[0]
finish[0] = start[0] + 5

for i in range(1, len(arrival)):
    start[i] = max(arrival[i], finish[i - 1])
    finish[i] = start[i] + 5

longest = 0
for i in range(len(arrival)):
    longest = max(longest, start[i] - arrival[i])

print(longest)`,
    choices: ["6", "9", "13", "15"],
    correctIndex: 2,
    explanation: "前の人の終了時刻より早く到着した人は待ちます。<br>最後の人は 12 に到着し、25 に開始するので待ち時間は 13。最大は <strong>13</strong> です。"
  },
  {
    id: 64,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "終了時刻を求める式",
    prompt: "1人あたりの処理時間が service 分のとき、[ ア ] に入る式として正しいものを選びなさい。",
    code: `arrival = [0, 3, 4, 10]
service = 5
start = [0] * len(arrival)
finish = [0] * len(arrival)

start[0] = arrival[0]
finish[0] = start[0] + service

for i in range(1, len(arrival)):
    start[i] = max(arrival[i], finish[i - 1])
    finish[i] = [ ア ]

print(finish)`,
    choices: [
      "start[i] + service",
      "arrival[i] + finish[i - 1]",
      "finish[i - 1] + i",
      "service - start[i]"
    ],
    correctIndex: 0,
    explanation: "終了時刻は「開始時刻 + 処理時間」です。したがって finish[i] = <strong>start[i] + service</strong> です。"
  },
  {
    id: 65,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "python",
    title: "二重ループと条件判定の実行回数",
    prompt: "次のプログラムにおいて、count += 1 は何回実行されますか。",
    code: `count = 0

for day in range(1, 6):
    for room in range(3):
        if (day + room) % 2 == 0:
            count += 1

print(count)`,
    choices: ["5回", "6回", "7回", "8回"],
    correctIndex: 2,
    explanation: "day は1〜5、room は0〜2です。<br>day+room が偶数になる組を数えると、1+2+1+2+1 = <strong>7回</strong> です。"
  },
  {
    id: 66,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "発展",
    langMode: "python",
    title: "条件を満たす区間数を数える",
    prompt: "temps の中で、前日より気温が高くなった日数を count に入れるコードとして正しいものを選びなさい。",
    code: `temps = [22, 24, 23, 27, 29, 28]
# 前日より高くなった回数を count に入れる`,
    choices: [
      `count = 0
for i in range(1, len(temps)):
    if temps[i] > temps[i - 1]:
        count += 1`,
      `count = 0
for i in range(len(temps)):
    if temps[i] > temps[i + 1]:
        count += 1`,
      `count = 1
for i in range(1, len(temps)):
    if temps[i] < temps[i - 1]:
        count += 1`,
      `count = len(temps)`
    ],
    correctIndex: 0,
    explanation: "前日と比較するため、i は1から始めます。<br>比較する式は temps[i] > temps[i - 1] です。"
  },
  {
    id: 67,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "必要数を満たしたグループ数",
    prompt: "次のプログラムを実行したとき、print(group, filled) の出力として正しいものを選びなさい。",
    code: `seats = [2, 4, 1, 3, 2]
need = [3, 5, 2]
filled = [0] * len(need)
group = 0

for i in range(len(seats)):
    filled[group] += seats[i]
    if filled[group] >= need[group]:
        group += 1
    if group == len(need):
        break

print(group, filled)`,
    choices: [
      "1 [6, 0, 0]",
      "2 [6, 6, 0]",
      "2 [3, 5, 0]",
      "3 [6, 6, 2]"
    ],
    correctIndex: 1,
    explanation: "1つ目のグループは 2+4=6 で条件を満たします。<br>2つ目は 1+3+2=6 で条件を満たします。よって <strong>2 [6, 6, 0]</strong> です。"
  },
  {
    id: 68,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "すべてのグループが完了したら抜ける条件",
    prompt: "すべてのグループが必要数を満たしたら繰り返しを抜けるには、[ ア ] に何を入れればよいですか。",
    code: `seats = [2, 4, 1, 3, 2]
need = [3, 5, 2]
filled = [0] * len(need)
group = 0

for i in range(len(seats)):
    filled[group] += seats[i]
    if filled[group] >= need[group]:
        group += 1
    if [ ア ]:
        break

print(group)`,
    choices: [
      "group == len(need)",
      "group == len(seats)",
      "filled[group] == 0",
      "i == group"
    ],
    correctIndex: 0,
    explanation: "group は完了したグループ数を表します。<br>完了数が need の個数と同じになれば、すべてのグループが完了しています。"
  },
  {
    id: 69,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "2次元リストの行ごとの合計",
    prompt: "次のプログラムを実行したとき、print(best) の出力値を選びなさい。",
    code: `table = [
    [0, 2, 1],
    [3, 1, 0],
    [2, 0, 4]
]

best = 0
for r in range(len(table)):
    total = 0
    for c in range(len(table[r])):
        if table[r][c] > 0:
            total += table[r][c]
    if total > best:
        best = total

print(best)`,
    choices: ["3", "4", "6", "10"],
    correctIndex: 2,
    explanation: "各行の合計は、1行目が3、2行目が4、3行目が6です。<br>最大は <strong>6</strong> です。"
  },
  {
    id: 70,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "python",
    title: "最大値が更新される回数",
    prompt: "次のプログラムにおいて、best = n は何回実行されますか。",
    code: `nums = [6, 2, 8, 8, 3, 9]
best = 0
count = 0

for n in nums:
    if n > best:
        best = n
        count += 1

print(best, count)`,
    choices: ["1回", "2回", "3回", "4回"],
    correctIndex: 2,
    explanation: "best は 6、8、9 のときに更新されます。<br>同じ8がもう一度出ても n > best ではないため更新されません。よって <strong>3回</strong> です。"
  },
  {
    id: 71,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "担当者の最短空き日を探す",
    prompt: "工芸品を、最も早く空く担当者へ順に割り当てる。内側のループで最短の空き日を持つ担当者を選ぶには、[ ア ] に何を入れればよいですか。",
    code: `work_days = [4, 1, 3, 2, 5, 1]
free_day = [1, 1, 1]

for w in range(len(work_days)):
    staff = 0
    for i in range(1, len(free_day)):
        if [ ア ]:
            staff = i
    free_day[staff] = free_day[staff] + work_days[w]

print(free_day)`,
    choices: [
      "free_day[i] < free_day[staff]",
      "free_day[i] > free_day[staff]",
      "work_days[i] < work_days[staff]",
      "i < staff",
      "free_day[staff] < work_days[w]",
      "work_days[w] < free_day[i]"
    ],
    correctIndex: 0,
    explanation: "staff には「今のところ最も早く空く担当者」の添字を入れます。<br>候補 i の空き日 free_day[i] が、現在の staff の空き日 free_day[staff] より小さいときに staff を更新します。<br>したがって条件は <strong>free_day[i] < free_day[staff]</strong> です。"
  },
  {
    id: 72,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "作業割当後の空き日",
    prompt: "次のプログラムを実行したとき、print(free_day) の出力として正しいものを選びなさい。",
    code: `work_days = [2, 5, 1, 4, 3, 2, 4]
free_day = [1, 1, 1]

for w in range(len(work_days)):
    staff = 0
    for i in range(1, len(free_day)):
        if free_day[i] < free_day[staff]:
            staff = i
    free_day[staff] = free_day[staff] + work_days[w]

print(free_day)`,
    choices: [
      "[8, 10, 6]",
      "[9, 8, 5]",
      "[7, 7, 8]",
      "[10, 5, 7]",
      "[6, 9, 7]",
      "[9, 5, 8]"
    ],
    correctIndex: 0,
    explanation: "free_day は担当者が次に空く日を表します。<br>同じ空き日の担当者が複数いる場合、このプログラムでは添字の小さい担当者が選ばれます。順に割り当てると、[1,1,1] → [3,1,1] → [3,6,1] → [3,6,2] → [3,6,6] → [6,6,6] → [8,6,6] → <strong>[8,10,6]</strong> です。"
  },
  {
    id: 73,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "待ち時間を求める開始時刻",
    prompt: "1つの窓口で順番に処理する。i番目の人の開始時刻 start[i] を正しく求めるには、[ ア ] に何を入れればよいですか。",
    code: `arrival = [0, 2, 4, 9, 11]
service = 5
start = [0] * len(arrival)
finish = [0] * len(arrival)

start[0] = arrival[0]
finish[0] = start[0] + service

for i in range(1, len(arrival)):
    start[i] = [ ア ]
    finish[i] = start[i] + service

print(start)`,
    choices: [
      "max(arrival[i], finish[i - 1])",
      "min(arrival[i], finish[i - 1])",
      "arrival[i] + service",
      "finish[i - 1] - service",
      "max(arrival[i - 1], finish[i])",
      "arrival[i - 1] + finish[i - 1]"
    ],
    correctIndex: 0,
    explanation: "その人が到着していて、かつ前の人の処理が終わっていないと開始できません。<br>よって開始時刻は「到着時刻」と「直前の終了時刻」の大きい方、つまり <strong>max(arrival[i], finish[i - 1])</strong> です。"
  },
  {
    id: 74,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "最長待ち時間を求める",
    prompt: "次のプログラムを実行したとき、print(longest) の出力値として正しいものを選びなさい。",
    code: `arrival = [0, 3, 6, 7, 15, 16]
service = 4
start = [0] * len(arrival)
finish = [0] * len(arrival)

start[0] = arrival[0]
finish[0] = start[0] + service

for i in range(1, len(arrival)):
    start[i] = max(arrival[i], finish[i - 1])
    finish[i] = start[i] + service

longest = 0
for i in range(len(arrival)):
    wait = start[i] - arrival[i]
    if wait > longest:
        longest = wait

print(longest)`,
    choices: ["0", "1", "2", "3", "4", "5"],
    correctIndex: 5,
    explanation: "開始時刻は [0,4,8,12,16,20] です。<br>待ち時間は [0,1,2,5,1,4] なので、最大は4番目の人の 12-7=<strong>5</strong> です。"
  },
  {
    id: 75,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "python",
    title: "条件を満たす組の数",
    prompt: "次のプログラムで、count += 1 は何回実行されますか。",
    code: `scores = [
    [2, 0, 1],
    [0, 3, 2],
    [4, 1, 0]
]
count = 0

for r in range(len(scores)):
    for c in range(len(scores[r])):
        if scores[r][c] >= 2:
            count += 1

print(count)`,
    choices: ["2回", "3回", "4回", "5回", "6回", "9回"],
    correctIndex: 2,
    explanation: "2以上の値は、2, 3, 2, 4 の4個です。<br>したがって count += 1 は <strong>4回</strong> 実行されます。"
  },
  {
    id: 76,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "累積人数が定員を超える時点",
    prompt: "次のプログラムを実行したとき、print(day) の出力値として正しいものを選びなさい。",
    code: `visitors = [18, 22, 15, 30, 12, 20]
limit = 70
total = 0
day = -1

for i in range(len(visitors)):
    total += visitors[i]
    if total >= limit and day == -1:
        day = i

print(day)`,
    choices: ["0", "1", "2", "3", "4", "5", "-1", "70"],
    correctIndex: 3,
    explanation: "累積は 18 → 40 → 55 → 85 と変化します。<br>初めて70以上になるのは i=3 のときです。よって出力は <strong>3</strong> です。"
  },
  {
    id: 77,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "初めて条件を満たした位置だけを記録する",
    prompt: "target 以上になった最初の添字だけを pos に入れるには、[ ア ] に何を入れればよいですか。",
    code: `points = [12, 8, 15, 6, 20]
target = 30
total = 0
pos = -1

for i in range(len(points)):
    total += points[i]
    if total >= target and [ ア ]:
        pos = i

print(pos)`,
    choices: [
      "pos == -1",
      "pos == i",
      "pos >= 0",
      "total == 0",
      "points[i] == target",
      "i == 0",
      "target < 0",
      "len(points) == pos"
    ],
    correctIndex: 0,
    explanation: "pos は「まだ記録していない」ことを -1 で表しています。<br>一度 pos に添字を入れた後は更新したくないので、条件に <strong>pos == -1</strong> を加えます。"
  },
  {
    id: 78,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "区間の長さの最大値",
    prompt: "次のプログラムを実行したとき、print(longest) の出力値として正しいものを選びなさい。",
    code: `busy = [1, 1, 0, 1, 1, 1, 0, 1]
now = 0
longest = 0

for i in range(len(busy)):
    if busy[i] == 1:
        now += 1
        if now > longest:
            longest = now
    else:
        now = 0

print(longest)`,
    choices: ["0", "1", "2", "3", "4", "5", "6", "8"],
    correctIndex: 3,
    explanation: "1が連続する長さを数えています。<br>連続部分は [1,1] が長さ2、[1,1,1] が長さ3、最後の [1] が長さ1です。最大は <strong>3</strong> です。"
  },
  {
    id: 79,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "python",
    title: "2次元リストの列合計",
    prompt: "各列の合計を col_sum に入れる。空欄 [ ア ] に入る式として正しいものを選びなさい。",
    code: `table = [
    [3, 1, 4],
    [2, 5, 0],
    [1, 2, 6]
]
col_sum = [0, 0, 0]

for r in range(len(table)):
    for c in range(len(table[r])):
        col_sum[c] += [ ア ]

print(col_sum)`,
    choices: [
      "table[r][c]",
      "table[c][r]",
      "table[r]",
      "table[c]",
      "col_sum[r]",
      "col_sum[c]",
      "r + c",
      "len(table[c])"
    ],
    correctIndex: 0,
    explanation: "r行c列の値を、c列目の合計 col_sum[c] に足します。<br>参照する値は <strong>table[r][c]</strong> です。"
  },
  {
    id: 80,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "python",
    title: "列合計の最大値",
    prompt: "次のプログラムを実行したとき、print(best) の出力値として正しいものを選びなさい。",
    code: `table = [
    [3, 1, 4],
    [2, 5, 0],
    [1, 2, 6]
]
col_sum = [0, 0, 0]

for r in range(len(table)):
    for c in range(len(table[r])):
        col_sum[c] += table[r][c]

best = 0
for x in col_sum:
    if x > best:
        best = x

print(best)`,
    choices: ["6", "7", "8", "9", "10", "11", "12", "21"],
    correctIndex: 4,
    explanation: "列ごとの合計は、1列目が 3+2+1=6、2列目が 1+5+2=8、3列目が 4+0+6=10 です。<br>最大値は <strong>10</strong> です。"
  },
  {
    id: 81,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "担当者の最短空き日を探す",
    prompt: "品物を、最も早く空く担当者へ順に割り当てる。内側の繰り返しで最短の空き日を持つ担当者を選ぶには、[ ア ] に何を入れればよいですか。",
    code: `Work = [4, 1, 3, 2, 5, 1]
Free = [1, 1, 1]

w を 0 から 要素数(Work) - 1 まで 1 ずつ増やしながら繰り返す:
｜staff = 0
｜i を 1 から 要素数(Free) - 1 まで 1 ずつ増やしながら繰り返す:
｜｜もし [ ア ] ならば:
｜⎿⎿ staff = i
⎿ Free[staff] = Free[staff] + Work[w]

表示する(Free)`,
    choices: [
      "Free[i] < Free[staff]",
      "Free[i] > Free[staff]",
      "Work[i] < Work[staff]",
      "i < staff",
      "Free[staff] < Work[w]",
      "Work[w] < Free[i]"
    ],
    correctIndex: 0,
    explanation: "staff は「今のところ最も早く空く担当者」の添字です。<br>候補 i の空き日 Free[i] が、現在の staff の空き日 Free[staff] より小さいときに staff を更新します。よって <strong>Free[i] < Free[staff]</strong> が入ります。"
  },
  {
    id: 82,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "作業割当後の空き日",
    prompt: "次のプログラムを実行したとき、表示される Free として正しいものを選びなさい。",
    code: `Work = [2, 5, 1, 4, 3, 2, 4]
Free = [1, 1, 1]

w を 0 から 要素数(Work) - 1 まで 1 ずつ増やしながら繰り返す:
｜staff = 0
｜i を 1 から 要素数(Free) - 1 まで 1 ずつ増やしながら繰り返す:
｜｜もし Free[i] < Free[staff] ならば:
｜⎿⎿ staff = i
⎿ Free[staff] = Free[staff] + Work[w]

表示する(Free)`,
    choices: [
      "[8, 10, 6]",
      "[9, 8, 5]",
      "[7, 7, 8]",
      "[10, 5, 7]",
      "[6, 9, 7]",
      "[9, 5, 8]"
    ],
    correctIndex: 0,
    explanation: "Free は担当者が次に空く日を表します。<br>同じ空き日の担当者が複数いる場合、このプログラムでは添字の小さい担当者が選ばれます。順に追うと、[1,1,1] → [3,1,1] → [3,6,1] → [3,6,2] → [3,6,6] → [6,6,6] → [8,6,6] → <strong>[8,10,6]</strong> です。"
  },
  {
    id: 83,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "待ち時間を求める開始時刻",
    prompt: "1つの窓口で順番に処理する。i番目の人の開始時刻 Start[i] を正しく求めるには、[ ア ] に何を入れればよいですか。",
    code: `Arrive = [0, 2, 4, 9, 11]
service = 5
Start = [0, 0, 0, 0, 0]
Finish = [0, 0, 0, 0, 0]

Start[0] = Arrive[0]
Finish[0] = Start[0] + service

i を 1 から 要素数(Arrive) - 1 まで 1 ずつ増やしながら繰り返す:
｜Start[i] = [ ア ]
⎿ Finish[i] = Start[i] + service

表示する(Start)`,
    choices: [
      "最大値(Arrive[i], Finish[i - 1])",
      "最小値(Arrive[i], Finish[i - 1])",
      "Arrive[i] + service",
      "Finish[i - 1] - service",
      "最大値(Arrive[i - 1], Finish[i])",
      "Arrive[i - 1] + Finish[i - 1]"
    ],
    correctIndex: 0,
    explanation: "その人が到着していて、前の人の処理も終わっている必要があります。<br>したがって開始時刻は「到着時刻」と「直前の終了時刻」の大きい方、つまり <strong>最大値(Arrive[i], Finish[i - 1])</strong> です。"
  },
  {
    id: 84,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "最長待ち時間を求める",
    prompt: "次のプログラムを実行したとき、表示される longest の値として正しいものを選びなさい。",
    code: `Arrive = [0, 3, 6, 7, 15, 16]
service = 4
Start = [0, 0, 0, 0, 0, 0]
Finish = [0, 0, 0, 0, 0, 0]

Start[0] = Arrive[0]
Finish[0] = Start[0] + service

i を 1 から 要素数(Arrive) - 1 まで 1 ずつ増やしながら繰り返す:
｜Start[i] = 最大値(Arrive[i], Finish[i - 1])
⎿ Finish[i] = Start[i] + service

longest = 0
i を 0 から 要素数(Arrive) - 1 まで 1 ずつ増やしながら繰り返す:
｜wait = Start[i] - Arrive[i]
｜もし wait > longest ならば:
⎿⎿ longest = wait

表示する(longest)`,
    choices: ["0", "1", "2", "3", "4", "5"],
    correctIndex: 5,
    explanation: "Start は [0,4,8,12,16,20] になります。<br>待ち時間は [0,1,2,5,1,4] なので、最大は 12-7=<strong>5</strong> です。"
  },
  {
    id: 85,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "dncl",
    title: "条件を満たす表の要素数",
    prompt: "次のプログラムで、count = count + 1 は何回実行されますか。",
    code: `Score = [
  [2, 0, 1],
  [0, 3, 2],
  [4, 1, 0]
]
count = 0

r を 0 から 要素数(Score) - 1 まで 1 ずつ増やしながら繰り返す:
｜c を 0 から 要素数(Score[r]) - 1 まで 1 ずつ増やしながら繰り返す:
｜｜もし Score[r][c] >= 2 ならば:
⎿⎿⎿ count = count + 1

表示する(count)`,
    choices: ["2回", "3回", "4回", "5回", "6回", "9回"],
    correctIndex: 2,
    explanation: "表の中で2以上の値は、2, 3, 2, 4 の4個です。<br>そのため count = count + 1 は <strong>4回</strong> 実行されます。"
  },
  {
    id: 86,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "累積人数が定員を超える時点",
    prompt: "次のプログラムを実行したとき、表示される day の値として正しいものを選びなさい。",
    code: `Visitors = [18, 22, 15, 30, 12, 20]
limit = 70
total = 0
day = -1

i を 0 から 要素数(Visitors) - 1 まで 1 ずつ増やしながら繰り返す:
｜total = total + Visitors[i]
｜もし total >= limit かつ day == -1 ならば:
⎿⎿ day = i

表示する(day)`,
    choices: ["0", "1", "2", "3", "4", "5", "-1", "70"],
    correctIndex: 3,
    explanation: "累積は 18 → 40 → 55 → 85 と増えます。<br>初めて70以上になるのは i=3 のときなので、表示される値は <strong>3</strong> です。"
  },
  {
    id: 87,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "初めて条件を満たした位置だけを記録する",
    prompt: "target 以上になった最初の添字だけを pos に入れるには、[ ア ] に何を入れればよいですか。",
    code: `Point = [12, 8, 15, 6, 20]
target = 30
total = 0
pos = -1

i を 0 から 要素数(Point) - 1 まで 1 ずつ増やしながら繰り返す:
｜total = total + Point[i]
｜もし total >= target かつ [ ア ] ならば:
⎿⎿ pos = i

表示する(pos)`,
    choices: [
      "pos == -1",
      "pos == i",
      "pos >= 0",
      "total == 0",
      "Point[i] == target",
      "i == 0",
      "target < 0",
      "要素数(Point) == pos"
    ],
    correctIndex: 0,
    explanation: "pos は「まだ記録していない」ことを -1 で表しています。<br>最初の1回だけ記録するには、条件に <strong>pos == -1</strong> を加えます。"
  },
  {
    id: 88,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "連続している区間の最大長",
    prompt: "次のプログラムを実行したとき、表示される longest の値として正しいものを選びなさい。",
    code: `Busy = [1, 1, 0, 1, 1, 1, 0, 1]
now = 0
longest = 0

i を 0 から 要素数(Busy) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Busy[i] == 1 ならば:
｜｜now = now + 1
｜｜もし now > longest ならば:
｜⎿⎿ longest = now
｜そうでなければ:
⎿⎿ now = 0

表示する(longest)`,
    choices: ["0", "1", "2", "3", "4", "5", "6", "8"],
    correctIndex: 3,
    explanation: "1が続く長さを now で数え、最大値を longest に記録します。<br>連続部分の長さは 2、3、1 なので、最大は <strong>3</strong> です。"
  },
  {
    id: 89,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "2次元配列の列合計",
    prompt: "各列の合計を ColSum に入れる。空欄 [ ア ] に入る式として正しいものを選びなさい。",
    code: `Table = [
  [3, 1, 4],
  [2, 5, 0],
  [1, 2, 6]
]
ColSum = [0, 0, 0]

r を 0 から 要素数(Table) - 1 まで 1 ずつ増やしながら繰り返す:
｜c を 0 から 要素数(Table[r]) - 1 まで 1 ずつ増やしながら繰り返す:
⎿⎿ ColSum[c] = ColSum[c] + [ ア ]

表示する(ColSum)`,
    choices: [
      "Table[r][c]",
      "Table[c][r]",
      "Table[r]",
      "Table[c]",
      "ColSum[r]",
      "ColSum[c]",
      "r + c",
      "要素数(Table[c])"
    ],
    correctIndex: 0,
    explanation: "r行c列の値を、c列目の合計 ColSum[c] に足します。<br>参照する値は <strong>Table[r][c]</strong> です。"
  },
  {
    id: 90,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "列合計の最大値",
    prompt: "次のプログラムを実行したとき、表示される best の値として正しいものを選びなさい。",
    code: `Table = [
  [3, 1, 4],
  [2, 5, 0],
  [1, 2, 6]
]
ColSum = [0, 0, 0]

r を 0 から 要素数(Table) - 1 まで 1 ずつ増やしながら繰り返す:
｜c を 0 から 要素数(Table[r]) - 1 まで 1 ずつ増やしながら繰り返す:
⎿⎿ ColSum[c] = ColSum[c] + Table[r][c]

best = 0
i を 0 から 要素数(ColSum) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし ColSum[i] > best ならば:
⎿⎿ best = ColSum[i]

表示する(best)`,
    choices: ["6", "7", "8", "9", "10", "11", "12", "21"],
    correctIndex: 4,
    explanation: "列合計は、1列目が 3+2+1=6、2列目が 1+5+2=8、3列目が 4+0+6=10 です。<br>最大値は <strong>10</strong> です。"
  },
  {
    id: 91,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "python",
    title: "偶数番目の要素を合計する",
    prompt: "添字が偶数の要素だけを total に加えるには、[ ア ] に何を入れればよいですか。",
    code: `nums = [5, 8, 3, 6, 7, 2]
total = 0

for i in range(len(nums)):
    if [ ア ]:
        total += nums[i]

print(total)`,
    choices: [
      "i % 2 == 0",
      "i % 2 == 1",
      "nums[i] % 2 == 0",
      "nums[i] % 2 == 1",
      "i == nums[i]",
      "i > nums[i]"
    ],
    correctIndex: 0,
    explanation: "添字が偶数とは、i が 0, 2, 4, ... になる場合です。<br>2で割った余りが0なので、条件は <strong>i % 2 == 0</strong> です。"
  },
  {
    id: 92,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "python",
    title: "条件によって足すか引くかを変える",
    prompt: "次のプログラムを実行したとき、print(total) の出力値として正しいものを選びなさい。",
    code: `nums = [4, 1, 7, 2, 5]
total = 0

for n in nums:
    if n >= 5:
        total += n
    else:
        total -= n

print(total)`,
    choices: ["0", "3", "5", "7", "9", "19"],
    correctIndex: 2,
    explanation: "5以上なら足し、5未満なら引きます。<br>total は 0-4-1+7-2+5 = <strong>5</strong> になります。"
  },
  {
    id: 93,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "標準",
    langMode: "python",
    title: "2つの条件を同時に満たす回数",
    prompt: "次のプログラムで、count += 1 は何回実行されますか。",
    code: `nums = [2, 5, 8, 11, 14, 17]
count = 0

for n in nums:
    if n % 3 == 2 and n > 10:
        count += 1

print(count)`,
    choices: ["1回", "2回", "3回", "4回", "5回", "6回"],
    correctIndex: 2,
    explanation: "n % 3 == 2 かつ n > 10 を満たす値は 11, 14, 17 の3つです。<br>よって count += 1 は <strong>3回</strong> 実行されます。"
  },
  {
    id: 94,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "python",
    title: "在庫の残りと少ない商品の数",
    prompt: "次のプログラムを実行したとき、print(remain, count) の出力として正しいものを選びなさい。",
    code: `stock = [12, 9, 15, 7, 10]
sold = [3, 4, 5, 2, 6]
remain = []
count = 0

for i in range(len(stock)):
    remain.append(stock[i] - sold[i])
    if remain[i] < 8:
        count += 1

print(remain, count)`,
    choices: [
      "[9, 5, 10, 5, 4] 3",
      "[9, 5, 10, 5, 4] 2",
      "[15, 13, 20, 9, 16] 0",
      "[3, 4, 5, 2, 6] 5",
      "[9, 5, 10, 5, 4] 5",
      "[12, 9, 15, 7, 10] 3"
    ],
    correctIndex: 0,
    explanation: "残りは順に 12-3=9, 9-4=5, 15-5=10, 7-2=5, 10-6=4 です。<br>8未満は 5, 5, 4 の3個なので、出力は <strong>[9, 5, 10, 5, 4] 3</strong> です。"
  },
  {
    id: 95,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "python",
    title: "前日より増えた日を数える",
    prompt: "前の値より大きくなった回数を数えるには、[ ア ] に何を入れればよいですか。",
    code: `temps = [18, 20, 19, 22, 22, 25]
count = 0

for i in range(1, len(temps)):
    if [ ア ]:
        count += 1

print(count)`,
    choices: [
      "temps[i] > temps[i - 1]",
      "temps[i] < temps[i - 1]",
      "temps[i] == temps[i - 1]",
      "i > temps[i]",
      "temps[i - 1] > i",
      "temps[i] >= 0"
    ],
    correctIndex: 0,
    explanation: "前の値は temps[i - 1]、現在の値は temps[i] です。<br>前より増えたかを調べる条件は <strong>temps[i] > temps[i - 1]</strong> です。"
  },
  {
    id: 96,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "python",
    title: "指定された箱の数を増やす",
    prompt: "次のプログラムを実行したとき、print(boxes) の出力として正しいものを選びなさい。",
    code: `boxes = [3, 0, 2]
moves = [1, 2, 0, 1]

for m in moves:
    boxes[m] += 1

print(boxes)`,
    choices: [
      "[4, 2, 3]",
      "[3, 2, 3]",
      "[4, 1, 3]",
      "[5, 1, 2]",
      "[3, 1, 2]",
      "[1, 2, 0]",
      "[7, 4, 6]",
      "[4, 3, 2]"
    ],
    correctIndex: 0,
    explanation: "moves の値は、増やす箱の添字を表します。<br>添字1を2回、添字2を1回、添字0を1回増やすので、boxes は <strong>[4, 2, 3]</strong> になります。"
  },
  {
    id: 97,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "python",
    title: "隣り合う要素を比較する範囲",
    prompt: "data[i] と data[i + 1] を安全に比較するには、[ ア ] に何を入れればよいですか。",
    code: `data = [3, 5, 4, 6, 8]
pos = -1

for i in [ ア ]:
    if data[i] > data[i + 1]:
        pos = i
        break

print(pos)`,
    choices: [
      "range(len(data) - 1)",
      "range(len(data))",
      "range(1, len(data))",
      "range(len(data) + 1)",
      "range(data[i])",
      "range(0)",
      "range(pos)",
      "range(len(pos))"
    ],
    correctIndex: 0,
    explanation: "data[i + 1] を使うため、i は最後の添字まで進めてはいけません。<br>最後に使える i は len(data)-2 なので、範囲は <strong>range(len(data) - 1)</strong> です。"
  },
  {
    id: 98,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "python",
    title: "余りごとの個数を数える",
    prompt: "次のプログラムを実行したとき、print(bucket) の出力として正しいものを選びなさい。",
    code: `nums = [5, 8, 10, 12, 14, 17, 21]
bucket = [0, 0, 0]

for n in nums:
    bucket[n % 3] += 1

print(bucket)`,
    choices: [
      "[2, 1, 4]",
      "[1, 2, 4]",
      "[4, 1, 2]",
      "[2, 4, 1]",
      "[0, 3, 4]",
      "[3, 2, 2]",
      "[5, 8, 10]",
      "[7, 0, 0]"
    ],
    correctIndex: 0,
    explanation: "3で割った余りごとに数えます。<br>余り0は 12,21 の2個、余り1は 10 の1個、余り2は 5,8,14,17 の4個です。よって <strong>[2, 1, 4]</strong> です。"
  },
  {
    id: 99,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "標準",
    langMode: "python",
    title: "値を半分にする繰り返し",
    prompt: "次のプログラムで、count += 1 は何回実行されますか。",
    code: `x = 48
count = 0

while x > 5:
    x = x // 2
    count += 1

print(x, count)`,
    choices: ["1回", "2回", "3回", "4回", "5回", "6回", "7回", "8回"],
    correctIndex: 3,
    explanation: "x は 48 → 24 → 12 → 6 → 3 と変化します。<br>x が3になると x > 5 を満たさないため停止します。count += 1 は <strong>4回</strong> 実行されます。"
  },
  {
    id: 100,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "python",
    title: "目標に達したら繰り返しを止める",
    prompt: "合計が target 以上になった時点で繰り返しを止めるには、[ ア ] に何を入れればよいですか。",
    code: `items = [4, 7, 3, 6, 5]
target = 18
total = 0
used = 0

for i in range(len(items)):
    total += items[i]
    used += 1
    if [ ア ]:
        break

print(used)`,
    choices: [
      "total >= target",
      "total < target",
      "items[i] == target",
      "used == 0",
      "i == len(items)",
      "items[i] > total",
      "target < 0",
      "total == items[i]"
    ],
    correctIndex: 0,
    explanation: "繰り返しを止めたいのは、ここまでの合計 total が目標 target に達したときです。<br>したがって条件は <strong>total >= target</strong> です。"
  },
  {
    id: 101,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "dncl",
    title: "偶数番目の要素を合計する",
    prompt: "添字が偶数の要素だけを total に加えるには、[ ア ] に何を入れればよいですか。",
    code: `Nums = [5, 8, 3, 6, 7, 2]
total = 0

i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし [ ア ] ならば:
⎿⎿ total = total + Nums[i]

表示する(total)`,
    choices: [
      "i ％ 2 == 0",
      "i ％ 2 == 1",
      "Nums[i] ％ 2 == 0",
      "Nums[i] ％ 2 == 1",
      "i == Nums[i]",
      "i > Nums[i]"
    ],
    correctIndex: 0,
    explanation: "添字が偶数とは、i が 0, 2, 4, ... になる場合です。<br>2で割った余りが0なので、条件は <strong>i ％ 2 == 0</strong> です。"
  },
  {
    id: 102,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "dncl",
    title: "条件によって足すか引くかを変える",
    prompt: "次のプログラムを実行したとき、表示される total の値として正しいものを選びなさい。",
    code: `Nums = [4, 1, 7, 2, 5]
total = 0

i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] >= 5 ならば:
｜⎿ total = total + Nums[i]
｜そうでなければ:
⎿⎿ total = total - Nums[i]

表示する(total)`,
    choices: ["0", "3", "5", "7", "9", "19"],
    correctIndex: 2,
    explanation: "5以上なら足し、5未満なら引きます。<br>total は 0-4-1+7-2+5 = <strong>5</strong> になります。"
  },
  {
    id: 103,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "標準",
    langMode: "dncl",
    title: "2つの条件を同時に満たす回数",
    prompt: "次のプログラムで、count = count + 1 は何回実行されますか。",
    code: `Nums = [2, 5, 8, 11, 14, 17]
count = 0

i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] ％ 3 == 2 かつ Nums[i] > 10 ならば:
⎿⎿ count = count + 1

表示する(count)`,
    choices: ["1回", "2回", "3回", "4回", "5回", "6回"],
    correctIndex: 2,
    explanation: "3で割った余りが2で、さらに10より大きい値は 11, 14, 17 の3つです。<br>よって count = count + 1 は <strong>3回</strong> 実行されます。"
  },
  {
    id: 104,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "dncl",
    title: "在庫の残りと少ない商品の数",
    prompt: "次のプログラムを実行したとき、表示される Remain と count の組として正しいものを選びなさい。",
    code: `Stock = [12, 9, 15, 7, 10]
Sold = [3, 4, 5, 2, 6]
Remain = [0, 0, 0, 0, 0]
count = 0

i を 0 から 要素数(Stock) - 1 まで 1 ずつ増やしながら繰り返す:
｜Remain[i] = Stock[i] - Sold[i]
｜もし Remain[i] < 8 ならば:
⎿⎿ count = count + 1

表示する(Remain, count)`,
    choices: [
      "[9, 5, 10, 5, 4] 3",
      "[9, 5, 10, 5, 4] 2",
      "[15, 13, 20, 9, 16] 0",
      "[3, 4, 5, 2, 6] 5",
      "[9, 5, 10, 5, 4] 5",
      "[12, 9, 15, 7, 10] 3"
    ],
    correctIndex: 0,
    explanation: "Remain は Stock から Sold を引いた値です。<br>順に [9, 5, 10, 5, 4] となり、8未満は 5, 5, 4 の3個です。よって <strong>[9, 5, 10, 5, 4] 3</strong> です。"
  },
  {
    id: 105,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "dncl",
    title: "前日より増えた日を数える",
    prompt: "前の値より大きくなった回数を数えるには、[ ア ] に何を入れればよいですか。",
    code: `Temps = [18, 20, 19, 22, 22, 25]
count = 0

i を 1 から 要素数(Temps) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし [ ア ] ならば:
⎿⎿ count = count + 1

表示する(count)`,
    choices: [
      "Temps[i] > Temps[i - 1]",
      "Temps[i] < Temps[i - 1]",
      "Temps[i] == Temps[i - 1]",
      "i > Temps[i]",
      "Temps[i - 1] > i",
      "Temps[i] >= 0"
    ],
    correctIndex: 0,
    explanation: "現在の値は Temps[i]、前の値は Temps[i - 1] です。<br>前より増えたかを調べる条件は <strong>Temps[i] > Temps[i - 1]</strong> です。"
  },
  {
    id: 106,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "dncl",
    title: "指定された箱の数を増やす",
    prompt: "次のプログラムを実行したとき、表示される Boxes として正しいものを選びなさい。",
    code: `Boxes = [3, 0, 2]
Moves = [1, 2, 0, 1]

i を 0 から 要素数(Moves) - 1 まで 1 ずつ増やしながら繰り返す:
⎿ Boxes[Moves[i]] = Boxes[Moves[i]] + 1

表示する(Boxes)`,
    choices: [
      "[4, 2, 3]",
      "[3, 2, 3]",
      "[4, 1, 3]",
      "[5, 1, 2]",
      "[3, 1, 2]",
      "[1, 2, 0]",
      "[7, 4, 6]",
      "[4, 3, 2]"
    ],
    correctIndex: 0,
    explanation: "Moves の値は、増やす箱の添字を表します。<br>添字1を2回、添字2を1回、添字0を1回増やすので、Boxes は <strong>[4, 2, 3]</strong> になります。"
  },
  {
    id: 107,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "dncl",
    title: "隣り合う要素を比較する範囲",
    prompt: "Data[i] と Data[i + 1] を安全に比較するには、[ ア ] に何を入れればよいですか。",
    code: `Data = [3, 5, 4, 6, 8]
pos = -1

i を [ ア ] まで 1 ずつ増やしながら繰り返す:
｜もし Data[i] > Data[i + 1] ならば:
｜｜pos = i
⎿⎿ 繰り返しを抜ける

表示する(pos)`,
    choices: [
      "0 から 要素数(Data) - 2",
      "0 から 要素数(Data) - 1",
      "1 から 要素数(Data) - 1",
      "0 から 要素数(Data)",
      "Data[i] から 要素数(Data)",
      "0 から 0",
      "pos から 要素数(Data) - 1",
      "0 から 要素数(pos) - 1"
    ],
    correctIndex: 0,
    explanation: "Data[i + 1] を使うため、i が最後の添字になると範囲外になります。<br>最後に使える i は 要素数(Data)-2 なので、範囲は <strong>0 から 要素数(Data) - 2</strong> です。"
  },
  {
    id: 108,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "標準",
    langMode: "dncl",
    title: "余りごとの個数を数える",
    prompt: "次のプログラムを実行したとき、表示される Bucket として正しいものを選びなさい。",
    code: `Nums = [5, 8, 10, 12, 14, 17, 21]
Bucket = [0, 0, 0]

i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
⎿ Bucket[Nums[i] ％ 3] = Bucket[Nums[i] ％ 3] + 1

表示する(Bucket)`,
    choices: [
      "[2, 1, 4]",
      "[1, 2, 4]",
      "[4, 1, 2]",
      "[2, 4, 1]",
      "[0, 3, 4]",
      "[3, 2, 2]",
      "[5, 8, 10]",
      "[7, 0, 0]"
    ],
    correctIndex: 0,
    explanation: "3で割った余りごとに数えます。<br>余り0は 12,21 の2個、余り1は 10 の1個、余り2は 5,8,14,17 の4個です。よって <strong>[2, 1, 4]</strong> です。"
  },
  {
    id: 109,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "標準",
    langMode: "dncl",
    title: "値を半分にする繰り返し",
    prompt: "次のプログラムで、count = count + 1 は何回実行されますか。",
    code: `x = 48
count = 0

x > 5 の間繰り返す:
｜x = x ÷ 2
⎿ count = count + 1

表示する(x, count)`,
    choices: ["1回", "2回", "3回", "4回", "5回", "6回", "7回", "8回"],
    correctIndex: 3,
    explanation: "x は 48 → 24 → 12 → 6 → 3 と変化します。<br>x が3になると x > 5 を満たさないため停止します。count = count + 1 は <strong>4回</strong> 実行されます。"
  },
  {
    id: 110,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "標準",
    langMode: "dncl",
    title: "目標に達したら繰り返しを止める",
    prompt: "合計が target 以上になった時点で繰り返しを止めるには、[ ア ] に何を入れればよいですか。",
    code: `Items = [4, 7, 3, 6, 5]
target = 18
total = 0
used = 0

i を 0 から 要素数(Items) - 1 まで 1 ずつ増やしながら繰り返す:
｜total = total + Items[i]
｜used = used + 1
｜もし [ ア ] ならば:
⎿⎿ 繰り返しを抜ける

表示する(used)`,
    choices: [
      "total >= target",
      "total < target",
      "Items[i] == target",
      "used == 0",
      "i == 要素数(Items)",
      "Items[i] > total",
      "target < 0",
      "total == Items[i]"
    ],
    correctIndex: 0,
    explanation: "繰り返しを止めたいのは、ここまでの合計 total が目標 target に達したときです。<br>したがって条件は <strong>total >= target</strong> です。"
  },
  {
    id: 111,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "python",
    title: "リストから指定の値を取り出す",
    prompt: "x に 18 を代入するには、[ ア ] に入る値として正しいものを選びなさい。",
    code: `scores = [12, 15, 18, 20]
x = scores[[ ア ]]
print(x)`,
    choices: ["0", "1", "2", "3", "4", "18"],
    correctIndex: 2,
    explanation: "Python のリストは添字が0から始まります。<br>scores[0]=12, scores[1]=15, scores[2]=18 なので、18を取り出す添字は <strong>2</strong> です。"
  },
  {
    id: 112,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "python",
    title: "変数の値を更新する",
    prompt: "次のプログラムを実行したとき、print(x) の出力値として正しいものを選びなさい。",
    code: `x = 6
x = x + 3
x = x * 2
print(x)`,
    choices: ["9", "12", "15", "18", "21", "36"],
    correctIndex: 3,
    explanation: "最初 x=6 です。<br>x=x+3 で9になり、x=x*2 で <strong>18</strong> になります。"
  },
  {
    id: 113,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "基礎",
    langMode: "python",
    title: "for文の繰り返し回数",
    prompt: "次のプログラムで、total += i は何回実行されますか。",
    code: `total = 0

for i in range(2, 7):
    total += i

print(total)`,
    choices: ["2回", "3回", "4回", "5回", "6回", "7回"],
    correctIndex: 3,
    explanation: "range(2, 7) では、i は 2, 3, 4, 5, 6 と変化します。<br>したがって total += i は <strong>5回</strong> 実行されます。"
  },
  {
    id: 114,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "python",
    title: "条件を満たす値だけを足す",
    prompt: "次のプログラムを実行したとき、print(total) の出力値として正しいものを選びなさい。",
    code: `nums = [3, 8, 5, 10, 2]
total = 0

for n in nums:
    if n >= 5:
        total += n

print(total)`,
    choices: ["13", "15", "18", "20", "23", "28"],
    correctIndex: 4,
    explanation: "5以上の値は 8, 5, 10 です。<br>合計は 8+5+10=<strong>23</strong> です。"
  },
  {
    id: 115,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "python",
    title: "合計を求める代入文",
    prompt: "リストの値を順に total に加えるには、[ ア ] に何を入れればよいですか。",
    code: `nums = [2, 4, 6]
total = 0

for n in nums:
    [ ア ]

print(total)`,
    choices: [
      "total += n",
      "total = n",
      "n += total",
      "total -= n",
      "print(n)",
      "nums += n"
    ],
    correctIndex: 0,
    explanation: "total に n を加えて更新するので、代入文は <strong>total += n</strong> です。<br>これは total = total + n と同じ意味です。"
  },
  {
    id: 116,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "python",
    title: "リストの値を1つだけ更新する",
    prompt: "次のプログラムを実行したとき、print(data) の出力として正しいものを選びなさい。",
    code: `data = [4, 7, 1, 9]
data[2] = data[2] + 5
print(data)`,
    choices: [
      "[4, 7, 6, 9]",
      "[4, 12, 1, 9]",
      "[4, 7, 1, 14]",
      "[9, 7, 1, 9]",
      "[4, 7, 5, 9]",
      "[4, 7, 1, 9]",
      "[6, 7, 1, 9]",
      "[4, 6, 1, 9]"
    ],
    correctIndex: 0,
    explanation: "data[2] は3番目の値で、最初は1です。<br>1+5=6 になるので、リストは <strong>[4, 7, 6, 9]</strong> になります。"
  },
  {
    id: 117,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "python",
    title: "リスト全体を添字で調べる",
    prompt: "リストの全要素を添字 i で順に調べるには、[ ア ] に何を入れればよいですか。",
    code: `data = [6, 2, 9, 4]
total = 0

for i in [ ア ]:
    total += data[i]

print(total)`,
    choices: [
      "range(len(data))",
      "range(len(data) - 1)",
      "range(1, len(data))",
      "range(data)",
      "range(total)",
      "range(0)",
      "range(len(i))",
      "range(data[i])"
    ],
    correctIndex: 0,
    explanation: "添字は 0 から len(data)-1 までです。<br>その範囲を順に作るには <strong>range(len(data))</strong> を使います。"
  },
  {
    id: 118,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "python",
    title: "偶数だけを数える",
    prompt: "次のプログラムを実行したとき、print(count) の出力値として正しいものを選びなさい。",
    code: `nums = [1, 4, 6, 7, 10]
count = 0

for n in nums:
    if n % 2 == 0:
        count += 1

print(count)`,
    choices: ["0", "1", "2", "3", "4", "5", "6", "10"],
    correctIndex: 3,
    explanation: "偶数は 4, 6, 10 の3つです。<br>したがって count は <strong>3</strong> になります。"
  },
  {
    id: 119,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "基礎",
    langMode: "python",
    title: "条件が成り立つ回数",
    prompt: "次のプログラムで、count += 1 は何回実行されますか。",
    code: `scores = [45, 80, 62, 59, 70]
count = 0

for s in scores:
    if s >= 60:
        count += 1

print(count)`,
    choices: ["0回", "1回", "2回", "3回", "4回", "5回", "60回", "70回"],
    correctIndex: 3,
    explanation: "60以上の点数は 80, 62, 70 の3つです。<br>よって count += 1 は <strong>3回</strong> 実行されます。"
  },
  {
    id: 120,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "python",
    title: "文字列を条件で数える",
    prompt: "次のプログラムを実行したとき、print(count) の出力値として正しいものを選びなさい。",
    code: `letters = ["A", "B", "A", "C", "A"]
count = 0

for x in letters:
    if x == "A":
        count += 1

print(count)`,
    choices: ["0", "1", "2", "3", "4", "5", "A", "B"],
    correctIndex: 3,
    explanation: "letters の中で \"A\" は1番目、3番目、5番目にあります。<br>合計3個なので、出力は <strong>3</strong> です。"
  },
  {
    id: 121,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "dncl",
    title: "配列から指定の値を取り出す",
    prompt: "x に 18 を代入するには、[ ア ] に入る値として正しいものを選びなさい。",
    code: `Scores = [12, 15, 18, 20]
x = Scores[[ ア ]]
表示する(x)`,
    choices: ["0", "1", "2", "3", "4", "18"],
    correctIndex: 2,
    explanation: "添字は0から始まります。<br>Scores[0]=12, Scores[1]=15, Scores[2]=18 なので、18を取り出す添字は <strong>2</strong> です。"
  },
  {
    id: 122,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "dncl",
    title: "変数の値を更新する",
    prompt: "次のプログラムを実行したとき、表示される x の値として正しいものを選びなさい。",
    code: `x = 6
x = x + 3
x = x × 2
表示する(x)`,
    choices: ["9", "12", "15", "18", "21", "36"],
    correctIndex: 3,
    explanation: "最初 x=6 です。<br>x=x+3 で9になり、x=x×2 で <strong>18</strong> になります。"
  },
  {
    id: 123,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "基礎",
    langMode: "dncl",
    title: "繰り返しの回数",
    prompt: "次のプログラムで、total = total + i は何回実行されますか。",
    code: `total = 0

i を 2 から 6 まで 1 ずつ増やしながら繰り返す:
⎿ total = total + i

表示する(total)`,
    choices: ["2回", "3回", "4回", "5回", "6回", "7回"],
    correctIndex: 3,
    explanation: "i は 2, 3, 4, 5, 6 と変化します。<br>したがって total = total + i は <strong>5回</strong> 実行されます。"
  },
  {
    id: 124,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "dncl",
    title: "条件を満たす値だけを足す",
    prompt: "次のプログラムを実行したとき、表示される total の値として正しいものを選びなさい。",
    code: `Nums = [3, 8, 5, 10, 2]
total = 0

i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] >= 5 ならば:
⎿⎿ total = total + Nums[i]

表示する(total)`,
    choices: ["13", "15", "18", "20", "23", "28"],
    correctIndex: 4,
    explanation: "5以上の値は 8, 5, 10 です。<br>合計は 8+5+10=<strong>23</strong> です。"
  },
  {
    id: 125,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "dncl",
    title: "合計を求める代入文",
    prompt: "配列の値を順に total に加えるには、[ ア ] に何を入れればよいですか。",
    code: `Nums = [2, 4, 6]
total = 0

i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
⎿ [ ア ]

表示する(total)`,
    choices: [
      "total = total + Nums[i]",
      "total = Nums[i]",
      "Nums[i] = total + Nums[i]",
      "total = total - Nums[i]",
      "表示する(Nums[i])",
      "Nums = Nums + i"
    ],
    correctIndex: 0,
    explanation: "total に Nums[i] を加えて更新するので、代入文は <strong>total = total + Nums[i]</strong> です。"
  },
  {
    id: 126,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "dncl",
    title: "配列の値を1つだけ更新する",
    prompt: "次のプログラムを実行したとき、表示される Data として正しいものを選びなさい。",
    code: `Data = [4, 7, 1, 9]
Data[2] = Data[2] + 5
表示する(Data)`,
    choices: [
      "[4, 7, 6, 9]",
      "[4, 12, 1, 9]",
      "[4, 7, 1, 14]",
      "[9, 7, 1, 9]",
      "[4, 7, 5, 9]",
      "[4, 7, 1, 9]",
      "[6, 7, 1, 9]",
      "[4, 6, 1, 9]"
    ],
    correctIndex: 0,
    explanation: "Data[2] は3番目の値で、最初は1です。<br>1+5=6 になるので、Data は <strong>[4, 7, 6, 9]</strong> になります。"
  },
  {
    id: 127,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "基礎",
    langMode: "dncl",
    title: "配列全体を添字で調べる",
    prompt: "配列の全要素を添字 i で順に調べるには、[ ア ] に何を入れればよいですか。",
    code: `Data = [6, 2, 9, 4]
total = 0

i を [ ア ] まで 1 ずつ増やしながら繰り返す:
⎿ total = total + Data[i]

表示する(total)`,
    choices: [
      "0 から 要素数(Data) - 1",
      "0 から 要素数(Data) - 2",
      "1 から 要素数(Data) - 1",
      "Data から 要素数(Data)",
      "total から 要素数(Data)",
      "0 から 0",
      "0 から 要素数(i) - 1",
      "Data[i] から 要素数(Data)"
    ],
    correctIndex: 0,
    explanation: "添字は 0 から 要素数(Data)-1 までです。<br>全要素を調べる範囲は <strong>0 から 要素数(Data) - 1</strong> です。"
  },
  {
    id: 128,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "dncl",
    title: "偶数だけを数える",
    prompt: "次のプログラムを実行したとき、表示される count の値として正しいものを選びなさい。",
    code: `Nums = [1, 4, 6, 7, 10]
count = 0

i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] ％ 2 == 0 ならば:
⎿⎿ count = count + 1

表示する(count)`,
    choices: ["0", "1", "2", "3", "4", "5", "6", "10"],
    correctIndex: 3,
    explanation: "偶数は 4, 6, 10 の3つです。<br>したがって count は <strong>3</strong> になります。"
  },
  {
    id: 129,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "基礎",
    langMode: "dncl",
    title: "条件が成り立つ回数",
    prompt: "次のプログラムで、count = count + 1 は何回実行されますか。",
    code: `Scores = [45, 80, 62, 59, 70]
count = 0

i を 0 から 要素数(Scores) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Scores[i] >= 60 ならば:
⎿⎿ count = count + 1

表示する(count)`,
    choices: ["0回", "1回", "2回", "3回", "4回", "5回", "60回", "70回"],
    correctIndex: 3,
    explanation: "60以上の点数は 80, 62, 70 の3つです。<br>よって count = count + 1 は <strong>3回</strong> 実行されます。"
  },
  {
    id: 130,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "基礎",
    langMode: "dncl",
    title: "文字列を条件で数える",
    prompt: "次のプログラムを実行したとき、表示される count の値として正しいものを選びなさい。",
    code: `Letters = ["A", "B", "A", "C", "A"]
count = 0

i を 0 から 要素数(Letters) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Letters[i] == "A" ならば:
⎿⎿ count = count + 1

表示する(count)`,
    choices: ["0", "1", "2", "3", "4", "5", "A", "B"],
    correctIndex: 3,
    explanation: "Letters の中で \"A\" は1番目、3番目、5番目にあります。<br>合計3個なので、表示される値は <strong>3</strong> です。"
  },
  {
    id: 131,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "作業を早く空く担当者へ割り当てる",
    prompt: "次のプログラムを実行したとき、表示される Available として正しいものを選びなさい。",
    code: `Days = [4, 1, 3, 1, 3, 4, 2, 4, 3]
Available = [1, 1, 1]

work を 0 から 要素数(Days) - 1 まで 1 ずつ増やしながら繰り返す:
｜member = 0
｜i を 1 から 要素数(Available) - 1 まで 1 ずつ増やしながら繰り返す:
｜｜もし Available[i] < Available[member] ならば:
｜⎿⎿ member = i
⎿ Available[member] = Available[member] + Days[work]

表示する(Available)`,
    choices: ["[8, 10, 10]", "[10, 10, 8]", "[9, 9, 10]", "[11, 8, 9]"],
    correctIndex: 1,
    explanation: "各作業を、現在もっとも早く空く担当者に割り当てます。<br>順に更新すると Available は最終的に <strong>[10, 10, 8]</strong> になります。"
  },
  {
    id: 132,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "最も早く空く担当者を探す条件",
    prompt: "作業を最も早く空く担当者に割り当てるには、[ ア ] に入る条件として正しいものを選びなさい。",
    code: `Days = [4, 1, 3, 1, 3, 4]
Available = [1, 1, 1]

work を 0 から 要素数(Days) - 1 まで 1 ずつ増やしながら繰り返す:
｜member = 0
｜i を 1 から 要素数(Available) - 1 まで 1 ずつ増やしながら繰り返す:
｜｜もし [ ア ] ならば:
｜⎿⎿ member = i
⎿ Available[member] = Available[member] + Days[work]

表示する(Available)`,
    choices: [
      "Available[i] < Available[member]",
      "Available[i] > Available[member]",
      "Days[i] < Days[member]",
      "work < member"
    ],
    correctIndex: 0,
    explanation: "最も早く空く担当者を探すので、候補 i の空き日 Available[i] が現在の member より小さいかを調べます。"
  },
  {
    id: 133,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "到着時刻と待ち時間",
    prompt: "次のプログラムを実行したとき、表示される longest の値として正しいものを選びなさい。",
    code: `Arrival = [0, 3, 4, 10, 11, 12]
Start = [0, 0, 0, 0, 0, 0]
Finish = [0, 0, 0, 0, 0, 0]

Start[0] = Arrival[0]
Finish[0] = Start[0] + 5

i を 1 から 要素数(Arrival) - 1 まで 1 ずつ増やしながら繰り返す:
｜Start[i] = 最大値(Arrival[i], Finish[i - 1])
⎿ Finish[i] = Start[i] + 5

longest = 0
i を 0 から 要素数(Arrival) - 1 まで 1 ずつ増やしながら繰り返す:
⎿ longest = 最大値(longest, Start[i] - Arrival[i])

表示する(longest)`,
    choices: ["6", "9", "13", "15"],
    correctIndex: 2,
    explanation: "前の人の終了時刻より早く到着した人は待ちます。<br>最後の人は 12 に到着し、25 に開始するので待ち時間は 13。最大は <strong>13</strong> です。"
  },
  {
    id: 134,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "終了時刻を求める式",
    prompt: "1人あたりの処理時間が service 分のとき、[ ア ] に入る式として正しいものを選びなさい。",
    code: `Arrival = [0, 3, 4, 10]
service = 5
Start = [0, 0, 0, 0]
Finish = [0, 0, 0, 0]

Start[0] = Arrival[0]
Finish[0] = Start[0] + service

i を 1 から 要素数(Arrival) - 1 まで 1 ずつ増やしながら繰り返す:
｜Start[i] = 最大値(Arrival[i], Finish[i - 1])
⎿ Finish[i] = [ ア ]

表示する(Finish)`,
    choices: [
      "Start[i] + service",
      "Arrival[i] + Finish[i - 1]",
      "Finish[i - 1] + i",
      "service - Start[i]"
    ],
    correctIndex: 0,
    explanation: "終了時刻は「開始時刻 + 処理時間」です。したがって Finish[i] = <strong>Start[i] + service</strong> です。"
  },
  {
    id: 135,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "dncl",
    title: "二重の繰り返しと条件判定の実行回数",
    prompt: "次のプログラムにおいて、count = count + 1 は何回実行されますか。",
    code: `count = 0

day を 1 から 5 まで 1 ずつ増やしながら繰り返す:
｜room を 0 から 2 まで 1 ずつ増やしながら繰り返す:
｜｜もし (day + room) ％ 2 == 0 ならば:
⎿⎿⎿ count = count + 1

表示する(count)`,
    choices: ["5回", "6回", "7回", "8回"],
    correctIndex: 2,
    explanation: "day は1〜5、room は0〜2です。<br>day+room が偶数になる組を数えると、1+2+1+2+1 = <strong>7回</strong> です。"
  },
  {
    id: 136,
    pattern: "B",
    patternLabel: "正誤判定",
    difficulty: "発展",
    langMode: "dncl",
    title: "前日より高くなった回数を数える",
    prompt: "Temps の中で、前日より気温が高くなった日数を count に入れるコードとして正しいものを選びなさい。",
    code: `Temps = [22, 24, 23, 27, 29, 28]
# 前日より高くなった回数を count に入れる`,
    choices: [
      `count = 0
i を 1 から 要素数(Temps) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Temps[i] > Temps[i - 1] ならば:
⎿⎿ count = count + 1`,
      `count = 0
i を 0 から 要素数(Temps) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Temps[i] > Temps[i + 1] ならば:
⎿⎿ count = count + 1`,
      `count = 1
i を 1 から 要素数(Temps) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Temps[i] < Temps[i - 1] ならば:
⎿⎿ count = count + 1`,
      `count = 要素数(Temps)`
    ],
    correctIndex: 0,
    explanation: "前日と比較するため、i は1から始めます。<br>比較する式は Temps[i] > Temps[i - 1] です。"
  },
  {
    id: 137,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "必要数を満たしたグループ数",
    prompt: "次のプログラムを実行したとき、表示される group と Filled の組として正しいものを選びなさい。",
    code: `Seats = [2, 4, 1, 3, 2]
Need = [3, 5, 2]
Filled = [0, 0, 0]
group = 0

i を 0 から 要素数(Seats) - 1 まで 1 ずつ増やしながら繰り返す:
｜Filled[group] = Filled[group] + Seats[i]
｜もし Filled[group] >= Need[group] ならば:
｜⎿ group = group + 1
｜もし group == 要素数(Need) ならば:
⎿⎿ 繰り返しを抜ける

表示する(group, Filled)`,
    choices: [
      "1 [6, 0, 0]",
      "2 [6, 6, 0]",
      "2 [3, 5, 0]",
      "3 [6, 6, 2]"
    ],
    correctIndex: 1,
    explanation: "1つ目のグループは 2+4=6 で条件を満たします。<br>2つ目は 1+3+2=6 で条件を満たします。よって <strong>2 [6, 6, 0]</strong> です。"
  },
  {
    id: 138,
    pattern: "A",
    patternLabel: "穴埋め",
    difficulty: "発展",
    langMode: "dncl",
    title: "すべてのグループが完了したら抜ける条件",
    prompt: "すべてのグループが必要数を満たしたら繰り返しを抜けるには、[ ア ] に何を入れればよいですか。",
    code: `Seats = [2, 4, 1, 3, 2]
Need = [3, 5, 2]
Filled = [0, 0, 0]
group = 0

i を 0 から 要素数(Seats) - 1 まで 1 ずつ増やしながら繰り返す:
｜Filled[group] = Filled[group] + Seats[i]
｜もし Filled[group] >= Need[group] ならば:
｜⎿ group = group + 1
｜もし [ ア ] ならば:
⎿⎿ 繰り返しを抜ける

表示する(group)`,
    choices: [
      "group == 要素数(Need)",
      "group == 要素数(Seats)",
      "Filled[group] == 0",
      "i == group"
    ],
    correctIndex: 0,
    explanation: "group は完了したグループ数を表します。<br>完了数が Need の個数と同じになれば、すべてのグループが完了しています。"
  },
  {
    id: 139,
    pattern: "C",
    patternLabel: "実行結果",
    difficulty: "発展",
    langMode: "dncl",
    title: "2次元配列の行ごとの合計",
    prompt: "次のプログラムを実行したとき、表示される best の値として正しいものを選びなさい。",
    code: `Table = [
  [0, 2, 1],
  [3, 1, 0],
  [2, 0, 4]
]

best = 0
r を 0 から 要素数(Table) - 1 まで 1 ずつ増やしながら繰り返す:
｜total = 0
｜c を 0 から 要素数(Table[r]) - 1 まで 1 ずつ増やしながら繰り返す:
｜｜もし Table[r][c] > 0 ならば:
｜⎿⎿ total = total + Table[r][c]
｜もし total > best ならば:
⎿⎿ best = total

表示する(best)`,
    choices: ["3", "4", "6", "10"],
    correctIndex: 2,
    explanation: "各行の合計は、1行目が3、2行目が4、3行目が6です。<br>最大は <strong>6</strong> です。"
  },
  {
    id: 140,
    pattern: "D",
    patternLabel: "実行回数",
    difficulty: "発展",
    langMode: "dncl",
    title: "最大値が更新される回数",
    prompt: "次のプログラムにおいて、best = Nums[i] は何回実行されますか。",
    code: `Nums = [6, 2, 8, 8, 3, 9]
best = 0
count = 0

i を 0 から 要素数(Nums) - 1 まで 1 ずつ増やしながら繰り返す:
｜もし Nums[i] > best ならば:
｜｜best = Nums[i]
⎿⎿ count = count + 1

表示する(best, count)`,
    choices: ["1回", "2回", "3回", "4回"],
    correctIndex: 2,
    explanation: "best は 6、8、9 のときに更新されます。<br>同じ8がもう一度出ても Nums[i] > best ではないため更新されません。よって <strong>3回</strong> です。"
  }
];
