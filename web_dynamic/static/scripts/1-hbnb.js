$(() => {
  let checkedBoxes = [];
  $("input[type='checkbox']").change(function () {
    if (this.checked) {
      checkedBoxes.push({ id: this.dataset.id, name: this.dataset.name });
    } else {
      checkedBoxes = checkedBoxes.filter((amenity) => amenity.id !== this.dataset.id);
    }
    let text = '';
    checkedBoxes.forEach((amenity, idx) => {
      if (idx === 0) {
        text += amenity.name;
      } else {
        text += `, ${amenity.name}`;
      }
    });
    $('.amenities h4').text(text);
  });
});
