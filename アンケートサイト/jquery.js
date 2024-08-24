$(function () {
  $(".Form-Btn").on("click", function () {
    // ⼊⼒チェック
    if (Inputcheck() == false) {
      return;
    }
    if (window.confirm("送信しますか?") == true) {
      let name = $("#name").val();
      let age = $("#age").val();
      let gender;
      if ($("#gender_man").prop("checked") == true) {
        gender = "男性";
      } else {
        gender = "⼥性";
      }
      let tel = $("#tel").val();
      let email = $("#email").val();
      let todofuken = $("#todofuken").val();
      let Biko = $("#Biko").val();
      // CSVデータの作成
      const csvData = [];
      csvData.push("名前,年齢,性別,電話番号,メールアドレス,出⾝地,備考");
      csvData.push(
        name +
          "," +
          age +
          "," +
          gender +
          "," +
          tel +
          "," +
          email +
          "," +
          todofuken +
          "," +
          Biko
      );
      const csvContent = csvData.join("\n");

      // CSVファイルの作成とダウンロード
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "data.csv";
      link.click();
      window.location.reload();
    }
  });
  /* エラー確認 */
  function Inputcheck() {
    // 名前
    if ($("#name").val().trim() === "") {
      alert("名前が⼊⼒されていません。");
      return false;
    }
    // 年齢
    if ($("#age").val().trim() === "") {
      alert("年齢が⼊⼒されていません。");
      return false;
    }
    // 性別
    if (
      $("#gender_man").prop("checked") == false &&
      $("#gender_woman").prop("checked") == false
    ) {
      alert("性別を選択してください。");
      return false;
    }
    // 電話番号
    if ($("#age").val().trim() === "") {
      alert("電話番号が⼊⼒されていません。");
      return false;
    }
    // メールアドレス
    if ($("#age").val().trim() === "") {
      alert("メールアドレスが⼊⼒されていません。");
      return false;
    }
    return true;
  }
});
