function main() {

  // SQL化したいテーブルリスト
  const tableNames = [
    "SheetName01",
    "SheetName02",
    "SheetName03",
  ];

  const sqls = [];
  // テーブル名からSQLを作成し、配列に追加しておく
  tableNames.map(function( tableName ) {
    sqls.push(createInsertSql(tableName));  
  });

  // SQLを改行して文字列化
  const sqlStr = sqls.join("\n")
 
  // 書き込むフォルダをIDから取得
  const folder = DriveApp.getFolderById('********');
  const today = Utilities.formatDate(new Date(), 'JST', 'yyyy-MM-dd HH:mm:ss');
  // ファイル名、保存内容、mineTypeを指定して、GoogleDrive に書き込む
  folder.createFile(`${today}.import.sql`, sqlStr, MimeType.PLAIN_TEXT);
}


