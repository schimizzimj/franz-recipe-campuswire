module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const FranzData = document.querySelector('.feeds-home>.feed-title:nth-child(3)>.unreadpost-badge').innerHTML;

    if (FranzData) {
      direct = 0;
      console.log(Number(FranzData));
      indirect = Number(FranzData);
    }

    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}
