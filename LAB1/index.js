var nrmembers = 0;

function addMember() {
  if (nrmembers < 2) {
    nrmembers++;
    $("#personsList").append(
      `<li class="fa fa-male fa-5x" memberId="${nrmembers}"></li>`
    );
  } else {
    alert("There can't be more than 2 persons in the studio");
  }
  if (nrmembers == 2) {
  }
}

function deleteMember() {
  if (nrmembers > 0) {
    $(`li[memberId=${nrmembers}]`).remove();
    nrmembers--;
  } else {
    alert("There is no one in the studio");
  }
}
