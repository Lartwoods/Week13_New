function formatDate() {
  today = new Date();
  let nd = new Date(2023, 2, 12, 18, 03);
  let diff = today - nd;
  diff = Math.round(diff / 1000);
  if (diff < 1) {
    console.log("прямо сейчас");
  } else if (diff < 1 * 60) {
    console.log(`${Math.round(diff)} сек. назад`);
  } else if (diff < 1 * 60 * 60) {
    console.log(`${Math.round(diff / 60)} мин. назад`);
  } else {
    console.log(new Date().toLocaleString());
  }
}
