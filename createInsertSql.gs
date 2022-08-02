function createInsertSql(table) {
  
  const ss = SpreadsheetApp.getActive();
  const eventLoginSheet = ss.getSheetByName(table);
  const data = eventLoginSheet.getDataRange().getValues();

  // テーブルのカラムを取得し、カンマ区切りの文字列に変換する
  const columnList = data[0].join();
  const tempDataSetArray = [];
  for(var r = 1; r < data.length; r++) {
      // 各文字列をシングルクオートで囲む
      const newArray = data[r].map((value) => {return  "'" + value  + "'"});
      // 一時配列に追加
      tempDataSetArray.push(newArray);
  }

  // 各 value は 括弧でくくる
  const hoge = tempDataSetArray.map((value) => {return "(" + value  + ")"});
  // カンマ区切りの文字列に変換
  const values = hoge.join();
  // テーブル名、カラムリスト、値を用いてSQL文を生成
  const sql = `INSERT INTO ${table} (${columnList}) VALUES ${values};`;

  return sql;

}


