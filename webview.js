module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const FranzData = document.querySelector('.feeds-home>.feed-title:nth-child(3)>.unreadpost-badge').innerHTML;
    const directArray = document.querySelectorAll('.dm-list .badge');

    console.log(directArray.length);

    for (var i = directArray.length - 1; i >= 0; i--) {
      direct += Number(directArray[i].innerHTML);
    }


    if (FranzData) {
      console.log(direct);
      console.log(Number(FranzData));
      indirect = Number(FranzData);
    }

    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}
