var $grid = $('.grid').isotope({ // initialization
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

//reading from buttons based on attribute
$('.filter button').click(function(){
  let value = $(this).attr('data-name')
  console.log(value)
  $grid.isotope({ //filtering what's showing based on value
    filter: value
  })
})

